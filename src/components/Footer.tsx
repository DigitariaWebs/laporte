export default function Footer(): JSX.Element {
  return (
    <footer className="mt-10">
      <div className="container mx-auto px-4 py-6">
        <ul className="flex flex-wrap items-center justify-center gap-8 text-sm uppercase tracking-wider text-white/90">
          <li>
            <a href="#" className="hover:text-brand-red focus-visible:text-brand-red">
              Franchise
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-brand-red focus-visible:text-brand-red">
              Emplois
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-brand-red focus-visible:text-brand-red">
              Concept & Histoire
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-brand-red focus-visible:text-brand-red">
              Nous joindre
            </a>
          </li>
        </ul>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
        © {new Date().getFullYear()} La porte. Tous droits réservés.
      </div>
    </footer>
  );
}


