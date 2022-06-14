import React from 'react'
import logo from './Img/logo.png'
import './style.css'
function Footer() {
  return (
    <>
    <div className="top-section"></div>
    <div className="footer">
        <div className="top-bar">
            <div className="logo">
             <img src={logo} className = 'logo1'/>
            </div>
            <div className="info">
                <div className="mission">
                    <h3>Our Mission</h3>
                    <p>
                        To serve the nation and the world by graduating proficient, knowledgeable engineers in the field of Electronics, Communication and related areas through consistent interaction with research organisations and industries.
                    </p>
                </div>
                <div className="links">
                    <a href="">Quick Links</a>
                    <ul>
                        <li>Clubs</li>
                        <li>Program's&nbsp;Regulations</li>
                        <li>Academic&nbsp;Calender</li>
                    </ul>
                </div>
                <div className="contacts">
                    <a href="">Contact</a>
                    <p className="phone"><i className="fa-light fa-envelope"></i>&nbsp;&nbsp;+123456789</p>
                    <p className="mail"><i className="fa-light fa-envelope"></i>&nbsp;&nbsp;example@nitj.ac.in</p>
                </div>
            </div>
        </div>
        <div className="bottom">
        <div className="logoLinks">
            <i className="fab fa-facebook-f" id="facebook"></i>
            <i className="fa-brands fa-instagram" id="instagram"></i>
            <i className="fa-brands fa-twitter" id="twitter"></i>
            <i className="fa-brands fa-linkedin" id="linkedin"></i>
        </div>
        <hr className="h"/>
        <div className="copy">
            <p>© Copyright 2016-2022, All Rights Reserved NIT Jalandhar</p>
        </div>
        </div>
    </div>
    </>
  )
}

export default Footer