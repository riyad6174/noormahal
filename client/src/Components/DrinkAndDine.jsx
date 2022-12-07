import React from "react";
import dineImage from "../assets/Images/dine.jpg";
const DrinkAndDine = () => {
  return (
    <div className="container ">
      <div className="">
        <div>
          <div className="mt-4 flex items-center justify-center flex-col">
            <p className="text-3xl font-primaryFont text-secondary">
              Drink &
            </p>
            <p className="text-3xl font-primaryFont">Dine</p>
            <p className="text-sm px-24 py-4">
              Noormahal Palace, Karnal welcomes its guests to a pleasant dining
              experience with exquisitely hand crafted delicacies. Indulge in
              the art of fine dining from the royal kitchens of India and savour
              global cuisines. Each restaurant has an interesting tale to tell
              on account of its origin or inspiration. Noormahal Palace offers a
              range of settings and cuisines. These are royal dining experiences
              to remember.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 bg-primary">
          <div className="col-span-2">
            <img className="" src={dineImage} alt="" />
          </div>
          <div className="flex items-center px-10">
            <div className="border border-2 border-secondary py-10 px-6">
              <p>FRONTIER MAIL</p>
              <p>
                Step back in time with our award winning restaurant, which takes
                its inspiration from the legendry Frontier Mail train that
                operated between Bombay and Peshawar during pre-independence
                days.
              </p>
              <button className="mt-4 py-2  border border-black bg-black uppercase text-xs text-secondary px-6">
                READ MORE{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-6xl font-primaryFont flex justify-end text-secondary mt-4">
        Noormahal palace
      </div>
    </div>
  );
};

export default DrinkAndDine;
