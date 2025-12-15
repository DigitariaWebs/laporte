"use client";

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
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

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
        setSubmitStatus({ type: 'success', message: "Merci! Nous vous répondrons bientôt." });
        setFormData({ name: '', email: '', phone: '', subject: '', otherSubject: '', message: '' });
      } else {
        const data = await res.json().catch(() => ({}));
        setSubmitStatus({ type: 'error', message: data.error || "Une erreur s'est produite." });
      }
    } catch {
      setSubmitStatus({ type: 'error', message: "Un problème réseau s'est produit." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-wide text-brand-black mb-6">
            NOUS JOINDRE
          </h1>
          <p className="text-lg md:text-xl text-black/80 max-w-3xl mx-auto leading-relaxed">
            Pour toute question, réservation ou information, n'hésitez pas à nous écrire.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left */}
          <div>
            <h2 className="text-3xl md:text-4xl font-display uppercase text-brand-black mb-6">
              Coordonnées
            </h2>
            <p className="text-black/80 mb-8 leading-relaxed">
              Retrouvez nos informations de contact et notre localisation.
            </p>

            {/* Map */}
            <div className="bg-gray-200 h-80 rounded-lg overflow-hidden mb-8">
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
                <div className="p-2 bg-brand-red text-white rounded-lg">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-sm text-black/60">Téléphone</span>
                  <p className="text-black font-medium">
                    <a href="tel:+14504391711" className="hover:text-brand-red transition-colors">
                      +1 450-439-1711
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-red text-white rounded-lg">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-sm text-black/60">Courriel</span>
                  <p className="text-black font-medium">
                    <a href="mailto:contact@laporte.ca" className="hover:text-brand-red transition-colors">
                      contact@laporte.ca
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-red text-white rounded-lg">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-sm text-black/60">Adresse</span>
                  <p className="text-black font-medium">
                    802 Rue Saint-Isidore, Saint-Lin-Laurentides, QC J5M 2V4
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-red text-white rounded-lg">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-sm text-black/60">Heures d'ouverture</span>
                  <p className="text-black font-medium">
                    Lun - Jeu: 11h00 - 21h00 · Ven - Sam: 11h00 - 22h00 · Dim: 11h00 - 21h00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-brand-offwhite p-8 rounded-2xl h-full flex flex-col shadow-card">
            {submitStatus.type === 'success' ? (
              <div className="text-center flex-1 flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Merci!</h3>
                <p className="text-lg text-black/70 mb-8 max-w-md">Nous vous répondrons sous peu.</p>
                <button
                  onClick={() => {
                    setSubmitStatus({ type: null, message: '' });
                    setFormData({ name: '', email: '', phone: '', subject: '', otherSubject: '', message: '' });
                  }}
                  className="px-6 py-3 bg-brand-red text-white rounded-none hover:brightness-110 transition-colors duration-200 font-medium"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Nom <span className="text-brand-red">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-black/20 bg-white text-black placeholder-black/40"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Courriel <span className="text-brand-red">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-black/20 bg-white text-black placeholder-black/40"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Téléphone <span className="text-brand-red">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-black/20 bg-white text-black placeholder-black/40"
                    placeholder="Votre téléphone"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Sujet <span className="text-brand-red">*</span>
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-black/20 bg-white text-black"
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
                    <label className="block text-sm font-medium text-black mb-2">Autre sujet</label>
                    <input
                      type="text"
                      name="otherSubject"
                      value={formData.otherSubject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-black/20 bg-white text-black placeholder-black/40"
                      placeholder="Précisez le sujet"
                    />
                  </div>
                )}

                <div className="flex-1">
                  <label className="block text-sm font-medium text-black mb-2">
                    Message <span className="text-brand-red">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-black/20 bg-white text-black placeholder-black/40"
                    placeholder="Écrivez votre message..."
                  />
                </div>

                <div className="mt-auto">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full font-semibold py-3 px-6 rounded-none transition-colors duration-200 ${
                      isSubmitting ? 'bg-black/20 text-black/60 cursor-not-allowed' : 'bg-brand-red text-white hover:brightness-110'
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

