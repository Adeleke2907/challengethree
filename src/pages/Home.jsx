/** @format */
import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Landing from "../components/Home/Landing";
import Bestseller from '../components/Home/Bestseller';



const Home = () => {
    return (
        <>
            <Header />
            <Landing />
            <Bestseller />
            <Footer />
        </>

    );
};
export default Home