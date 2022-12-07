import React from "react";
import SuitsSlider from "./SuitsSlider";

const SuitsSection = () => {
  return (
    <div className="bg-primary ">
       <div className="grid grid-cols-2 container">
        <div className="mt-4  flex flex-col ">
          <p className="text-6xl font-primaryFont">Luxurious stay</p>
        <p>At Noor Mahal we have an array of 125 elegant rooms and suites, which have been furnished with all the modern day comforts.</p>
        </div>
        <div className="mt-12">View More</div>
      </div>
      <SuitsSlider />
    </div>
  );
};

export default SuitsSection;
