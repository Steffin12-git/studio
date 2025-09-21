import Header from '@/components/common/Header';
import Hero from '@/components/landing/Hero';
import About from '@/components/landing/About';
import Skills from '@/components/landing/Skills';
import Projects from '@/components/landing/Projects';
import Education from '@/components/landing/Education';
import Experience from '@/components/landing/Experience';
import Contact from '@/components/landing/Contact';
import Footer from '@/components/common/Footer';
import Certifications from '@/components/landing/Certifications';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-800">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
