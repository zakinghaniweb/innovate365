import Banner from "@/components/Banner/Banner";
import Projects from "@/components/Projects/Projects";
import Services from "@/components/Services/Services";
import Image from "next/image";
import 'aos/dist/aos.css'
import Team from "@/components/Team/Team";
import Contact from "@/components/Contact/Contact";
import FooterTop from "@/components/FooterTop/FooterTop";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Banner />
      <Services />
      <Projects />
      <Team />
      <Contact />
      <FooterTop />
      <Footer />
    </div>
  );
}
