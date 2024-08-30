import Header from "./components/sections/header";
import Cube from "./components/widgets/cube";

export default function Home() {
  return (
    <div className="bg-black max-w-screen overflow-x-hidden min-h-screen flex text-[#FAF9F6] items-center justify-start">
      <Header/>
      <Cube/>
      <h1 className="md:text-[8.5rem] text-6xl font-bold leading-none tracking-tighter text-left mt-auto mb-48 mx-8 md:ml-16">
        Vi er et web og digital designfirma
      </h1>
    </div>
  );
}
