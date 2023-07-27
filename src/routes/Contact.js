import React from 'react'
import Navbar from '../Components/Navbar';

import Footer from "../Components/Footer";
import HeroImg2 from '../Components/HeroImg2';

import Form from "../Components/Form"

const Contact = () => {
  return (
    <><div>
      <Navbar />
      <HeroImg2/>

      <Form />
      <Footer />
    </div><div className="text1">
        <h1>Contact</h1>
        <p>lets have some chat....</p>
      </div></>
  )
}

export default Contact
