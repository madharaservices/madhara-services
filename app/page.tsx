// app/page.tsx
import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider"; // Import the final HeroSlider
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials"; 
import Faq from "./components/Faq";
import RequestForm from "./components/RequestForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSlider /> {/* Use the final HeroSlider */}
      <Services />
      <WhyUs />
      <Testimonials />
      <Faq />
      <RequestForm />
      <Footer />
    </main>
  );
}