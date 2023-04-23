/** @format */
import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Landing from "../components/Home/Landing";
import Bestseller from '../components/Home/Bestseller';
import Addidas from './Addidas';
import Latest from './Latest';
import Featured from './Featured';



const Home = () => {
    return (
        <>
            <Header />
            <Landing />
            <Bestseller />
            <Addidas />
            <Latest />
            <Featured />
            <Footer />
        </>

    );
};
export default Home