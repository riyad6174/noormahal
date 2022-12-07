import React from "react";
import noormahalImage from "../assets/Images/noor-mahal-img.jpg";
const AboutSection = () => {
  return (
    <div>
      <div className="container grid grid-cols-2">
        <div className="flex items-center mt-6 font-primaryFont flex-col">
          <div>
            <span className="text-2xl text-secondary"> story of </span> <br />
            <span className="text-2xl">Noormahal Palace, karnal </span>
          </div>
          <div>
            <p>
              Embracing India's rich heritage, Noormahal Palace endorses the
              opulent royalty of the era of Indian maharajas, flaunting an
              enchanting fusion of elements inspired from traditional Mughal and
              Rajputana schools of architecture. A unique mélange of traditional
              royal essence with modern amenities, Noormahal Palace Hotel in
              Karnal exudes warmth and comfort for all its guests by preserving
              the legacy of India's deep-rooted past heritage. Stunningly set in
              vast expanse of natural splendour, Noormahal Palace is truly a one
              of its kind Palace in the region; an epitome of grandiose.
            </p>
          </div>
        </div>
        <div>
          <img className=" px-10" src={noormahalImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
