import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import Collections from "@/components/landing/Collections";
import Features from "@/components/landing/Features";
import Gallery from "@/components/landing/Gallery";
import Testimonials from "@/components/landing/Testimonials";
import CallToAction from "@/components/landing/CallToAction";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <section id="about">
          <About />
        </section>
        <section id="collections">
          <Collections />
        </section>
        <Features />
        <section id="gallery">
          <Gallery />
        </section>
        <Testimonials />
        <CallToAction />
      </main>
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
};

export default Index;