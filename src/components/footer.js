import React from "react";
import "./Footer.css";
import { FaRegCopyright } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <div className="main_footer">
        <div className="timing">
          <li>
            <h3 className="li_heading">OPENING HOURS</h3>
          </li>
          <li>
            MONDAY<p className="li_para">_____________________</p>CLOSED
          </li>
          <li>
            TUESDAY<p className="li_para">___________________</p>9:00-22:00
          </li>
          <li>
            WEDNESDAY<p className="li_para">_______________</p>9:00-22:00
          </li>
          <li>
            THURSDAY<p className="li_para">_________________</p>9:00-22:00
          </li>
          <li>
            FRIDAY<p className="li_para">______________________</p>9:00-1:00
          </li>
          <li>
            SATURDAY<p className="li_para">_________________</p>9:00-22:00
          </li>
          <li>
            SUNDAY<p className="li_para">___________________</p>9:00-22:00
          </li>
        </div>
        <div className="contact">
          <li>
            <h3 className="li_heading">CONTACT US</h3>
          </li>
          <li>Phone: +91 98766-33966</li>
          <li>Email: amandeep33966@gmail.com</li>
          <li>Address: Sector 22c</li>
          <li>Chandigarh, India</li>
        </div>
        <div className="location">
          <li>
            <h3 className="li_heading">LOCATION</h3>
          </li>
          <li>
            <h5 className="li_heading">MR.SIDHU'S SHOP</h5>
          </li>
          <li>Sector 34</li>
          <li>Chandigarh, India</li>
          <li>
            <p className="li_para">____________________________________</p>
          </li>
          <li>
            <h5 className="li_heading">MR. SIDHU'S CAFE</h5>
          </li>
          <li>Sector 22</li>
          <li>Chandigarh, India</li>
        </div>
      </div>
      <div className="lower_footer">
        <div className="lower_footer_made">
          <FaRegCopyright />
          <p className="made_para">Made By A_S_P Casting</p>
        </div>
        <div className="footer_links">
          <div className="icon">
            <a href="https://www.facebook.com/">
              <FaFacebookF />
            </a>
          </div>
          <div className="icon">
            <a href="https://x.com/">
              <FaTwitter />
            </a>
          </div>
          <div className="icon">
            <a href="https://www.instagram.com/">
              <FaInstagram />
            </a>
          </div>
          <div className="icon">
            <a href="https://www.whatsapp.com/">
              <FaWhatsapp />
            </a>
          </div>
          <div className="icon">
            <a href="https://www.youtube.com/">
              <IoLogoYoutube />
            </a>
          </div>
        </div>
        <div className="lower_footer_copy">
            <p className="copy_para">2024 All Right Reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
