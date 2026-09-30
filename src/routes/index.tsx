import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Leaf,
  ShieldCheck,
  Sparkles,
  Menu,
  X,
  ShoppingBag,
  MessageCircle,
  PackageCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { OrderForm } from "@/components/OrderForm";
import { buildWhatsAppLink, DEFAULT_ORDER_MESSAGE } from "@/config/site";

import heroPouch from "@/assets/hero-pouch-fr.png";
import bowlPowder from "@/assets/bowl-powder.jpg";
import leaves from "@/assets/leaves.jpg";
import usageImg from "@/assets/usage-fr.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Poudre de Moringa Oleifera – 3 300 F CFA | Congo Brazzaville" },
      {
        name: "description",
        content:
          "Poudre de Moringa Oleifera, sachet de 90 g à 3 300 F CFA au Congo Brazzaville. Riche en nutriments essentiels et en antioxydants. Commande rapide sur WhatsApp.",
      },
      { property: "og:title", content: "Poudre de Moringa Oleifera – 3 300 F CFA" },
      {
        property: "og:description",
        content:
          "Le superaliment naturel au quotidien. Sachet de 90 g à 3 300 F CFA, livraison au Congo Brazzaville.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  { href: "#accueil", label: "Accueil" },
  { href: "#bienfaits", label: "Bienfaits" },
  { href: "#utilisation", label: "Utilisation" },
  { href: "#commander", label: "Comment commander" },
  { href: "#faq", label: "FAQ" },
];

const NUTRIMENTS = [
  { label: "Fer", value: "11 % AJR" },
  { label: "Riboflavine B2", value: "11 % AJR" },
  { label: "Vitamine A", value: "9 % AJR" },
  { label: "Magnésium", value: "8 % AJR" },
];

const FAQ = [
  {
    q: "Qu'est-ce que la poudre de Moringa Oleifera ?",
    a: "C'est une poudre obtenue à partir de feuilles de Moringa Oleifera séchées puis finement broyées. Elle s'ajoute simplement à vos boissons ou à vos plats.",
  },
  {
    q: "Quelle quantité utiliser par jour ?",
    a: "Environ une cuillère à café par jour, à mélanger dans une boisson ou dans les aliments, en complément d'une alimentation variée et équilibrée.",
  },
  {
    q: "Quel est le prix et le format ?",
    a: "Le sachet de 90 g est à 3 300 F CFA.",
  },
  {
    q: "Livrez-vous partout au Congo Brazzaville ?",
    a: "Oui, la commande se fait par WhatsApp ou via le formulaire, et nous convenons ensemble du point de livraison et des modalités.",
  },
  {
    q: "Est-ce un médicament ?",
    a: "Non. Ce produit n'est pas un médicament et ne remplace pas une alimentation variée et équilibrée. En cas de doute, demandez l'avis d'un professionnel de santé.",
  },
];

