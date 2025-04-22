
import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutTNT from "../components/AboutTNT";
import Achievements from "../components/Achievements";
import Gallery from "../components/Gallery";
import EventInfo from "../components/EventInfo";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="w-full bg-background text-foreground scroll-smooth font-poppins">
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <AboutTNT />
        </section>
        <section id="achievements">
          <Achievements />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
        <section id="darpan">
          <EventInfo />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
