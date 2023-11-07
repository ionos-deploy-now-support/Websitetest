import React from "react";
import Demex from "/images/demex/Demex";
import HeatersOn from "/images/demex/HeatersOn";
import HeatersOff from "/images/demex/HeatersOff";
import Lamp from "/images/demex/Lamp";

const Team = () => {
  return (
    <div className="w-full min-h-[calc(100vh-150px)] h-full">
      <div className="min-h-[120px]"></div>
      <div className="flex mt-20 w-full justify-center">
        <div className="flex max-w-[1200px]">
          <div className="w-full px-10 md:px-20">
            <p className="text-3xl md:text-5xl mb-10">DEMEX</p>
            <p className="text-base md:text-xl">
              We developed a technology we are calling "DEMEX“, short for
              Directed Energy Material Extrusion. The system is an add-on that
              can easily be integrated into any large-scale 3D printer.
              <br />
              <br />
              Using continuous spectrum light to heat the material just before
              the nozzle, DEMEX welds the layers together. This results in
              unprecedented mechanical performance, even with tough to print
              materials, like semi-crystalline injection molding grades. And
              because it's not a laser, it's safe and easy to integrate.
              <br />
              <br />
              The system monitors and locally re-melts the material, without
              compromising the overall stability of the print. It has 360°
              coverage, so you don't need to worry about orientating it during
              slicing.
            </p>
            <div className="md:flex items-center mt-20">
              <div className="w-full p-5 md:p-20">
                <div>
                  <div className="shadow-leam w-full h-full">
                    <Demex />
                  </div>
                </div>
              </div>
              <div className="w-full p-5 md:p-20">
                <Lamp />
              </div>
            </div>
            <p className="text-xl mt-20">
              The DEMEX system opens up new possibilities for the user and
              enables applications that have so far not been feasible for
              additive manufacturing. You can now:
              <br />
              <br />
            </p>
            <div className="w-full">
              <ul className="w-[90%] ml-auto text-xl list-disc">
                <li>
                  Print parts with isotropic strength and stiffness - No weak
                  spots between the layers
                </li>
                <li>
                  Print with injection molding grades - Take advantage of proven
                  & lower-cost materials in your application.
                </li>
                <li>
                  Combine multiple materials in one print - The right material
                  in the right place, even with a single extruder.
                </li>
                <li>
                  Manufacture parts with new process combinations -
                  Functionalize and individualize CFRP components or injection
                  molded parts.
                </li>
                <li>
                  Interrupt the process if needed - Stop after a production
                  shift, restart the next day where you left off.
                </li>
              </ul>
            </div>
            <div className="md:flex text-center my-20 w-full justify-center">
              <div className="p-8">
                <HeatersOn />
                <p>Heaters on</p>
              </div>
              <div className="p-8">
                <HeatersOff />
                <p>Heaters off</p>
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
