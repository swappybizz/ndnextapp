"use client";
import { useState } from "react";
import React from "react";

const Explain = () => {
  const [slideno, setSlideNo] = useState("cp1.svg");
  const TextRelatedToSlide = {
    "cp1.svg":
      "Din DN mobil app med AI og WebExperter som kan hjelpe deg med å gjøre endringer på nettstedet ditt.",
    "cp2.svg":
      "Vi og DN AI skal Design din Kontent og kraft din en 'Stunning' nettside.",
    // Changes appear directly in your website
    "cp3.svg": "Endringer vises direkte på nettstedet ditt",
  };

return (
    <>
        <div
        id="App"
            // flip through cp1, cp2, and cp3.svg
            onClick={() => {
                if (slideno === "cp1.svg") {
                    setSlideNo("cp2.svg");
                } else if (slideno === "cp2.svg") {
                    setSlideNo("cp3.svg");
                } else if (slideno === "cp3.svg") {
                    // corrected this line
                    setSlideNo("cp1.svg");
                } else {
                    setSlideNo("cp1.svg");
                }
            }}
            className="bg-red-600 w-3/4 h-3/4 cursor-pointer flex md:flex-row flex-col items-center justify-center transition-all ease-in-out duration-300 hover:scale-105 "
            style={{ maxWidth: "100%", margin: "0 auto" }}
        >
            <h4
            className="md:hidden font-semibold"
            >
                Klick for å se hva vi kan gjøre for deg
            </h4>

            <img
                className="max-w-[75%] max-h-[75%] object-fit hover:scale-75 ease-in-out duration-500"
                // attach cp1, cp2 or cp3.svg based on teh slide state
                src={slideno}
                style={{ maxWidth: "100%" }}
            ></img>
            <p className="md:text-4xl mt-4 md:mt-0 font-bold leading-none tracking-tighter text-left w-2/3 md:text-center">
                {TextRelatedToSlide[slideno]}
            </p>
        </div>
        <h3 className="text-3xl font-bold leading-none tracking-tighter text-left w-3/4 mt-6 ">
            Se hva vi kan gjøre for deg
        </h3>
        <button className="bg-red-600 text-white text-2xl font-bold px-4 py-2 mt-4">
            Få gratis App
        </button>
    </>
);
};

export default Explain;
