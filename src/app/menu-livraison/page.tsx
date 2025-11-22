import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Menu Livraison - Restaurant La Porte',
  description: 'Menu complet de livraison du Restaurant La Porte à Saint-Lin-Laurentides',
};

interface PizzaItem {
  number: number;
  name: string;
  description?: string;
  prices: string[];
}

interface MenuItem {
  name: string;
  price: string;
}

interface PoutineItem {
  name: string;
  priceSmall: string;
  priceLarge?: string;
}

interface SpecialItem {
  number: number;
  price: string;
  title: string;
  items: string[];
}

const pizzaSizes = ["10'' (Bamb)", "12'' (Petite)", "14'' (Moy)", "16'' (Large)", "17'' (X-Large)", "18'' (Jumbo)"];

const pizzas: PizzaItem[] = [
  {
    number: 1,
    name: "SPÉCIAL LA PORTE",
    description: "Toute garnie avec bacon et oignons",
    prices: ["17,95", "21,95", "25,95", "30,95", "35,95", "38,95"]
  },
  {
    number: 2,
    name: "TOUTE GARNIE",
    prices: ["15,95", "20,95", "24,95", "28,95", "34,95", "36,95"]
  },
  {
    number: 3,
    name: "PEPPERONI FROMAGE",
    prices: ["14,95", "19,95", "23,95", "27,95", "32,95", "34,95"]
  },
  {
    number: 4,
    name: "FRUITS DE MERS",
    description: "Pétoncles, crevettes, goberge, sauce blanche",
    prices: ["20,95", "25,95", "33,95", "36,95", "42,95", "44,95"]
  },
  {
    number: 5,
    name: "SPÉCIAL ST-LIN",
    description: "Boeuf haché, oignons, piments, champignons",
    prices: ["19,95", "24,95", "32,95", "35,95", "41,95", "43,95"]
  },
  {
    number: 6,
    name: "SPÉCIAL LAURENTIDES",
    description: "Toute garnie avec spaghetti sauce viande à l'intérieur",
    prices: ["17,95", "21,95", "26,95", "30,95", "34,95", "37,95"]
  },
  {
    number: 7,
    name: "SPÉCIAL DÉLI",
    description: "Toute garnie, smoked meat",
    prices: ["18,95", "22,95", "27,95", "31,95", "36,95", "40,95"]
  },
  {
    number: 8,
    name: "SPÉCIAL 3 VIANDES",
    description: "Pepperoni, saucisses italiennes et bacon",
    prices: ["18,95", "22,95", "27,95", "31,95", "36,95", "40,95"]
  },
  {
    number: 9,
    name: "NATURE",
    description: "Seulement avec fromage",
    prices: ["14,95", "19,95", "23,95", "27,95", "32,95", "34,95"]
  },
  {
    number: 10,
    name: "GRECQUE",
    description: "Feta, olives noires, oignons, tomates, fromage",
    prices: ["17,95", "21,95", "26,95", "30,95", "35,95", "38,95"]
  },
  {
    number: 11,
    name: "VÉGÉTARIENNE",
    description: "Champignons, piments, oignons, tomates, brocolis, chou-fleurs",
    prices: ["17,95", "21,95", "26,95", "30,95", "35,95", "38,95"]
  },
  {
    number: 12,
    name: "HAWAÏENNE",
    description: "Jambons et ananas",
    prices: ["17,95", "21,95", "26,95", "30,95", "35,95", "38,95"]
  }
];

const frites: MenuItem[] = [
  { name: "Frites", price: "5,25" },
  { name: "Frites familiale", price: "9,95" },
  { name: "Frites sauce BBQ", price: "6,95" },
  { name: "Frites sauce italienne", price: "6,95" },
  { name: "Rondelles d'oignons", price: "6,95" }
];

const poutines: PoutineItem[] = [
  { name: "Poutine régulière", priceSmall: "9,95", priceLarge: "14,95" },
  { name: "Poutine italienne", priceSmall: "10,95", priceLarge: "15,95" },
  { name: "Poutine pepperoni", priceSmall: "10,95", priceLarge: "15,95" },
  { name: "Poutine poulet", priceSmall: "11,95", priceLarge: "16,95" },
  { name: "Poutine smoked meat", priceSmall: "11,95", priceLarge: "16,95" }
];

const specials: SpecialItem[] = [
  {
    number: 1,
    price: "37,95",
    title: "1 Pizza 14'' (moyenne)",
    items: [
      "Toute garnie ou pepperoni fromage",
      "2 petites poutines ou 2 petits spaghettis sauce à la viande"
    ]
  },
  {
    number: 2,
    price: "59,95",
    title: "2 Pizzas 16'' (large)",
    items: [
      "Toute garnie ou pepperoni fromage",
      "1 frite familiale + 4 liqueurs"
    ]
  },
  {
    number: 3,
    price: "43,95",
    title: "2 Sous-marins 14''",
    items: [
      "Au choix",
      "2 frites + 2 liqueurs"
    ]
  },
  {
    number: 4,
    price: "34,95",
    title: "2 Lasagnes",
    items: [
      "Gratinées ou La Porte",
      "2 pains à l'ail"
    ]
  },
  {
    number: 5,
    price: "36,95",
    title: "Familiale 4 pâtes gratinées",
    items: [
      "Choix : penne, lasagne, spaghetti, rigatoni"
    ]
  },
  {
    number: 6,
    price: "30,95",
    title: "Familiale 4 pâtes sauce viande",
    items: [
      "Choix : penne, lasagne, spaghetti, rigatoni"
    ]
  }
];

