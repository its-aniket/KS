import Image from "next/image";
import Header from "@/components/Header";
import Landing from "@/components/Landing";
import Description from "@/components/Description";
import Slidingimages from "@/components/Slidingimages";
import ProjectGallery from "@/components/ProjectGallery";
import Contact from "@/components/Contact";
export default function Home() {
  return (
    <div className="">
      <Header />
      <Landing />
      <Description />
      <Slidingimages />
      <ProjectGallery />
      <Contact />
    </div>
  );
}
