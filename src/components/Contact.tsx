"use client";

import Image from 'next/image';
import { FormEvent, useState } from 'react';

export default function Contact(): JSX.Element {
  const [status, setStatus] = useState<string | null>(null);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Merci! Nous vous répondrons bientôt.');
  };

  return (
    <section className="container mx-auto px-4 py-16">
      <h3 className="mb-8 text-center font-display text-3xl md:text-4xl uppercase tracking-wide">
        Nous joindre
      </h3>
      <div className="relative isolate mx-auto max-w-6xl overflow-hidden">
        {/* Giant pizza behind the form */}
        <div className="pointer-events-none absolute right-0 bottom-0 -z-10">
          <Image
            src="/images/pizza.png"
            alt="Pizza"
            width={1000}
            height={700}
            className="w-[680px] md:w-[880px] translate-y-8 md:translate-y-12 object-contain"
            aria-hidden
          />
        </div>

        <div className="mx-auto max-w-4xl bg-brand-offwhite p-8 text-black shadow-card">
          {/* Contact Info */}
          <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="text-center md:text-left">
              <h4 className="mb-2 font-display text-xl uppercase text-brand-red">Adresse</h4>
              <p className="text-sm">
                802 Rue Saint-Isidore<br />
                Saint-Lin - Laurentides, QC J5M 2V4<br />
                Canada
              </p>
            </div>
            <div className="text-center md:text-right">
              <h4 className="mb-2 font-display text-xl uppercase text-brand-red">Téléphone</h4>
              <p className="text-sm">
                <a href="tel:+14504391711" className="hover:text-brand-red transition-colors">
                  +1 450-439-1711
                </a>
              </p>
            </div>
          </div>
        <form onSubmit={submit} className="grid grid-cols-1 gap-6">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium">
              Nom
            </label>
            <input
              id="name"
              name="name"
              required
              className="w-full rounded-none border border-black/20 bg-white px-4 py-3 text-black placeholder-black/40"
              placeholder="Votre nom"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium">
              Courriel
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-none border border-black/20 bg-white px-4 py-3 text-black placeholder-black/40"
              placeholder="votre@email.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={8}
              required
              className="w-full rounded-none border border-black/20 bg-white px-4 py-3 text-black placeholder-black/40"
              placeholder="Écrivez votre message..."
            />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xs text-black/70">
              Nous répondons généralement sous 24 heures ouvrables.
            </p>
            <button
              type="submit"
              className="rounded-none bg-brand-red px-6 py-3 text-white font-semibold uppercase tracking-wider"
            >
              Envoyer
            </button>
          </div>
          {status && <p className="text-sm text-brand-red">{status}</p>}
        </form>
        </div>
      </div>
    </section>
  );
}


