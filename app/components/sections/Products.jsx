import React from "react";
import Image from "next/image";

const Products = () => {
  return (
    <div className="w-full  mt-48 ">
      <div className=" w-full flex flex-col md:flex-row mt-24 ">
        <div className="md:w-1/2 w-full  h-full">
          <img className=" w-full h-full md:ml-16" src={"/ui.jpg"} />
        </div>
        <div className="md:w-1/2  w-full flex-col items-start justify-start text-left m-4">
          <h3 className="text-4xl font-bold mb-4">UI/UX Design</h3>
          <p className="text-lg">
            Vi designer og utvikler brukervennlige og moderne grensesnitt for
            web og mobile applikasjoner.
          </p>
        </div>
      </div>
      <div className=" w-full flex flex-col md:flex-row mt-24 ">
        <div className="md:w-1/2 w-full  h-full">
          <img className=" w-full h-full md:ml-16 " src={"/touch.png"} />
        </div>
        <div className="md:w-1/2  w-full flex-col items-start justify-start text-left m-4">
          <h3 className="text-4xl font-bold mb-4">Mann-Maskin
             Interaksjon</h3>


          <p className="text-lg">
            Ofte referert til som HCI, er dette studiet av hvordan mennesker. Vi hele tiden samhandler med maskiner og teknologi.
          </p>
        </div>
      </div>
      <div className=" w-full flex flex-col md:flex-row mt-24 ">
        <div className="md:w-1/2 w-full  h-full">
          <img className=" w-full h-full md:ml-16" src={"/ai.png"} />
        </div>
        <div className="md:w-1/2  w-full flex-col items-start justify-start text-left m-4">
          <h3 className="text-4xl font-bold mb-4">Vi verdsetter kundenes tid og kontroll</h3>
          <p className="text-lg">
          Så vi tilbyr en app for hvert nettsted som er distribuert som lar deg raskt gjøre endringer ved hjelp av AI
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;
