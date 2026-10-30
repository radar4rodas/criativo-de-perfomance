import { createFileRoute } from "@tanstack/react-router";
import { trackWhatsAppLead } from "../lib/meta-pixel";

// Landing page visual: a arte aprovada é exibida INTEIRA, sem recriações em CSS.
// O único elemento de interface separado da imagem é a região clicável do botão.
const WHATSAPP_LINK = "https://wa.me/5547989211802";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Criativo de Performance | Criativos exclusivos para seu nicho" },
      {
        name: "description",
        content:
          "Criativos exclusivos para o seu nicho. Imagens estratégicas e personalizadas para anúncios.",
      },
      { property: "og:title", content: "Criativo de Performance" },
      {
        property: "og:description",
        content: "Criativos exclusivos para o seu nicho. Solicite um orçamento.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <main className="landing" aria-label="Criativo de Performance">
      <div className="landing-visual">
        <img
          src="/criativo-de-performance-lp.avif"
          alt="Criativos exclusivos para o seu nicho. Imagens estratégicas e personalizadas para atrair mais cliques, gerar leads e aumentar suas vendas. Exemplos de anúncios de perfumes, ofertas, Radinho Garimpa e Cannis Petshop. Vamos criar os seus próximos resultados? Solicite um orçamento sem compromisso."
          className="landing-image"
          width="941"
          height="1672"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          draggable={false}
        />
        <a
          className="whatsapp-hotspot"
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackWhatsAppLead}
          aria-label="Falar no WhatsApp e solicitar orçamento"
          title="Falar no WhatsApp"
        >
          <span className="sr-only">Falar no WhatsApp</span>
        </a>
      </div>
    </main>
  );
}
