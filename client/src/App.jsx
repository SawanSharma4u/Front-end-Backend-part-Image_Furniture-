import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes
} from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return(
    <Router>
      <Routes>
        <Route exact path="/" element = {<Home />} />
        <Route exact path="/products/:category" element = {<ProductList />} />
        <Route exact path="/product/:id" element = {<Product />} />
        <Route exact path="/cart" element = {<Cart />} />
        <Route exact path="/register" element = {user ? <Navigate to ="/" /> : <Register />} />
        <Route exact path="/login" element = {user ? <Navigate to ="/" /> : <Login />} />
      </Routes>
    </Router>
  );
};

export default App; 