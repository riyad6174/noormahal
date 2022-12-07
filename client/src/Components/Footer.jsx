import React from "react";
import footerImage from '../assets/Images/footerImage.jpg'
import logo from "../assets/Logo/logo.png"
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
  return (
    <div>
      <div className="grid mt-4 py-10 px-10 gap-6 grid-cols-3 bg-footer text-secondary">
        <div className="flex justify-center items-center"> <img className="h-20 w-34" src={logo} alt="" /></div>
        <div>
          <p>
            Karnal Office : Noormahal Palace X-ing , NH1, Sector-32, Karnal
            (NCR), INDIA
          </p>
          <p> Tel: +919996787884 / 891 / 892</p>
          <p>Email : sales@noormahal.in /</p>
          <p>salesbqts@noormahal.in</p>
        </div>
        <div>
            <img src={footerImage} alt="" />
        </div>
      </div>
      <div className="bg-slate-900 text-secondary  text-sm">
          <ul className="container flex items-center justify-center space-x-4 uppercase px-10 py-4 text-sm">
            <li>
              Our Story
            </li>
            <li>
              Media
            </li>
            <li>
              Gallary
            </li>
            <li>
              Thangs to do
            </li>
            <li>
              Testmonials
            </li>
            <li>
              Terms & Conditions
            </li>
            <li>
              contact
            </li>
            <li>
              faq
            </li>
            <li>
              blog
            </li>
            <li>Geeting here</li>
            <li>site map</li>
          </ul>
          <div className="py-4">
            <p className="text-xs text-secondary flex items-center justify-center">
            Copyright@2022 Noormahal Palace, All rights reserved Powered by Internet Moguls
            </p>
          </div>
      </div>
      <ScrollToTop smooth top={500} color="blue" />
    </div>
  );
};

export default Footer;
