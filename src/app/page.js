import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import ValuesSection from '@/components/ValuesSection';
import JciSection from '@/components/JciSection';
import Story from '@/components/Story';
import Impact from '@/components/Impact';
import Leadership from '@/components/Leadership';
import PresidentFeature from '@/components/PresidentFeature';
import Voices from '@/components/Voices';
import Programs from '@/components/Programs';
import Partners from '@/components/Partners';
import CallToAction from '@/components/CallToAction';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { getHomepageStructuredData } from '@/lib/site';

const homepageStructuredData = getHomepageStructuredData();

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageStructuredData) }}
      />
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <ValuesSection />
        <JciSection />
        <Story />
        <PresidentFeature />
        <Leadership />
        <Voices />
        <Programs />
        <Impact />
        <Partners />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
