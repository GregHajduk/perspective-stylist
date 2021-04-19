import React from 'react';
import { FaInstagram, FaFacebook, FaBehance } from "react-icons/fa";
import Icons from "../components/Icons";
import ContactForm from './ContactForm';

function Footer() {
    return (
        <div className="footer">
        <ContactForm />
        <div className="footer__details">
        <span>Daniela Ganea</span>
        <span>Tel. <strong>555-555-555</strong></span>
        <span>email : <strong>daniela.ganea01@yahoo.com</strong></span>
      <div className="footer__icons">
        <Icons name={<FaFacebook />} to="#" />
        <Icons name={<FaBehance />} to="#" />
        <Icons name={<FaInstagram />} to="#" />
      </div>
        </div>
        </div>
    );
}



export default Footer
