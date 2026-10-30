import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

// Link e Pixel serão configurados quando o proprietário enviar os dados.
// Não reutilize nenhuma integração de outro negócio.
const WHATSAPP_LINK = "";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Criativo de Performance | Criativos exclusivos para seu nicho" },
      { name: "description", content: "Criativos exclusivos e personalizados para tráfego pago. Imagens estratégicas para gerar cliques, leads e vendas." },
      { property: "og:title", content: "Criativo de Performance" },
      { property: "og:description", content: "Imagens personalizadas para anúncios do seu nicho." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

function WhatsAppIcon() {
  return (
    <svg className="cp-whatsapp-icon" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M16 2.65C8.65 2.65 2.66 8.63 2.66 16c0 2.36.63 4.66 1.82 6.68L2.7 29.3l6.81-1.78a13.3 13.3 0 1 0 6.49-24.87Zm0 24.16a10.7 10.7 0 0 1-5.47-1.5l-.4-.24-4.05 1.06 1.08-3.95-.26-.42A10.78 10.78 0 1 1 16 26.81Zm5.92-8.1c-.32-.16-1.92-.95-2.22-1.06-.3-.1-.51-.16-.73.17-.22.32-.83 1.05-1.02 1.28-.18.21-.37.24-.69.08a8.9 8.9 0 0 1-2.62-1.62 9.7 9.7 0 0 1-1.8-2.27c-.19-.32-.02-.5.14-.66.14-.15.32-.38.48-.57.16-.2.22-.33.33-.55.1-.22.05-.4-.03-.56-.08-.17-.73-1.76-1-2.4-.26-.64-.53-.54-.73-.55h-.62c-.22 0-.57.08-.88.4-.3.33-1.15 1.13-1.15 2.76 0 1.64 1.18 3.2 1.35 3.43a12.2 12.2 0 0 0 4.75 4.18 4.18 0 0 0 2.58.54c.82-.12 1.92-.78 2.2-1.55.27-.77.27-1.43.19-1.57-.08-.13-.29-.21-.63-.38Z" />
    </svg>
  );
}

function WhatsAppButton() {
  const label = (
    <>
      <WhatsAppIcon />
      <span className="cp-button-divider" aria-hidden="true" />
      <span className="cp-button-label">FALAR NO WHATSAPP</span>
      <ArrowRight className="cp-button-arrow" aria-hidden="true" strokeWidth={3} />
    </>
  );
  return WHATSAPP_LINK ? (
    <a className="cp-whatsapp-button" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  ) : (
    <button type="button" className="cp-whatsapp-button" disabled title="Link do WhatsApp será configurado">
      {label}
    </button>
  );
}

function LandingPage() {
  return (
    <main className="cp-page">
      <div className="cp-page-light left" aria-hidden="true" />
      <div className="cp-page-light right" aria-hidden="true" />
      <div className="cp-layout">
        <section className="cp-hero" aria-labelledby="cp-headline">
          <img
            className="cp-monitor-photo"
            src="/cp-monitor.webp"
            alt=""
            loading="eager"
            fetchPriority="high"
            aria-hidden="true"
          />
          <div className="cp-hero-text">
            <h1 id="cp-headline">
              <span>CRIATIVOS</span>
              <span className="cp-neon">EXCLUSIVOS</span>
              <span className="cp-third-line">PARA O SEU NICHO.</span>
            </h1>
            <p>
              Imagens estratégicas e personalizadas<br />
              para atrair <strong>mais cliques, gerar leads<br />
              e aumentar suas vendas.</strong>
            </p>
          </div>
        </section>

        <section className="cp-portfolio" aria-label="Quatro exemplos reais de criativos">
          <img
            src="/cp-portfolio.webp"
            alt="Quatro criativos de exemplo: perfumes, grupo de ofertas gerais, Radinho Garimpa e Cannis Petshop"
            loading="eager"
          />
        </section>

        <section className="cp-conversion" aria-labelledby="cp-cta-title">
          <h2 id="cp-cta-title">
            <span>VAMOS CRIAR OS SEUS</span>
            <strong>PRÓXIMOS RESULTADOS?</strong>
          </h2>
          <p>
            Me chame no WhatsApp e <strong>solicite um orçamento</strong><br />
            sem compromisso.
          </p>
          <WhatsAppButton />
        </section>
        <div className="cp-bottom-space" aria-hidden="true" />
      </div>
    </main>
  );
}
