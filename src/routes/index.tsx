import { createFileRoute } from "@tanstack/react-router";
import { Check, Clock, Lock, ShieldCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import logoAsset from "../assets/radar4rodas-logo-transparent.png.asset.json";
import carFrontAsset from "../assets/radar4rodas-car-front.png.asset.json";

const WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/JR3d2j0qbDjFDwGL18i0GT?s=cl&p=i&mlu=4";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Radar4Rodas - Ofertas Automotivas no WhatsApp" },
      { name: "description", content: "Grupo gratuito no WhatsApp com ofertas de pneus, acessórios, ferramentas e outros produtos automotivos." },
      { property: "og:title", content: "Radar4Rodas - Ofertas Automotivas no WhatsApp" },
      { property: "og:description", content: "Entre grátis no grupo e receba ofertas automotivas direto no WhatsApp." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const benefits = [
  "Pneus, acessórios, ferramentas e muito mais para carros e motos",
  "Cupons, promoções e achados automotivos",
  "Só administradores enviam mensagens",
];

function trackAddToCart(event: React.MouseEvent<HTMLAnchorElement>) {
  // Proteção por sessão: o AddToCart é registrado no máximo 1 vez por sessão,
  // mesmo que o usuário clique várias vezes no botão que leva ao WhatsApp.
  const SESSION_KEY = "r4rAddToCartTracked";
  try {
    if (window.sessionStorage.getItem(SESSION_KEY)) return;
    window.sessionStorage.setItem(SESSION_KEY, "1");
  } catch {
    // sessionStorage indisponível (modo privado etc.): fallback em memória.
    const win = window as unknown as { __r4rAddToCartTracked?: boolean };
    if (win.__r4rAddToCartTracked) return;
    win.__r4rAddToCartTracked = true;
  }

  const fbq = (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq;
  if (typeof fbq === "function") {
    // eventID único via crypto.randomUUID() permite deduplicação entre
    // navegador (Pixel) e servidor (CAPI).
    const eventID = crypto.randomUUID();
    fbq("track", "AddToCart", {}, { eventID });
  }
}

function CountdownTimer() {
  const [secondsLeft, setSecondsLeft] = useState(180);
  const [expired, setExpired] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    intervalRef.current = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setExpired(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const display = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  return (
    <div className="mb-3 flex flex-col items-center gap-1">
      <p className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase text-foreground/70 sm:text-xs">
        <Clock className="h-3.5 w-3.5 text-[var(--r4r-red)]" aria-hidden="true" />
        Entre no grupo enquanto o acesso está disponível
      </p>
      <div className="inline-flex min-h-[2.5rem] items-center justify-center rounded-lg border border-[var(--r4r-red)]/35 bg-[var(--r4r-carbon)]/80 px-4 py-1.5 shadow-[0_0_18px_-6px_color-mix(in_oklab,var(--r4r-red)_30%,transparent)] backdrop-blur-sm">
        {expired ? (
          <span className="text-center text-xs font-extrabold uppercase tracking-wide text-[var(--r4r-red)]">
            Verifique se o acesso ainda está disponível
          </span>
        ) : (
          <span className="font-mono text-xl font-extrabold tracking-[0.15em] text-foreground sm:text-2xl">
            {display}
          </span>
        )}
      </div>
    </div>
  );
}

function Index() {
  return (
    <main className="relative isolate min-h-dvh overflow-hidden bg-[var(--r4r-black)] text-foreground">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 2px, color-mix(in oklab, var(--r4r-white) 7%, transparent) 2px, color-mix(in oklab, var(--r4r-white) 7%, transparent) 4px)",
        }}
      />

      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[46vh] min-h-[310px] opacity-30 sm:h-[62vh] sm:opacity-35"
        style={{
          backgroundImage: `url(${carFrontAsset.url})`,
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "min(760px, 125vw) auto",
          maskImage: "linear-gradient(to bottom, black 0%, black 48%, transparent 96%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 48%, transparent 96%)",
        }}
      />

      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[58vh] opacity-30"
        style={{
          background: "radial-gradient(circle at 50% 16%, color-mix(in oklab, var(--r4r-red) 38%, transparent), transparent 58%)",
        }}
      />

      <div className="relative mx-auto flex min-h-dvh w-full max-w-lg flex-col items-center px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-1 text-center sm:max-w-xl sm:justify-center sm:py-8">
        <header className="flex w-full shrink-0 justify-center">
          <img
            src={logoAsset.url}
            alt="Radar4Rodas - Achados que movem você"
            width="220"
            height="110"
            className="h-auto w-[154px] sm:w-[190px]"
          />
        </header>

        <section className="-mt-1 flex w-full flex-1 flex-col items-center justify-center sm:mt-1 sm:flex-none">
          <p className="inline-flex items-center gap-2 rounded-full border border-[var(--r4r-red)]/35 bg-[var(--r4r-black)]/75 px-3 py-1.5 text-[10px] font-extrabold uppercase text-[var(--r4r-red)] backdrop-blur-sm sm:text-xs">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--r4r-red)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--r4r-red)]" />
            </span>
            Grupo gratuito
          </p>

          <h1 className="mt-4 text-balance text-[2rem] font-extrabold uppercase leading-[1.03] sm:mt-5 sm:text-5xl">
            <span className="text-[var(--r4r-red)]">Ofertas automotivas</span>
            <br />
            direto no seu WhatsApp
          </h1>

          <p className="mt-3 text-base font-semibold text-foreground/80 sm:text-lg">
            Ofertas com até 70% de desconto!
          </p>

          <ul className="mt-4 grid w-full gap-2 text-left sm:mt-5">
            {benefits.map((benefit, index) => (
              <li
                key={benefit}
                className="grid grid-cols-[1.75rem_minmax(0,1fr)] items-center gap-2.5 border-b border-border/70 px-1 pb-2 text-[13px] font-semibold text-foreground/85 last:border-b-0 last:pb-0 sm:text-sm"
              >
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-[var(--r4r-red)]/12 text-[var(--r4r-red)]">
                  {index === 0 ? "🔥" : index === 1 ? <Check className="h-4 w-4" aria-hidden="true" /> : <Lock className="h-4 w-4" aria-hidden="true" />}
                </span>
                <span className="min-w-0">{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 w-full sm:mt-6">
            <p className="mb-2 text-[11px] font-extrabold uppercase text-[var(--r4r-red)] sm:text-xs">
              🔥 Vagas limitadas
            </p>
            <CountdownTimer />
            <div className="relative w-full">
              <span className="animate-pulse-glow absolute inset-0 rounded-full bg-[var(--r4r-green)]/25" />
              <a
                href={WHATSAPP_GROUP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackAddToCart}
                className="relative inline-flex min-h-14 w-full items-center justify-center rounded-full bg-[var(--r4r-green)] px-4 py-3.5 text-[15px] font-extrabold uppercase text-primary-foreground shadow-[0_12px_38px_-14px_var(--r4r-green)] transition-transform duration-200 hover:scale-[1.015] active:scale-[0.985] sm:text-lg"
              >
                Entrar grátis no grupo
              </a>
            </div>
            <p className="mt-2.5 text-[11px] font-medium text-foreground/55 sm:text-xs">
              Gratuito • Sem conversas • Saia quando quiser
            </p>
          </div>
        </section>

        <footer className="mt-4 flex shrink-0 items-center justify-center gap-2 border-t border-border/70 pt-3 text-[10px] font-bold uppercase text-foreground/45 sm:mt-8 sm:text-xs">
          <ShieldCheck className="h-4 w-4 text-[var(--r4r-red)]" aria-hidden="true" />
          Você cuida do carro. O Radar cuida das ofertas.
        </footer>
      </div>
    </main>
  );
}