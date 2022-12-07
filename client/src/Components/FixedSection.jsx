import React from "react";

const FixedSection = () => {
  return (
    <div>
      <div>
        <div
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/5824833/pexels-photo-5824833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
            backgroundAttachment: "fixed",
          }}
          className=" bg-no-repeat bg-cover object-cover h-screen opacity-80  px-10 mt-20 flex items-center justify-center flex-col"
        >
          <p className="font-primaryFont text-2xl text-white">
            NOORMAHAL PALACE MAKES EVERY WEDDING THE TALK OF THE TOWN!
          </p>
          <button className="px-6 py-2 mt-2 bg-white uppercase border">
            Plan my weeding
          </button>
        </div>
      </div>
    </div>
  );
};

export default FixedSection;
