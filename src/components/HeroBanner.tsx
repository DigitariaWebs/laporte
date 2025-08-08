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
      enter: (dir: number) => ({ x: dir > 0 ? 800 : -800, opacity: 0 }),
      center: { x: 0, opacity: 1 },
      exit: (dir: number) => ({ x: dir > 0 ? -800 : 800, opacity: 0 }),
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
    <section className="relative isolate">
      <div className="relative w-full bg-black aspect-[2/1]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={assets.hero.slides[index].src}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={onDragEnd}
          >
            <Image
              src={assets.hero.slides[index].src}
              alt={assets.hero.slides[index].alt}
              fill
              className="object-contain"
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


