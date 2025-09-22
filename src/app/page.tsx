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
import { AnimatedSection } from '@/components/common/AnimatedSection';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col text-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <AnimatedSection id="about" direction="right">
          <About />
        </AnimatedSection>
        <AnimatedSection id="skills" direction="left">
          <Skills />
        </AnimatedSection>
        <AnimatedSection id="projects" direction="right">
          <Projects />
        </AnimatedSection>
        <AnimatedSection id="education" direction="left">
          <Education />
        </AnimatedSection>
        <AnimatedSection id="certifications" direction="right">
          <Certifications />
        </AnimatedSection>
        <AnimatedSection id="experience" direction="left">
          <Experience />
        </AnimatedSection>
        <AnimatedSection id="contact" direction="right">
          <Contact />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
