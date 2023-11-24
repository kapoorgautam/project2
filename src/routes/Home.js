import React from 'react'
import Navbar from '../Components/Navbar';
import HeroImg from "../Components/HeroImg";
// import Work from "../Components/Work";
import Homecontent from "../Components/Homecontent.js";



import Footer from "../Components/Footer";
const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg/>
      
      <Homecontent/>
     
      <Footer/>
      </div>
  );
};

export default Home
