import { personalData } from "../utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Skills from "./components/homepage/skills";
import Testimonials from './components/homepage/testimonials'


export default async function Home() {

  return (
    <>
      <HeroSection  />
      <AboutSection />
      <Experience />
      <Skills />
      {/* <Education /> */}
      <Blog />
      {/* <Testimonials /> */}
      <ContactSection />
    </>
  )
};