function Index() {
  const [open, setOpen] = useState(false);
  const waLink = buildWhatsAppLink(DEFAULT_ORDER_MESSAGE);

  return (
    <div className="min-h-screen bg-background">
      {/* Meta Pixel : coller ici le script fourni par Meta */}

      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <a href="#accueil" className="flex items-center gap-2 font-semibold text-primary">
            <Leaf className="size-5 text-leaf" />
            Moringa Oleifera de la Teranga
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground lg:flex">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors hover:text-primary">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:block">
            <Button asChild variant="leaf">
              <a href="#commander">Commander</a>
            </Button>
          </div>
          <button
            className="cursor-pointer text-primary lg:hidden"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
        {open && (
          <nav className="border-t border-border bg-background px-4 pb-4 lg:hidden">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block border-b border-border/50 py-3 text-sm font-medium text-foreground"
              >
                {item.label}
              </a>
            ))}
            <Button asChild variant="leaf" className="mt-4 w-full">
              <a href="#commander" onClick={() => setOpen(false)}>
                Commander
              </a>
            </Button>
          </nav>
        )}
      </header>

      {/* HERO */}
      <section id="accueil" className="hero-surface pt-16 text-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 lg:grid-cols-2 lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/50 px-4 py-1.5 text-xs font-medium tracking-wide text-gold uppercase">
              <Sparkles className="size-3.5" /> Congo Brazzaville
            </span>
            <h1 className="mt-5 text-4xl leading-tight font-semibold sm:text-5xl lg:text-6xl">
              Poudre de Moringa Oleifera
            </h1>
            <p className="mt-4 text-xl text-cream/90 sm:text-2xl">
              Le superaliment naturel au quotidien
            </p>
            <p className="mt-3 max-w-lg text-base text-cream/75">
              Riche en nutriments essentiels et en antioxydants.
            </p>
            <p className="mt-6 text-2xl font-semibold text-gold">
              3 300 F CFA – sachet de 90 g
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="gold" size="xl">
                <a href="#commander">Commander maintenant</a>
              </Button>
              <Button asChild variant="onDark" size="xl">
                <a href={waLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle /> Commander sur WhatsApp
                </a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroPouch}
              alt="Sachet kraft de poudre de Moringa Oleifera avec feuilles fraîches"
              width={1200}
              height={1408}
              className="mx-auto w-full max-w-md rounded-3xl object-cover shadow-soft"
            />
          </div>
        </div>
      </section>

      {/* POURQUOI */}
      <section className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold text-primary sm:text-4xl">
            Pourquoi choisir le Moringa ?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Une poudre de feuilles simple et naturelle, à intégrer dans vos habitudes de tous les
            jours.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {NUTRIMENTS.map((n) => (
            <div
              key={n.label}
              className="rounded-2xl border border-border bg-card p-6 text-center shadow-soft"
            >
              <p className="text-3xl font-semibold text-leaf">{n.value}</p>
              <p className="mt-2 text-sm font-medium text-foreground">{n.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-2xl bg-secondary p-6 sm:flex-row">
          <p className="text-secondary-foreground">
            <strong>Riche en antioxydants</strong> — naturellement présents dans les feuilles de
            Moringa.
          </p>
          <Button asChild variant="leaf" size="lg">
            <a href="#commander">Je commande mon sachet</a>
          </Button>
        </div>
      </section>

      {/* BIENFAITS */}
      <section id="bienfaits" className="bg-secondary/40 py-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-2">
          <img
            src={bowlPowder}
            alt="Poudre verte de Moringa dans un bol avec cuillère en bois"
            loading="lazy"
            width={1200}
            height={912}
            className="rounded-3xl object-cover shadow-soft"
          />
          <div>
            <h2 className="text-3xl font-semibold text-primary sm:text-4xl">
              Les bienfaits du produit
            </h2>
            <p className="mt-4 text-muted-foreground">
              La poudre de Moringa se consomme en complément d'une alimentation variée et
              équilibrée. Elle apporte des nutriments naturellement présents dans les feuilles :
              fer, riboflavine (B2), vitamine A, magnésium, ainsi que des antioxydants.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "100 % feuilles de Moringa Oleifera, sans additif.",
                "Se mélange facilement à vos boissons et à vos plats.",
                "Un geste simple à garder au quotidien.",
                "Sachet de 90 g, soit plusieurs semaines d'utilisation.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-foreground">
                  <ShieldCheck className="mt-0.5 size-5 shrink-0 text-leaf" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground italic">
              Ce produit n'est pas un médicament et ne remplace pas une alimentation variée et
              équilibrée.
            </p>
            <Button asChild variant="leaf" size="lg" className="mt-6">
              <a href="#commander">Commander maintenant</a>
            </Button>
          </div>
        </div>
      </section>

      {/* UTILISATION */}
      <section id="utilisation" className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold text-primary sm:text-4xl">
              Comment utiliser le Moringa ?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Environ <strong className="text-foreground">une cuillère à café par jour</strong>, à
              mélanger dans une boisson ou directement dans vos aliments.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {["Dans un jus", "Dans un smoothie", "Dans un repas"].map((u) => (
                <div key={u} className="rounded-xl border border-border bg-card p-4 text-center">
                  <Leaf className="mx-auto size-5 text-leaf" />
                  <p className="mt-2 text-sm font-medium">{u}</p>
                </div>
              ))}
            </div>
            <Button asChild variant="gold" size="lg" className="mt-8">
              <a href={waLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle /> Commander sur WhatsApp
              </a>
            </Button>
          </div>
          <img
            src={usageImg}
            alt="Smoothie vert préparé avec de la poudre de Moringa"
            loading="lazy"
            width={1200}
            height={912}
            className="rounded-3xl object-cover shadow-soft"
          />
        </div>
      </section>

      {/* COMMANDER */}
      <section id="commander" className="bg-secondary/40 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold text-primary sm:text-4xl">Comment commander ?</h2>
            <p className="mt-3 text-muted-foreground">Trois étapes, quelques minutes.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              { icon: ShoppingBag, t: "Choisissez votre produit", d: "Sachet de 90 g à 3 300 F CFA." },
              {
                icon: MessageCircle,
                t: "Envoyez votre commande",
                d: "Par WhatsApp ou via le formulaire ci-dessous.",
              },
              {
                icon: PackageCheck,
                t: "Recevez votre produit",
                d: "Nous convenons du lieu et de l'heure de livraison.",
              },
            ].map((s, i) => (
              <div key={s.t} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <div className="flex size-11 items-center justify-center rounded-full bg-leaf/15 text-leaf">
                  <s.icon className="size-5" />
                </div>
                <p className="mt-4 text-xs font-semibold tracking-wide text-gold uppercase">
                  Étape {i + 1}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-primary">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <OrderForm />
            <div className="flex flex-col justify-center rounded-2xl border border-border bg-card p-6 text-center shadow-soft sm:p-8">
              <img
                src={leaves}
                alt="Feuilles fraîches de Moringa Oleifera"
                loading="lazy"
                width={1200}
                height={800}
                className="mb-6 rounded-xl object-cover"
              />
              <p className="text-lg font-medium text-primary">Vous préférez discuter ?</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Écrivez-nous sur WhatsApp, nous répondons rapidement.
              </p>
              <Button asChild variant="leaf" size="xl" className="mt-5">
                <a href={waLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle /> Commander sur WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-4 py-16 lg:py-24">
        <h2 className="text-center text-3xl font-semibold text-primary sm:text-4xl">
          Questions fréquentes
        </h2>
        <Accordion type="single" collapsible className="mt-8">
          {FAQ.map((item) => (
            <AccordionItem key={item.q} value={item.q}>
              <AccordionTrigger className="text-left text-base">{item.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* CTA FINAL */}
      <section className="hero-surface py-16 text-cream lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Passez votre commande aujourd'hui</h2>
          <p className="mt-4 text-cream/80">
            Poudre de Moringa Oleifera – sachet de 90 g à{" "}
            <span className="font-semibold text-gold">3 300 F CFA</span>.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild variant="gold" size="xl">
              <a href="#commander">Commander maintenant</a>
            </Button>
            <Button asChild variant="onDark" size="xl">
              <a href={waLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle /> Commander sur WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-background py-10">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="flex items-center justify-center gap-2 font-semibold text-primary">
            <Leaf className="size-4 text-leaf" /> Moringa Oleifera de la Teranga
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Ce produit n'est pas un médicament et ne remplace pas une alimentation variée et
            équilibrée.
          </p>
          <p className="mt-3 text-xs text-muted-foreground">
            © {new Date().getFullYear()} — Congo Brazzaville
          </p>
        </div>
      </footer>

      {/* Bouton WhatsApp flottant */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Commander sur WhatsApp"
        className="fixed right-4 bottom-4 z-50 flex size-14 items-center justify-center rounded-full bg-leaf text-accent-foreground shadow-gold transition-transform hover:scale-105"
      >
        <MessageCircle className="size-6" />
      </a>
    </div>
  );
}
