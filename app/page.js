import Header from "./components/sections/header";
import Cube from "./components/widgets/cube";

export default function Home() {
  return (
    <div className="bg-black max-w-screen overflow-x-hidden min-h-screen flex text-[#FAF9F6] items-center justify-start relative">
      <Header />
      <Cube />

      {/* Video Section */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video
          className="w-full h-full object-cover grayscale-[60%]"
          src="hero.webm"
          autoPlay
          loop
          muted
        />

        {/* Black Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
      </div>

      {/* Hero Text */}
      <h1 className="md:text-[8.5rem] text-6xl font-bold leading-none tracking-tighter text-left mt-auto mb-48 mx-8 md:ml-16 z-10">
        Vi er et web og digital designfirma
      </h1>
    </div>
  );
}
