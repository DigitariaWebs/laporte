'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { ReactElement, useEffect, useMemo, useState } from 'react';
import { assets } from '@/config/assets';

export default function HeroBanner(): ReactElement {
  const [state, setState] = useState<[number, number]>([0, 0]); // [index, direction]
  const [index, direction] = state;

  useEffect(() => {
    const id = setInterval(() => {
      setState(([i]) => [
        (((i + 1) % assets.hero.slides.length) + assets.hero.slides.length) %
          assets.hero.slides.length,
        1,
      ]);
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
  const onDragEnd = (
    _: unknown,
    info: { offset: { x: number }; velocity: { x: number } },
  ) => {
    const swipe = Math.abs(info.offset.x) * info.velocity.x;
    const threshold = 5000;
    if (swipe < -threshold) {
      setState(([i]) => [
        (((i + 1) % assets.hero.slides.length) + assets.hero.slides.length) %
          assets.hero.slides.length,
        1,
      ]);
    } else if (swipe > threshold) {
      setState(([i]) => [
        (i - 1 + assets.hero.slides.length) % assets.hero.slides.length,
        -1,
      ]);
    }
  };

  return (
    <section className="relative isolate pt-6 md:pt-0">
      <div className="relative aspect-[2/1] w-full overflow-hidden blur-xl">
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
              opacity: { duration: 0.4, ease: 'easeInOut' },
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

      {/* Overlay with logo, greeting, and buttons */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
        <Image
          src={assets.logo.src}
          alt={assets.logo.alt}
          width={assets.logo.width}
          height={assets.logo.height}
          className="mb-4"
        />
        <h1 className="font-display mb-6 text-2xl tracking-wide text-white uppercase">
          Bienvenue
        </h1>
        <div className="flex gap-4">
          <a
            href={assets.pdfs.menu}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-red font-display hover:bg-brand-red/90 rounded-lg px-6 py-3 text-lg tracking-wide text-white uppercase transition-colors"
          >
            Parcourir le menu
          </a>
          <a
            href="#"
            className="font-display text-brand-red rounded-lg bg-white px-6 py-3 text-lg tracking-wide uppercase transition-colors hover:bg-gray-100"
          >
            Commander maintenant
          </a>
        </div>
      </div>
    </section>
  );
}
