import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

// Configure SOMENTE quando recebermos o link correto do novo negócio.
// Não reutilizar links ou pixels das landing pages antigas.
const WHATSAPP_LINK: string = "";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Criativo de Performance | Criativos exclusivos para seu nicho" },
      {
        name: "description",
        content:
          "Criativos exclusivos e personalizados para anúncios de tráfego pago. Imagens estratégicas para atrair mais cliques, leads e vendas.",
      },
      { property: "og:title", content: "Criativo de Performance" },
      {
        property: "og:description",
        content: "Imagens exclusivas e estratégicas para anúncios no seu nicho.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M16.01 2.67A13.3 13.3 0 0 0 4.6 22.8L2.75 29.3l6.67-1.75A13.3 13.3 0 1 0 16 2.67Zm0 24.17c-2.04 0-4.03-.55-5.75-1.59l-.41-.25-3.96 1.04 1.06-3.87-.27-.42a10.85 10.85 0 1 1 9.33 5.09Zm5.94-8.13c-.33-.16-1.94-.95-2.24-1.06-.3-.1-.52-.16-.73.17-.22.32-.84 1.06-1.02 1.28-.19.22-.38.24-.7.08a8.93 8.93 0 0 1-2.63-1.62 9.85 9.85 0 0 1-1.82-2.27c-.2-.33-.02-.5.14-.67.14-.14.32-.39.49-.57.16-.2.22-.33.33-.55.1-.22.05-.4-.03-.57-.08-.16-.73-1.76-1-2.41-.27-.63-.53-.54-.73-.55h-.62c-.22 0-.58.08-.89.41-.3.33-1.16 1.14-1.16 2.77s1.19 3.21 1.35 3.43a12.43 12.43 0 0 0 4.78 4.23 4.23 0 0 0 2.59.55c.83-.12 1.94-.79 2.22-1.56.27-.77.27-1.43.2-1.56-.08-.14-.3-.22-.63-.39Z" />
    </svg>
  );
}

function MonitorArt() {
  return (
    <div className="workstation" aria-hidden="true">
      <div className="ambient-window"><span /><span /><span /></div>
      <div className="workstation-plant">✦</div>
      <div className="monitor">
        <div className="monitor-top"><i /><i /><i /><span>CRIATIVO / EDITOR</span></div>
        <div className="monitor-ui">
          <div className="monitor-tools">
            <b /> <b /> <b /> <b /> <b />
          </div>
          <div className="monitor-ad">
            <div className="monitor-spark">✦</div>
            <span className="monitor-offer">DESCONTOS<br />TODO DIA</span>
            <span className="monitor-tag">no seu grupo</span>
            <span className="monitor-headphone">🎧</span>
            <span className="monitor-glow" />
          </div>
          <div className="monitor-panel">
            <span>PROPRIEDADES</span><i /><i /><i />
            <div className="colors"><b /><b /><b /></div>
            <i /><i /><i />
          </div>
        </div>
        <div className="monitor-brand" />
      </div>
      <div className="monitor-stand" />
      <div className="workstation-desk" />
      <div className="workstation-keyboard" />
      <div className="workstation-cup" />
    </div>
  );
}

function PerfumeExample() {
  return (
    <div className="sample-card sample-perfume" role="img" aria-label="Exemplo de anúncio para grupo de perfumes">
      <div className="bottles bottles-top"><span>✦</span><span>✧</span><span>✦</span></div>
      <div className="sample-perfume-title"><span>EI VOCÊ 👊</span>ACABOU DE ENCONTRAR O MELHOR<br />GRUPO DE PERFUMES</div>
      <div className="sample-perfume-tag">COM OFERTAS IMPERDÍVEIS</div>
      <div className="bottles bottles-bottom"><span>✦</span><span>✧</span><span>✦</span></div>
    </div>
  );
}

function OffersExample() {
  return (
    <div className="sample-card sample-offers" role="img" aria-label="Exemplo de anúncio para grupo de ofertas gerais">
      <div className="offers-grid">
        <span>👕</span><span>📱</span><span>👟</span><span>🍳</span>
      </div>
      <div className="offers-heading">
        Você ainda<br /><strong>paga caro</strong><br />em compras<br />na internet?
      </div>
      <div className="offers-caption">Venha para o grupo de ofertas</div>
    </div>
  );
}

function RadinhoExample() {
  return (
    <div className="sample-card sample-radinho" role="img" aria-label="Exemplo de anúncio para o Radinho Garimpa">
      <div className="mini-prices"><span>🍳<small>38% OFF</small></span><span>👟<small>42% OFF</small></span></div>
      <div className="radinho-logo"><span>RADINHO</span><b>GARIMPA</b></div>
      <div className="radinho-copy">Você encontrou o melhor <em>grupo de promoções</em> no WhatsApp 👊</div>
      <div className="mini-prices lower"><span>🧴<small>44% OFF</small></span><span>🧹<small>45% OFF</small></span></div>
      <div className="radinho-footer">CLIQUE EM SAIBA MAIS</div>
    </div>
  );
}

function PetExample() {
  return (
    <div className="sample-card sample-pet" role="img" aria-label="Exemplo de anúncio para pet shop">
      <div className="pet-top">🐾 <span>CANNIS<br /><small>pet shop</small></span> 🐾</div>
      <div className="pet-heading">Banhos</div>
      <div className="pet-price-label">a partir de</div>
      <div className="pet-price">R$ 44<sup>,90</sup></div>
      <div className="pet-dog">🐶</div>
      <div className="pet-caption">Tudo para o seu pet<br /><small>você encontra aqui.</small></div>
      <div className="pet-button">✆ CLIQUE E ENTRE EM CONTATO</div>
    </div>
  );
}

function WhatsAppCta() {
  const content = <><WhatsAppIcon /><span>FALAR NO WHATSAPP</span><ArrowRight aria-hidden="true" /></>;

  // Intencionalmente sem URL até a confirmação do endereço desta empresa.
  return WHATSAPP_LINK ? (
    <a className="whatsapp-button" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    <button className="whatsapp-button" type="button" disabled title="Aguardando link do WhatsApp">
      {content}
    </button>
  );
}

function LandingPage() {
  return (
    <main className="site">
      <div className="site-rim rim-left" aria-hidden="true" />
      <div className="site-rim rim-right" aria-hidden="true" />
      <div className="site-haze" aria-hidden="true" />
      <div className="lp-shell">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <h1 id="hero-title">
              <span>CRIATIVOS</span>
              <span className="highlight">EXCLUSIVOS</span>
              <span className="hero-third">PARA O SEU NICHO.</span>
            </h1>
            <p>
              Imagens estratégicas e personalizadas para atrair{" "}
              <strong>mais cliques, gerar leads e aumentar suas vendas.</strong>
            </p>
          </div>
          <MonitorArt />
        </section>

        <section className="portfolio" aria-label="Exemplos de criativos exclusivos">
          <div className="portfolio-row">
            <PerfumeExample />
            <OffersExample />
            <RadinhoExample />
            <PetExample />
          </div>
        </section>

        <section className="conversion" aria-labelledby="cta-title">
          <h2 id="cta-title">
            <span>VAMOS CRIAR OS SEUS</span>
            <strong>PRÓXIMOS RESULTADOS?</strong>
          </h2>
          <p>
            Me chame no WhatsApp e <strong>solicite um orçamento</strong><br className="soft-break" /> sem compromisso.
          </p>
          <WhatsAppCta />
        </section>
      </div>
    </main>
  );
}
