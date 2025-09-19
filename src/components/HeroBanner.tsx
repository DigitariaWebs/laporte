"use client";

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { ReactElement, useEffect, useMemo, useState } from 'react';
import { assets } from '@/config/assets';

export default function HeroBanner(): ReactElement {
  const [state, setState] = useState<[number, number]>([0, 0]); // [index, direction]
  const [index, direction] = state;

  useEffect(() => {
    const id = setInterval(() => {
      setState(([i]) => [((i + 1) % assets.hero.slides.length + assets.hero.slides.length) % assets.hero.slides.length, 1]);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  // Variants for directional slide
  const variants = useMemo(
    () => ({
      enter: (dir: number) => ({ x: dir > 0 ? 100 : -100, opacity: 0 }),
      center: { x: 0, opacity: 1 },
      exit: (dir: number) => ({ x: dir > 0 ? -100 : 100, opacity: 0 }),
    }),
    [],
  );

  // Drag swipe support (optional, no visible controls)
  const onDragEnd = (_: unknown, info: { offset: { x: number }; velocity: { x: number } }) => {
    const swipe = Math.abs(info.offset.x) * info.velocity.x;
    const threshold = 5000;
    if (swipe < -threshold) {
      setState(([i]) => [((i + 1) % assets.hero.slides.length + assets.hero.slides.length) % assets.hero.slides.length, 1]);
    } else if (swipe > threshold) {
      setState(([i]) => [((i - 1 + assets.hero.slides.length) % assets.hero.slides.length), -1]);
    }
  };

  return (
    <section className="relative isolate pt-6 md:pt-0">
      <div className="relative w-full aspect-[2/1] overflow-hidden">
        <AnimatePresence mode="popLayout" custom={direction}>
          <motion.div 
            key={assets.hero.slides[index].src}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ 
              duration: 0.5, 
              ease: [0.25, 0.46, 0.45, 0.94],
              opacity: { duration: 0.4, ease: "easeInOut" }
            }}
            className="absolute inset-0"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={onDragEnd}
          >
            <Image
              src={assets.hero.slides[index].src}
              alt={assets.hero.slides[index].alt}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* No arrows or indicators per request */}
      </div>
    </section>
  );
}


