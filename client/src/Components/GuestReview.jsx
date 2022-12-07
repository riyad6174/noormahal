import React from "react";
import bretImage from "../assets/Images/lee.jpg";

const GuestReview = () => {
  return (
    <div className="container">
      <div>
        <div className="mt-4 flex items-center justify-center flex-col">
          <p className="text-3xl font-primaryFont text-secondary">
            Guest 
          </p>
          <p className="text-3xl font-primaryFont ">
            Reviews 
          </p>
        
          <p className="text-xs px-16 py-10">
            Making a place in the hearts of our esteemed guests, we have left
            them with a few words of praise. Here's what some of them have to
            say about us.
          </p>

          <div>
            <div className="flex items-center justify-center">
              <img
                className="rounded-full border-2 border-black w-24 h-24"
                src={bretImage}
                alt=""
              />
            </div>
            <div className="py-8 flex items-center justify-center flex-col">
              <p className="text-lg font-primaryFont">Brett lee</p>
              <p className="text-sm font-primaryFont">Autralian Cricketer</p>
              <p>
                I hear the train is coming!!! What a lovely place.. Thanks for
                the great day!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestReview;
