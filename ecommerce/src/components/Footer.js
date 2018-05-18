import React from 'react';
import {FaClose, FaCcVisa, FaCcAmex, FaCcMastercard, FaCcPaypal, FaHome, FaPlus, FaInstagram, FaFacebookSquare, FaYoutubeSquare, FaTwitterSquare, FaShoppingCart } from 'react-icons/lib/fa'


const Footer = (props) => {
  return (
    <div className="footer">
      <div className="fup">
        <div className="f1">
          <div className="f2">
            <a href="#"> About </a>
            <a href="#"> Contact </a>
            <a href="#"> Careers </a>
          </div>
          <div className="f2">
            <a href="#"> Find Store </a>
            <a href="#"> Returns </a>
            <a href="#"> Help </a>
          </div>
        </div>
        <div className="fz" >
          <a href="#"> <FaInstagram /> </a>
          <a href="#"> <FaFacebookSquare /> </a>
          <a href="#"> <FaTwitterSquare /> </a>
          <a href="#"> <FaYoutubeSquare /> </a>
        </div>
      </div>

      <div className="fbottom">
        <hr />
        <div className="fb1">
          <a href="#"> <FaCcVisa /> </a>
          <a href="#"> <FaCcAmex /> </a>
          <a href="#"> <FaCcMastercard /> </a>
          <a href="#"> < FaCcPaypal /> </a>
        </div>
      </div>

    </div>
  );
}

export default Footer;
