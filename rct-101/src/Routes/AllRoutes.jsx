import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import AddToCart from "../Pages/AddToCart";
import Blog from "../Pages/Blog";
import ContactUs from "../Pages/ContactUs";
import LogIn from "../Pages/LogIn";
import Shop from "../Pages/Shop";

export default function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<AboutUs/>}/>
            <Route path="/addtocard" element={<AddToCart/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/contactus" element={<ContactUs/>}/>
            <Route path="/login" element={<LogIn/>}/>
            <Route path="/shop" element={<Shop/>}/>
            
        </Routes>
    )
}