import React from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import BlogPage from "./pages/BlogPage/BlogPage";
import NotFound from "./pages/NotFound/NotFound";
import Header from "./components/Header/Header";

import "./App.css";
import "./css/Default.css"
import ServicePage from "./pages/ServicePage/ServicePage";
import './css/responsive.css'
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <>
            <Header />
            <Toaster />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="blog" element={<BlogPage />} />
                <Route path="services" element={<ServicePage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer/>
        </>
    );
};

export default App;
