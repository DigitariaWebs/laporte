import Image from 'next/image';
import { assets } from '@/config/assets';
import { ReactElement } from 'react';

export default function Centerpiece(): ReactElement {
  return (
    <section
      className="relative w-full min-h-[360px] md:min-h-[480px]"
      style={{
        backgroundImage: `url(${assets.sections.centerpiece.background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container mx-auto grid place-items-center px-4 py-20">
        <div className="relative h-96 w-full max-w-6xl md:h-[560px]">
          <Image
            src={assets.sections.centerpiece.image}
            alt="Burgers"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}


