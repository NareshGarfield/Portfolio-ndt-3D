import Image from "next/image";
import bg from "../../../../public/background/about-bg.jpg";
import RenderModel from "@/components/RenderModel";
// import HatModel from "@/components/models/HatModel";
import AboutDetails from "@/components/about";
import dynamic from "next/dynamic";

const HatModel = dynamic(()=> import("@/components/models/HatModel"), {ssr: false});

export default function Home() {
  return (
    <>
      <Image
        priority
        sizes="100wv"
        src={bg}
        alt="background-image"
        className="-z-50 w-full fixed top-0 left-0 h-full object-cover object-center opacity-65"
      />          
            <div className="w-full h-3/4 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0 z-10">
            <RenderModel>
                <HatModel />
            </RenderModel>
            </div>
           <div className="relative w-full h-screen flex flex-col items-center justify-center">
           <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2
            -translate-x-1/2 -translate-y-1/2">
                <h1 className="font-bold text-5xl xs:text-7xl sm:text-8xl lg:text-9xl text-accent">Nareshkumar</h1>
                  <p className="font-bold text-foreground text-lg">Welcome to my Grand Line!</p>
            </div>
           </div>
           <AboutDetails />
    </>
  );
}
