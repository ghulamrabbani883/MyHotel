import React from 'react'
import  Navbar  from '../Components/Navbar';
import  Banner  from '../Components/Banner';
import Footer from '../Components/Footer'
import About from '../Components/About';


const Home = () => {
    return (
        <>
         <Navbar />
         <Banner /> 
         <About />
         <Footer />  
        </>
    )
}

export default Home
