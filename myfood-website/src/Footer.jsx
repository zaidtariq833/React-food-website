import React from 'react'
import "./FooterStyles.css"
import {FaFacebookSquare, FaInstagramSquare, FaTwitterSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="container">
            <div className="col">
                <h3>Explore Our Menu</h3>
                <p>Nutrition</p>
                <p>Ingredients</p>
                <p>Drink menu</p>
                <p>Menu</p>
            </div>
            <div className="col">
                <h3>Get to know Us</h3>
                <p>About Us</p>
                <p>Franchising</p>
                <p>Foundations</p>
                <p>Mission Statements</p>
                <p>Goals</p>
            </div>
            <div className="col">
                <h3>Get in touch</h3>
                <p>Career</p>
                <p>Press</p>
                <p>Contact Us</p>
                <p>Get social</p>
            </div>
            <div>
                <h3>Let's Connect</h3>
                <div className="social">
                    <FaFacebookSquare className='icons' />
                    <FaInstagramSquare className='icons' />
                    <FaTwitterSquare className='icons' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer