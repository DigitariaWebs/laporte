import Image from 'next/image';

export default function AboutShowcase(): JSX.Element {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <div className="relative mx-auto grid place-items-center">
        <div className="relative h-64 w-full max-w-4xl">
          {/* Collage images */}
          <Image
            src="/images/burger-1.jpg"
            alt="Burger 1"
            width={260}
            height={180}
            className="absolute left-6 top-10 rotate-[-4deg] shadow-card"
          />
          <Image
            src="/images/burger-2.jpg"
            alt="Burger 2"
            width={260}
            height={180}
            className="absolute left-1/2 top-0 -translate-x-1/2 rotate-2 shadow-card"
          />
          <Image
            src="/images/burger-3.jpg"
            alt="Burger 3"
            width={260}
            height={180}
            className="absolute right-8 top-8 rotate-[-2deg] shadow-card"
          />
          <Image
            src="/images/drink-1.jpg"
            alt="Cocktail 1"
            width={180}
            height={220}
            className="absolute left-1/3 bottom-0 translate-y-6 rotate-3 shadow-card"
          />
          <Image
            src="/images/drink-2.jpg"
            alt="Cocktail 2"
            width={180}
            height={220}
            className="absolute right-1/3 bottom-2 rotate-[-3deg] shadow-card"
          />
          {/* Yellow doodle chips */}
          <div className="absolute -left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-brand-yellow text-black font-bold">
            ✌️
          </div>
          <div className="absolute -right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-brand-yellow text-black font-bold">
            🌶️
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-[820px] text-center">
        <p className="text-sm leading-6 text-white/80">
          Fait à l’honneur de toutes les mères de ce monde, La Belle et La Bœuf est Chef
          de file dans le monde des burgers. Qualité incomparable et irrésistible, du
          bœuf 100% naturel, jamais congelé et sans ajout d’hormones. Un concept sportif
          anarchiste à l’image de l’époque de la révolution pour la paix qui ne vous
          endormira pas, mais vous gardera confortable et joyeux.
        </p>
        <div className="mt-6">
          <button className="inline-flex items-center gap-2 rounded-none border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-widest hover:bg-white/10">
            DÉCOUVRE LE LIFESTYLE B & B
            <span aria-hidden>›</span>
          </button>
        </div>
      </div>
    </section>
  );
}


