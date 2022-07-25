const express = require("express");
const dotenv = require("dotenv");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
   mode: "core",
}
app.use(cors(corsOptions))
dotenv.config();
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("success"))
    .catch((err) => {
        console.log(err);
});

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);

app.listen(5000, function(req, res){
    console.log("conneted");
});