import React from "react";
import offerImage from "../assets/Images/offer.jpg";

const OfferSection = () => {
  return (
    <div className="w-full  ">
      <div className="">
        <div>
          <div className="mt-4 flex items-center justify-center flex-col">
            <p className="text-3xl font-primaryFont text-secondary">Noormahal Palace</p>
            <p className="text-3xl font-primaryFont">Offers</p>
            <p className="text-sm px-24 py-4">
              We have curated various lucrative offers and packages for our
              guests to make the most of our warm hospitality. The award winning
              Noormahal Palace brings an array of 'out of the ordinary' choices
              for you. Experience your money's worth with the most attractive
              offers in town.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 bg-primary">
          <div className="flex items-center  px-10">
            <div className="py-10 px-6">
              <p className="text-3xl font-primaryFont ">HAPPY HOURS OFFER</p>
              <p className="text-sm">
                Say cheers to fun-filled times with our happy hours. Valid on
                all days, except long weekends, festivals and New Year, this
                offer includes ‘buy 2 get 1 free’ deal on select drinks. It also
                has a few special add-ons for weekdays such as 10% additional
                discount on weekdays booking, complimentary access to high-speed
                Wi-Fi internet and 30-min spa therapy at just INR 2,000/- net
                per person.
              </p>
              <button className="mt-4 py-2  border border-black bg-black uppercase text-xs text-secondary px-6">
                READ MORE{" "}
              </button>
              <p className="text-sm py-4">Explore More</p>
            </div>
          </div>
          <div className=" ">
            <img className="" src={offerImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferSection;
