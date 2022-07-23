const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//Register
router.post("/register", async (req, res)=>{
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    if(!username || !email || !password ){
        res.status(400).json("please enter your username or email or password");
    }
    const newUser = new User({
        username: username,
        email: email,
        password: CryptoJS.AES.encrypt(password, process.env.SECRET_KEY).toString(),
    });
    try{
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }catch(err){
        res.status(500).json(err);
    }
});

//Login

router.post("/login", async (req, res) => {
    try{
        const user = await User.findOne({username: req.body.username});
        !user && res.status(401).json("Wrong credentials!");

        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
        const pass = hashedPassword.toString(CryptoJS.enc.Utf8);
        pass !== req.body.password && res.status(401).json("Wrong credentials!");

        const accessToken = jwt.sign({
                id:user._id,
                isAdmin: user.isAdmin
            }, 
            process.env.JWT_SK,
            {
                expiresIn: "1d"
            }
        );

        const {password, ...others} = user._doc;

        res.status(200).json({...others, accessToken});

    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;