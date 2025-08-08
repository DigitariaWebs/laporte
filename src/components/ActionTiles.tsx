export default function ActionTiles(): JSX.Element {
  const tiles = [
    { label: 'Promos & Événements' },
    { label: 'Trouve un restaurant' },
    { label: 'Offre une carte-cadeau !' },
  ];

  return (
    <section className="container mx-auto grid gap-4 px-4 py-10 md:grid-cols-3">
      {tiles.map((t) => (
        <div
          key={t.label}
          className="relative grid h-40 place-items-center bg-white text-black transition-transform hover:scale-[1.02] focus-within:scale-[1.02] outline-1 outline-offset-0 hover:outline hover:outline-black/20"
        >
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(181,18,27,0.25),transparent_60%)]" />
          <span className="text-center font-display text-xl uppercase tracking-wide">
            {t.label}
          </span>
        </div>
      ))}
    </section>
  );
}


