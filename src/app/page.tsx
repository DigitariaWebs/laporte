import HeroBanner from '@/components/HeroBanner';
import SectionStrip from '@/components/SectionStrip';
import PromoDoubles from '@/components/PromoDoubles';
import ActionTiles from '@/components/ActionTiles';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import TopCtas from '@/components/TopCtas';
import Partners from '@/components/Partners';
import Contact from '@/components/Contact';
import Centerpiece from '@/components/Centerpiece';

export default function Home() {
  return (
    <>
      <TopCtas />
      <HeroBanner />
      <SectionStrip title="COMMANDE MAINTENANT" />
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
