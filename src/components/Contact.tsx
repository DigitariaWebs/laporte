'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Check } from 'lucide-react';

export default function Contact(): JSX.Element {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    otherSubject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Merci! Nous vous répondrons bientôt.',
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          otherSubject: '',
          message: '',
        });
      } else {
        const data = await res.json().catch(() => ({}));
        setSubmitStatus({
          type: 'error',
          message: data.error || "Une erreur s'est produite.",
        });
      }
    } catch {
      setSubmitStatus({ type: 'error', message: "Un problème réseau s'est produit." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-16 text-center">
          <h1 className="font-display text-brand-black mb-6 text-4xl tracking-wide uppercase md:text-5xl lg:text-6xl">
            NOUS JOINDRE
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-black/80 md:text-xl">
            Pour toute question, réservation ou information, n'hésitez pas à nous écrire.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left */}
          <div>
            <h2 className="font-display text-brand-black mb-6 text-3xl uppercase md:text-4xl">
              Coordonnées
            </h2>
            <p className="mb-8 leading-relaxed text-black/80">
              Retrouvez nos informations de contact et notre localisation.
            </p>

            {/* Map */}
            <div className="mb-8 h-80 overflow-hidden rounded-lg bg-gray-200">
              <a
                href="https://www.google.com/maps/search/802+Rue+Saint-Isidore+J5M+2V4+Saint-Lin-Laurentides+Canada"
                target="_blank"
                rel="noopener noreferrer"
              >
                <iframe
                  src="https://www.google.com/maps?q=802+Rue+Saint-Isidore+J5M+2V4+Saint-Lin-Laurentides+Canada&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation — 802 Rue Saint-Isidore, Saint-Lin-Laurentides"
                />
              </a>
            </div>

            {/* Contact information cards */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-brand-red rounded-lg p-2 text-white">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-sm text-black/60">Téléphone</span>
                  <p className="font-medium text-black">
                    <a
                      href="tel:+14504391711"
                      className="hover:text-brand-red transition-colors"
                    >
                      +1 450-439-1711
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-brand-red rounded-lg p-2 text-white">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-sm text-black/60">Courriel</span>
                  <p className="font-medium text-black">
                    <a
                      href="mailto:contact@laporte.ca"
                      className="hover:text-brand-red transition-colors"
                    >
                      contact@laporte.ca
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-brand-red rounded-lg p-2 text-white">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-sm text-black/60">Adresse</span>
                  <p className="font-medium text-black">
                    802 Rue Saint-Isidore, Saint-Lin-Laurentides, QC J5M 2V4
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-brand-red rounded-lg p-2 text-white">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-sm text-black/60">Heures d'ouverture</span>
                  <p className="font-medium text-black">
                    Dim - Mer: 11h00 - 21h00 · Jeu - Sam: 11h00 - 22h00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-brand-offwhite shadow-card flex h-full flex-col rounded-2xl p-8">
            {submitStatus.type === 'success' ? (
              <div className="flex flex-1 flex-col items-center justify-center text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-black">Merci!</h3>
                <p className="mb-8 max-w-md text-lg text-black/70">
                  Nous vous répondrons sous peu.
                </p>
                <button
                  onClick={() => {
                    setSubmitStatus({ type: null, message: '' });
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      subject: '',
                      otherSubject: '',
                      message: '',
                    });
                  }}
                  className="bg-brand-red rounded-none px-6 py-3 font-medium text-white transition-colors duration-200 hover:brightness-110"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-1 flex-col space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-medium text-black">
                    Nom <span className="text-brand-red">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-black/20 bg-white px-4 py-3 text-black placeholder-black/40"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-black">
                    Courriel <span className="text-brand-red">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-black/20 bg-white px-4 py-3 text-black placeholder-black/40"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-black">
                    Téléphone <span className="text-brand-red">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-black/20 bg-white px-4 py-3 text-black placeholder-black/40"
                    placeholder="Votre téléphone"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-black">
                    Sujet <span className="text-brand-red">*</span>
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-black/20 bg-white px-4 py-3 text-black"
                  >
                    <option value="">Choisir un sujet</option>
                    <option value="reservation">Réservation</option>
                    <option value="commande">Commande</option>
                    <option value="commentaire">Commentaire</option>
                    <option value="other">Autre</option>
                  </select>
                </div>

                {formData.subject === 'other' && (
                  <div>
                    <label className="mb-2 block text-sm font-medium text-black">
                      Autre sujet
                    </label>
                    <input
                      type="text"
                      name="otherSubject"
                      value={formData.otherSubject}
                      onChange={handleInputChange}
                      className="w-full border border-black/20 bg-white px-4 py-3 text-black placeholder-black/40"
                      placeholder="Précisez le sujet"
                    />
                  </div>
                )}

                <div className="flex-1">
                  <label className="mb-2 block text-sm font-medium text-black">
                    Message <span className="text-brand-red">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full border border-black/20 bg-white px-4 py-3 text-black placeholder-black/40"
                    placeholder="Écrivez votre message..."
                  />
                </div>

                <div className="mt-auto">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full rounded-none px-6 py-3 font-semibold transition-colors duration-200 ${
                      isSubmitting
                        ? 'cursor-not-allowed bg-black/20 text-black/60'
                        : 'bg-brand-red text-white hover:brightness-110'
                    }`}
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
