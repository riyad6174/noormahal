import React from "react";

const SpecialService = () => {
  return (
    <div>
      <div>
        <div
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/5759215/pexels-photo-5759215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
            backgroundAttachment: "fixed",
          }}
          className=" bg-no-repeat opacity-80 bg-cover object-cover h-screen  px-10 mt-20 flex items-center justify-center flex-col"
        >
          <div className="grid grid-cols-3 ">
            <div data-aos="fade-up-right" data-aos-duration="3000" className="border-2 border-white flex items-center justify-center flex-col px-10 py-10 space-y-4">
              <p className="uppercase text-lg text-white">Catering</p>
              <p className="text-sm text-white">
                You can count on our seasoned team of culinary experts to
                delight your guests with remarkable delicacies. Choose from our
                impressive repertoire of food options inspired from both Indian
                states and various global cuisines. We also have live cooking
                counters that serve lip smacking dishes and exhibit the skills
                of our chefs. In addition to this, our pastry chefs can create
                customized cakes and pastries while our sommelier can render
                expert advice on drinks to complement your menu.
              </p>
              <button className="px-10 py-2 bg-secondary">ENQUIRE NOW</button>
            </div>

            <div  data-aos="zoom-out-up" data-aos-duration="3000" className="flex items-center justify-center">
              <p className="text-3xl text-white">OUR SPECIAL SERVICES</p>
            </div>
            <div data-aos="fade-up-left" data-aos-duration="3000" className="border-2 border-white flex items-center justify-center flex-col px-10 py-10 space-y-4">
              <p className="uppercase text-lg text-white">Wedding Planning</p>
              <p className="text-sm text-white">
                From flowers to food, stationery, photographer and everything in
                between, our dedicated wedding coordinators will ensure that
                your plans run smoothly. Leave all your worries and enjoy your D
                Day flawlessly!
              </p>
              <button className="px-10 py-2 bg-secondary">ENQUIRE NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialService;
