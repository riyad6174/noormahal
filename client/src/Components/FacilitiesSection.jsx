import React from "react";

import salonLogo from "../assets/Logo/Saloon.png";
import gymLogo from "../assets/Logo/gym_icon.png";
import indoorLogo from "../assets/Logo/indoor_icon.png";
import natureLogo from "../assets/Logo/nature.png";
import outdoorLogo from "../assets/Logo/outdoor_icon.png";
import spaLogo from "../assets/Logo/spa_icon.png";
const FacilitiesSection = () => {
  return (
    <div
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/7181224/pexels-photo-7181224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
      }}
      className=" bg-no-repeat bg-cover object-cover  h-screen  px-10 mt-20 flex items-center justify-center flex-col"
    ><div className=" ">
      <div className="grid grid-cols-3  ">
        <div className="col-span-2  ">
          <div className="bg-primary px-10 py-10">
            <div className="py-16">
              <p className="text-3xl border-b border-secondary  flex justify-start px-16 font-primaryFont ">
                facilities
              </p>

              <p>
                Noormahal Palace, Karnal has an array of recreational facilities
                for guests to unwind – either by themselves or in the company of
                their loved ones.
              </p>
            </div>
            <div className="grid grid-cols-2 px-16 py-4 gap-6">
            <div className="flex flex-col space-y-4">
                <div className="flex items-center justify-start space-x-4">
                  <div>
                    <img className="h-16 w-32" src={spaLogo} alt="" />
                  </div>
                  <div className="flex flex-col ">
                    <p className="text-lg">Spa</p>
                    <p className="text-sm">
                      Offering an array of pampering therapies to choose from,
                      our Spa is the oasis of peace for guests to rejuvenate
                      their mind, body and soul.
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-start space-x-4">
                  <div>
                    <img className="h-16 w-32" src={gymLogo} alt="" />
                  </div>
                  <div className="flex flex-col ">
                    <p className="text-lg">Spa</p>
                    <p className="text-sm">
                      Offering an array of pampering therapies to choose from,
                      our Spa is the oasis of peace for guests to rejuvenate
                      their mind, body and soul.
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-start space-x-4">
                  <div>
                    <img className="h-16 w-32" src={natureLogo} alt="" />
                  </div>
                  <div className="flex flex-col ">
                    <p className="text-lg">Spa</p>
                    <p className="text-sm">
                      Offering an array of pampering therapies to choose from,
                      our Spa is the oasis of peace for guests to rejuvenate
                      their mind, body and soul.
                    </p>
                  </div>
                </div>
               
              </div>
              {/* 2nd grid */}
              <div className="flex flex-col space-y-4">
                <div className="flex items-center justify-start space-x-4">
                  <div>
                    <img className="h-16 w-32" src={outdoorLogo} alt="" />
                  </div>
                  <div className="flex flex-col ">
                    <p className="text-lg">Spa</p>
                    <p className="text-sm">
                      Offering an array of pampering therapies to choose from,
                      our Spa is the oasis of peace for guests to rejuvenate
                      their mind, body and soul.
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-start space-x-4">
                  <div>
                    <img className="h-16 w-32" src={indoorLogo} alt="" />
                  </div>
                  <div className="flex flex-col ">
                    <p className="text-lg">Spa</p>
                    <p className="text-sm">
                      Offering an array of pampering therapies to choose from,
                      our Spa is the oasis of peace for guests to rejuvenate
                      their mind, body and soul.
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-start space-x-4">
                  <div>
                    <img className="h-16 w-32" src={salonLogo} alt="" />
                  </div>
                  <div className="flex flex-col ">
                    <p className="text-lg">Saluno</p>
                    <p className="text-sm">
                      Offering an array of pampering therapies to choose from,
                      our Spa is the oasis of peace for guests to rejuvenate
                      their mind, body and soul.
                    </p>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    </div>
  );
};

export default FacilitiesSection;
