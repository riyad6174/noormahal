import React from "react";
import dineImage from "../assets/Images/dine.jpg";

const MeetingAndEvents = () => {
  return (
    <div className="container ">
      <div className="">
        <div>
          <div className="mt-4 flex items-center justify-center flex-col">
            <p className="text-3xl font-primaryFont text-secondary">
              Meeting &
            </p>
            <p className="text-3xl font-primaryFont">Events</p>
            <p className="text-sm px-24 py-4">
              At Noormahal Palace, Karnal we offer an inventory of 18 banqueting
              facilities for MICE events and social gatherings. These include
              state-of-the-art boardrooms and exquisitely designed banquets with
              pre-function areas and immaculately manicured lawns with an area
              of over 1,70,000 sq. ft.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 bg-primary">
          <div className="flex items-center px-10">
            <div className="border border-2 border-secondary py-10 px-6">
              <p className="uppercase text-2xl">The Longue</p>
              <p>
                The Lounge Access is on the Lobby Floor of the hotel for an
                ultra quick check in with welcome drinks on arrival. On special
                occasions, you can access the lounge in the evening for
                complimentary drinks and light snacks.
              </p>
              <button className="mt-4 py-2  border border-black bg-black uppercase text-xs text-secondary px-6">
                READ MORE{" "}
              </button>
            </div>
          </div>
          <div className="col-span-2">
            <img className="w-full" src={dineImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingAndEvents;
