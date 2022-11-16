import React from 'react';
import { FaFacebook, FaInstagram, FaPinterestSquare, FaWhatsappSquare } from 'react-icons/fa';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className='footer'>
        <p>Todos los derechos reservados 2022</p>
        <ul>
            <li><FaFacebook /></li>
            <li><FaInstagram /></li>
            <li><FaPinterestSquare /></li>
            <li><FaWhatsappSquare /></li>
        </ul>
    </footer>
  )
}

export default Footer