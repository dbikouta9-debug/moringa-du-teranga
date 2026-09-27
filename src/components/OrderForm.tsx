import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { buildWhatsAppLink } from "@/config/site";

export function OrderForm() {
  const [nom, setNom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [ville, setVille] = useState("");
  const [quantite, setQuantite] = useState("1");
  const [note, setNote] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = [
      "Bonjour, je souhaite commander la Poudre de Moringa Oleifera (sachet de 90 g – 3 300 F CFA).",
      `Nom : ${nom}`,
      `Téléphone : ${telephone}`,
      `Ville / quartier : ${ville}`,
      `Quantité : ${quantite} sachet(s)`,
      note ? `Note : ${note}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(buildWhatsAppLink(message), "_blank", "noopener,noreferrer");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8"
    >
      <h3 className="text-2xl font-semibold text-primary">Formulaire de commande</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Remplissez ce formulaire, votre commande est envoyée directement sur WhatsApp.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="nom">Nom complet</Label>
          <Input id="nom" required value={nom} onChange={(e) => setNom(e.target.value)} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="telephone">Téléphone</Label>
          <Input
            id="telephone"
            type="tel"
            required
            placeholder="06 000 00 00"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="ville">Ville / quartier</Label>
          <Input
            id="ville"
            required
            placeholder="Brazzaville, Bacongo…"
            value={ville}
            onChange={(e) => setVille(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="quantite">Quantité (sachets)</Label>
          <Input
            id="quantite"
            type="number"
            min="1"
            value={quantite}
            onChange={(e) => setQuantite(e.target.value)}
          />
        </div>
        <div className="grid gap-2 sm:col-span-2">
          <Label htmlFor="note">Note (facultatif)</Label>
          <Textarea
            id="note"
            rows={3}
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Précisez un point de livraison ou une heure de contact."
          />
        </div>
      </div>

      <Button type="submit" variant="leaf" size="xl" className="mt-6 w-full">
        Envoyer ma commande sur WhatsApp
      </Button>
    </form>
  );
}
