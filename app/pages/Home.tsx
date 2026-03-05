"use client"

import CollegeIntro from "../components/CollegeIntro";
import CoursesSection from "../components/Courses";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import SlidingCards from "../components/Sliding";
import CollegeLocation from "../components/CollegeLocation";

export default function Home() {
  return (
    <div className="bg-white">
 
    <Hero />
    <CollegeIntro />
    <CoursesSection />
  
    <SlidingCards />
    
    <Gallery />
    <CollegeLocation />
  
    

    </div>
  );
}