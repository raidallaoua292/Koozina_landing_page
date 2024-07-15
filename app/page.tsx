import Blog from "@/components/Blog";
import Courses from "@/components/Courses";
import Featruse from "@/components/Featruse";
import Form from "@/components/Form";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Teacher from "@/components/Teacher";
import TestMnue from "@/components/TestMnue";
import Image from "next/image";

export default function Home() {
  return(
    <main className="">
      <Hero/>
      <Partners/>
      <Featruse/>
      <Courses/>
      <Teacher/>
      <Blog/>
      <TestMnue/>
      <Form/>
    </main>
  )
}
