import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Food from "./Food"
import Craft1 from "../src/assets/craft1.jpg"
import Craft2 from "../src/assets/craft2.jpg"
import Chicken from "../src/assets/chicken.jpg"
import Burger from "../src/assets/burger.jpg"
import HeroBg from "../src/assets/craft1.jpg"
import Footer from "./Footer"


function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <Food bgImg1 = {Craft1} bgImg2 = {Craft2}/>
    <Food bgImg = {Chicken} />
    <Food bgImg = {Burger}/>
    <Footer />
    </>
  );
}

export default App;
