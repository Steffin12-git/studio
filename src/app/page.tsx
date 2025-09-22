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
        <AnimatedSection id="about">
          <About />
        </AnimatedSection>
        <AnimatedSection id="skills">
          <Skills />
        </AnimatedSection>
        <AnimatedSection id="projects">
          <Projects />
        </AnimatedSection>
        <AnimatedSection id="education">
          <Education />
        </AnimatedSection>
        <AnimatedSection id="certifications">
          <Certifications />
        </AnimatedSection>
        <AnimatedSection id="experience">
          <Experience />
        </AnimatedSection>
        <AnimatedSection id="contact">
          <Contact />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
