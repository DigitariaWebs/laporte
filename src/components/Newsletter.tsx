"use client";

import { FormEvent } from 'react';

export default function Newsletter(): JSX.Element {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className="bg-black py-12">
      <div className="container mx-auto px-4 text-center">
        <h3 className="font-display text-2xl md:text-3xl uppercase">
          Inscrivez-vous à notre infolettre
        </h3>
        <form
          onSubmit={onSubmit}
          className="mx-auto mt-6 flex max-w-2xl flex-col gap-3 md:flex-row"
          aria-label="Inscription à l'infolettre"
        >
          <label className="sr-only" htmlFor="email">
            Courriel
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Ton courriel ici"
            className="flex-1 rounded-none border border-white/30 bg-transparent px-4 py-3 text-white placeholder-white/50"
          />
          <button
            type="submit"
            className="rounded-none bg-brand-red px-6 py-3 font-semibold uppercase tracking-widest"
          >
            S&apos;inscrire
          </button>
        </form>
      </div>
    </section>
  );
}


