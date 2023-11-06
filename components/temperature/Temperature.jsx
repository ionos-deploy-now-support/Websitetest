import React from "react";
import Bonding from "/images/temperature/Bonding";
import Printing from "/images/temperature/Printing";
import Mvp from "/images/temperature/Mvp";

const Team = () => {
  return (
    <div className="w-full min-h-[calc(100vh-150px)] h-full">
      <div className="min-h-[120px]"></div>
      <div className="flex mt-20 w-full justify-center">
        <div className="flex max-w-[1200px]">
          <div className="w-full px-10 md:px-20">
            <p className="text-3xl md:text-5xl mb-10">Temperature Monitoring</p>
            <div className="md:flex items-center mb-20">
              <p className="text-xl w-full md:w-[60%] md:mr-10 leading-8">
                The temperature of the part during printing is crucial to ensure
                stable printing conditions. For this purpose, LEAM developed the
                Temperature Monitoring system.
                <br />
                <br />
                The Temperature Monitoring system is an add-on that can be
                installed on any large-scale 3D printer. It detects the
                temperature of the printed part and continuously informs the
                user about the current conditions.
              </p>
              <div className="mt-20 md:mt-0 w-full md:w-[40%]">
                <Mvp />
                <p>Mvp</p>
              </div>
            </div>
            <div>
              <p className="text-xl">
                A feedback loop to the printer enables completely new
                possibilities in terms of reliability and print quality. An
                overheating part is detected early, active cooling can be
                activated, or the print speed can be reduced accordingly to save
                the print job. This allows the machine to always print as fast
                as possible saving time and money.
                <br />
                <br />
                Time-consuming temperature simulations before printing are not
                needed. The user can start the job and let the system regulate
                itself. The Temperature Monitoring system works independently
                and due to its 360° coverage, you don't need to worry about it
                during slicing.
                <br />
                <br />
                The monitored temperatures as well as desired machine parameters
                are logged to generate a digital twin of every part. With this
                at hand, a manufacturer can reconstruct every detail of a print
                job and prove the correct production conditions. This data acts
                like a birth certificate that can be associated to the part over
                its entire service life.
              </p>
              <div className="w-full flex justify-center my-20">
                <div className="md:flex p-4 pb-0 w-full">
                  <div className="mb-8 md:mb-0 px-4">
                    <Bonding />
                    <p>Logged Data of bonding temperature</p>
                  </div>
                  <div className="px-4">
                    <Printing />
                    <p>Logged Data of printing speed</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-xl mb-20">
              <p>
                LEAM's Temperature Monitoring system allows you to:
                <br />
                <br />
              </p>
              <div className="w-full">
                <ul className="w-[90%] ml-auto">
                  <li>
                    - Print up to 50% faster than before saving time and money
                    <br />
                    <br />
                  </li>
                  <li>
                    - Be sure that the printed parts never overheat since the
                    manufacturing machine automatically counteracts if needed
                    <br />
                    <br />
                  </li>
                  <li>
                    - Generate a digital twin of every part including bonding
                    temperatures and all desired machine parameters
                    <br />
                    <br />
                  </li>
                </ul>
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
