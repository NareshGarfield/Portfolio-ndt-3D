import Image from "next/image";
import bg from "../../../../public/background/projects-bg.jpg";
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";
import RenderModel from "@/components/RenderModel";
// import Staff from "@/components/models/Staff";
import dynamic from "next/dynamic";

const Staff = dynamic(()=> import("@/components/models/Staff"), {ssr: false});

export default function Home() {
  return (
    <>
      <Image
        priority
        sizes="100wv"
        src={bg}
        alt="background-image"
        className=" -z-50 w-full fixed top-0 left-0 h-full object-cover object-center opacity-65"
      />
            <ProjectList projects={projectsData} />
            <div className="flex items-center justify-center fixed left-1/2
            -translate-x-1/2 lg:translate-x-0 -z-10
            top-16 lg:top-20 lg:-left-14 h-screen">
            <RenderModel>
                <Staff />
            </RenderModel>
            </div>
    </>
  );
}
