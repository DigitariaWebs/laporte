import HeroBanner from '@/components/HeroBanner';
import SectionStrip from '@/components/SectionStrip';
import PromoDoubles from '@/components/PromoDoubles';
import ActionTiles from '@/components/ActionTiles';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import Partners from '@/components/Partners';
import Contact from '@/components/Contact';
import Centerpiece from '@/components/Centerpiece';

export default function Home() {
  return (
    <>
      <HeroBanner />
      <Centerpiece />
      <PromoDoubles />
      <Partners />
      <ActionTiles />
      <Newsletter />
      <Contact />
      <Footer />
    </>
  );
}
