"use client";
import Header from "./components/sections/header";
import Cube from "./components/widgets/cube";
import Products from "./components/sections/Products";
import Intro from "./components/sections/Intro";
import Explain from "./components/sections/Explain";
import Pricing from "./components/sections/Pricing";
import Footer from "./components/sections/Footer";
export default function Home() {
  
  return (
    <div className="bg-black max-w-screen overflow-x-hidden min-h-screen flex text-[#FAF9F6] items-center justify-start relative flex-col md:px-12 px-6 ">
      <Header />
      <Cube />

      {/* Video Section */}
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <video
          className="w-full max-h-screen object-cover grayscale-[60%]"
          src="hero.webm"
          autoPlay
          loop
          muted
        />

        {/* Black Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
      </div>

      {/* Hero Text */}
      <div></div>
      <div className="w-full z-10 border h-[80vh] mx-5 border-t-0 flex flex-col justify-end">
        <h1 className="md:text-[8.5rem] text-6xl font-bold leading-none tracking-tighter text-left mx-8 md:ml-16 z-10 mb-48">
          Vi er et web og digital designfirma
        </h1>
      </div>
      <div className="w-full z-10 border min-h-screen mx-5 border-t-0 flex flex-col justify-between items-center bg-black">
        <Intro />
      </div>
      <div className="w-full z-10 border min-h-screen mx-5 border-t-0 flex flex-col justify-end bg-black">
        <Products />
      </div>
      <div className="w-full z-10 border h-screen mx-5 border-t-0 flex flex-col justify-center items-center bg-black">
        <Explain />
        
      </div>
      <div className="w-full z-10 border h-screen mx-5 border-t-0 flex flex-col justify-center items-center  ">

        <Pricing />
      </div>
      <div className="w-full z-10 border h-screen mx-5 border-t-0 flex flex-col justify-end items-center bg-black  ">

        <Footer />
      </div>

    </div>
  );
}
