"use client";

import Image from 'next/image';
import { assets } from '@/config/assets';
import { ReactElement, useEffect, useRef, useState } from 'react';

export default function Centerpiece(): ReactElement {
  const [isVisible, setIsVisible] = useState(false);
  const imageWrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const target = imageWrapperRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

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
        <div
          ref={imageWrapperRef}
          className={[
            "relative h-96 w-full max-w-6xl md:h-[560px]",
            // animation
            "transition-all duration-700 ease-out will-change-transform",
            // start off-screen to the right and faded
            isVisible ? "translate-x-0 opacity-100" : "translate-x-12 md:translate-x-20 opacity-0",
          ].join(" ")}
        >
          <Image
            src={assets.sections.centerpiece.image}
            alt="Burgers"
            fill
            className="object-contain"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}


