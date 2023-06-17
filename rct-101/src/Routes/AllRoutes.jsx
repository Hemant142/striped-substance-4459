import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import AddToCart from "../Pages/AddToCart";
import Blog from "../Pages/Blog";
import ContactUs from "../Pages/ContactUs";
import LogIn from "../Pages/LogIn";

import PrivateRoute from "./PrivateRoute";
import SingleProduct from "../Pages/SingleProduct";
import SignUp from "../Pages/Signup";
import Shop from "../Pages/Shop";
// import SignUp from "../Pages/Signup";

export default function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<AboutUs/>}/>
            <Route path="/addtocard" element={<PrivateRoute><AddToCart/></PrivateRoute>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/contactus" element={<ContactUs/>}/>
            <Route path="/login" element={<LogIn/>}/>
           <Route path="/products" element={<Shop/>}/>
            <Route path="/signup" element={<SignUp/>}></Route>
            <Route path="/products/:id" element={<PrivateRoute> <SingleProduct /></PrivateRoute>}></Route>

            
        </Routes>
    )
}