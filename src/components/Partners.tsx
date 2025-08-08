import Image from 'next/image';

export default function Partners(): JSX.Element {
  const partners = [
    { src: '/images/part1.png', alt: 'Partenaire 1' },
    { src: '/images/part2.png', alt: 'Partenaire 2' },
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <h3 className="mb-6 text-center font-display text-2xl uppercase tracking-wide">
        Partenaires de Confiance
      </h3>
      <div className="mx-auto grid max-w-4xl grid-cols-2 items-center justify-items-center gap-8">
        {partners.map((p) => (
          <div key={p.src} className="w-full max-w-[260px]">
            <div className="relative aspect-[3/2] w-full">
              <Image src={p.src} alt={p.alt} fill className="object-contain" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


