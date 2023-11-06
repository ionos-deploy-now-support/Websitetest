import React from "react";
import Material from "/images/usecases/Material";
import Twin1 from "/images/usecases/Twin1";
import Twin2 from "/images/usecases/Twin2";

const Team = () => {
  return (
    <div className="w-full min-h-[calc(100vh-150px)] h-full px-20 md:px-0">
      <div className="min-h-[120px]"></div>
      <div className="flex mt-20 w-full justify-center">
        <div className="flex max-w-[1200px]">
          <div className="w-full md:mr-6 md:px-20">
            <p className="text-3xl md:text-5xl mb-10">
              Unprecedented part performance
            </p>
            <p className="text-base md:text-lg">
              3D printed parts oftentimes suffer from strong anisotropy, mainly
              due to weak bonds between the layers. Our DEMEX system uses
              continuous spectrum light to heat the substrate just before the
              nozzle, which allows the material to form a complete bond. The
              result is isotropic, high mechanical part performance that is
              achieved repeatedly and reliably, which enables completely new
              possibilities for additive manufacturing.
            </p>
            <div className="w-full flex justify-center my-20 md:my-40">
              <div className="md:ml-6 flex justify-center w-full md:w-[50%] max-w-[1000px] shadow-leam">
                <Material />
              </div>
            </div>
            <div className="md:flex mb-20 md:mb-40">
              <div className="flex items-center md:mr-12 w-full">
                <div>
                  <p className="text-3xl md:text-5xl mb-6 outline-leam">
                    New process combinations
                  </p>
                  <div className="feature-gradient w-full mb-10 md:mb-0 h-[2px] rotate-180"></div>
                </div>
              </div>
              <p className="text-base md:text-lg w-full">
                With our system you can functionalize and individualize parts
                that are manufactured in another process, such as injection
                molding. It also allows you to print parts from one material,
                interrupt the printing process for material change, and add
                further elements to the part in another material. With DEMEX it
                becomes possible to print on cold surfaces and still achieve
                perfect bonding. You can have the right material at the right
                spot.
              </p>
            </div>
            <div className="md:flex items-center mb-20">
              <div className="mb-20 md:mb-0 md:pr-20 w-full md:w-[40%]">
                <Twin1 />
              </div>
              <div className="w-full md:w-[60%]">
                <p className="text-3xl md:text-5xl mb-6">Digital twin</p>
                <p className="text-base md:text-lg">
                  Parts used in demanding sectors such as aerospace or oil & gas
                  must satisfy the specified mechanical performance and
                  durability. To keep track of every detail of the production
                  process, our systems generate a digital twin of every part. In
                  addition to all relevant machine parameters, the bonding
                  temperature at every position in the part is recorded. This
                  enables the complete and continuous documentation of a part,
                  without additional effort for the manufacturer.
                </p>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <div className="p-4 pb-0 w-full md:w-[50%]">
                <Twin2 />
              </div>
            </div>
            <div className="w-full flex justify-center mb-20">
              <div className="p-4 w-full md:w-[50%]">
                <div className="feature-gradient h-[2px] rotate-180"></div>
              </div>
            </div>
            <div className="mb-20 w-full flex justify-center">
              <a
                href="contact"
                className="border-2 p-2 pb-3 px-10 text-lg hover:bg-white hover:text-black transition-all ease-in"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