export default function MenuLivraisonPage() {
  return (
    <main className="min-h-screen bg-[#F3F1ED]">
      {/* Header */}
      <div className="bg-[#B5121B] py-12 text-center text-white">
        <h1 className="font-display text-5xl font-bold uppercase tracking-wide md:text-6xl">
          Menu de Livraison
        </h1>
        <p className="mt-4 text-xl font-light">Restaurant La Porte</p>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        {/* Pizzas Section */}
        <section className="mb-16">
          <h2 className="mb-6 font-display text-4xl font-bold uppercase text-[#B5121B]">
            Nos Pizzas
          </h2>
          
          <div className="mb-6 rounded-lg bg-white p-6 shadow-md">
            <p className="mb-3 font-semibold text-[#0B0B0B]">
              Choix de sauce : <span className="font-normal">Sauce à la viande ou tomate basilic</span>
            </p>
            <div className="overflow-x-auto">
              <div className="flex gap-2 text-sm font-semibold text-[#B5121B]">
                {pizzaSizes.map((size) => (
                  <div key={size} className="min-w-[90px] text-center">
                    {size}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {pizzas.map((pizza) => (
              <div key={pizza.number} className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
                <div className="mb-4">
                  <h3 className="font-display text-2xl font-bold text-[#0B0B0B]">
                    {pizza.number}. {pizza.name}
                  </h3>
                  {pizza.description && (
                    <p className="mt-1 text-gray-600">{pizza.description}</p>
                  )}
                </div>
                <div className="overflow-x-auto">
                  <div className="flex gap-2">
                    {pizza.prices.map((price, index) => (
                      <div key={index} className="min-w-[90px] text-center">
                        <span className="font-bold text-[#B5121B]">{price} $</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Extras */}
          <div className="mt-6 rounded-lg bg-[#0B0B0B] p-6 text-white">
            <h3 className="mb-4 font-display text-2xl font-bold uppercase">Extras</h3>
            <div className="space-y-2">
              <p>
                <span className="font-semibold">Légumes :</span> 2,00 | 2,50 | 3,00 | 4,50 | 5,25
              </p>
              <p>
                <span className="font-semibold">Viandes / fromage / anchois :</span> 3,00 | 4,00 | 5,00 | 5,50 | 6,75 | 7,25
              </p>
              <p>
                <span className="font-semibold">Crevettes :</span> 5,00 | 6,00 | 7,00 | 9,00 | 11,00
              </p>
            </div>
          </div>
        </section>

        {/* Frites et Poutines */}
        <section className="mb-16">
          <h2 className="mb-6 font-display text-4xl font-bold uppercase text-[#B5121B]">
            Frites et Poutines
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Frites */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-4 font-display text-2xl font-bold text-[#0B0B0B]">Frites</h3>
              <div className="space-y-3">
                {frites.map((item, index) => (
                  <div key={index} className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-gray-800">{item.name}</span>
                    <span className="font-bold text-[#B5121B]">{item.price} $</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Poutines */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-4 font-display text-2xl font-bold text-[#0B0B0B]">
                Poutines <span className="text-sm font-normal">(P = petite | G = grande)</span>
              </h3>
              <div className="space-y-3">
                {poutines.map((item, index) => (
                  <div key={index} className="border-b border-gray-200 pb-2">
                    <div className="flex justify-between">
                      <span className="text-gray-800">{item.name}</span>
                      <span className="font-bold text-[#B5121B]">
                        {item.priceSmall} $ | {item.priceLarge} $
                      </span>
                    </div>
                  </div>
                ))}
                <div className="mt-4 pt-2">
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-800">Extra viande ou fromage</span>
                    <span className="font-bold text-[#B5121B]">4,00 $ | 5,00 $</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Spéciaux */}
        <section className="mb-16">
          <h2 className="mb-6 font-display text-4xl font-bold uppercase text-[#B5121B]">
            Nos Spéciaux
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {specials.map((special) => (
              <div key={special.number} className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
                <div className="mb-4 flex items-start justify-between">
                  <span className="font-display text-3xl font-bold text-[#0B0B0B]">
                    {special.number}.
                  </span>
                  <span className="rounded-full bg-[#FFD400] px-4 py-2 font-display text-2xl font-bold text-[#0B0B0B]">
                    {special.price} $
                  </span>
                </div>
                <h3 className="mb-3 font-display text-xl font-bold text-[#B5121B]">
                  {special.title}
                </h3>
                <ul className="space-y-2">
                  {special.items.map((item, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <span className="mr-2 text-[#B5121B]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Informations */}
        <section className="rounded-lg bg-[#0B0B0B] p-8 text-white shadow-lg">
          <h2 className="mb-6 font-display text-4xl font-bold uppercase text-[#FFD400]">
            Informations
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-3 font-display text-xl font-bold text-[#FFD400]">Adresse</h3>
              <p className="leading-relaxed">
                802, rue Saint-Isidore<br />
                Saint-Lin–Laurentides, QC J7M 2V4
              </p>

              <h3 className="mb-3 mt-6 font-display text-xl font-bold text-[#FFD400]">Téléphone</h3>
              <a href="tel:450-439-1711" className="text-xl font-bold text-white hover:text-[#FFD400] transition-colors">
                450-439-1711
              </a>
            </div>

            <div>
              <h3 className="mb-3 font-display text-xl font-bold text-[#FFD400]">Heures d'ouverture</h3>
              <div className="space-y-2 leading-relaxed">
                <p><span className="font-semibold">Dimanche au mercredi :</span> 11h00 à 21h00</p>
                <p><span className="font-semibold">Jeudi au samedi :</span> 11h00 à 22h00</p>
              </div>

              <h3 className="mb-3 mt-6 font-display text-xl font-bold text-[#FFD400]">Livraison</h3>
              <div className="space-y-2 leading-relaxed">
                <p>Minimum 15 $ avant taxes</p>
                <p>Frais de 5 $ applicables pour certains secteurs</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

