export default function SectionStrip({ title }: { title: string }): JSX.Element {
  return (
    <div className="w-full bg-brand-red">
      <div className="container mx-auto px-4">
        <div className="py-8 md:py-10">
          <h2 className="text-center font-display uppercase text-3xl md:text-5xl tracking-wide">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
}


