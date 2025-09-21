import Header from '@/components/common/Header';
import Hero from '@/components/landing/Hero';
import Skills from '@/components/landing/Skills';
import Projects from '@/components/landing/Projects';
import Education from '@/components/landing/Education';
import Experience from '@/components/landing/Experience';
import Contact from '@/components/landing/Contact';
import Footer from '@/components/common/Footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
