"use client"

import CollegeIntro from "../components/CollegeIntro";
import CoursesSection from "../components/Courses";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";

export default function Home() {
  return (
    <div className="bg-white">
    <Navbar />
    <Hero />
    <CollegeIntro />
    <CoursesSection />
    <Gallery />
    <Footer />
    {/* <div className="h-[5000px]">

    </div> */}

    </div>
  );
}