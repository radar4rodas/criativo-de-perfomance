import { useEffect, useState } from "react";

/**
 * ============================================================
 *  OFERTAS DO RADAR — edite livremente esta lista
 *  emoji: pode ser trocado por <img src="..." /> se preferir
 *  detectAt: momento (ms) do ciclo em que o feixe passa no ponto
 *  radius: distância do centro do radar (0 a 42)
 * ============================================================
 */
export type RadarOffer = {
  emoji: string;
  name: string;
  from: string;
  to: string;
  off: string;
  detectAt: number;
  radius: number;
};

const OFFERS: RadarOffer[] = [
  {
    emoji: "🛞",
    name: "PNEU ARO 15",
    from: "R$399",
    to: "R$289",
    off: "27% OFF",
    detectAt: 1000,
    radius: 30,
  },
  {
    emoji: "🧰",
    name: "COMPRESSOR PORTÁTIL",
    from: "R$149",
    to: "R$89",
    off: "40% OFF",
    detectAt: 2000,
    radius: 38,
  },
  {
    emoji: "📻",
    name: "CENTRAL MULTIMÍDIA",
    from: "R$599",
    to: "R$399",
    off: "33% OFF",
    detectAt: 3000,
    radius: 24,
  },
];

// Tempos (ms) — o ciclo é múltiplo do giro do feixe para manter a sincronia
const SWEEP_MS = 3500;
const CYCLE_MS = 7000;
const CARD_DELAY = 400;
const CARD_MS = 3000;

// pontos "ruído" (possíveis ofertas ainda não detectadas)
const NOISE = [
  { x: 26, y: 34 },
  { x: 70, y: 30 },
  { x: 62, y: 68 },
  { x: 34, y: 72 },
  { x: 78, y: 52 },
  { x: 44, y: 22 },
];

function pointFor(offer: RadarOffer) {
  const angle = ((offer.detectAt / SWEEP_MS) * 360) % 360;
  const rad = (angle * Math.PI) / 180;
  return {
    x: 50 + offer.radius * Math.sin(rad),
    y: 50 - offer.radius * Math.cos(rad),
  };
}

export function OfferRadar() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"search" | "found" | "card">("search");

  useEffect(() => {
    const offer = OFFERS[index]!;
    const timers: ReturnType<typeof setTimeout>[] = [];
    timers.push(setTimeout(() => setPhase("found"), offer.detectAt));
    timers.push(setTimeout(() => setPhase("card"), offer.detectAt + CARD_DELAY));
    timers.push(
      setTimeout(() => setPhase("found"), offer.detectAt + CARD_DELAY + CARD_MS),
    );
    timers.push(
      setTimeout(() => {
        setPhase("search");
        setIndex((i) => (i + 1) % OFFERS.length);
      }, CYCLE_MS),
    );
    return () => timers.forEach(clearTimeout);
  }, [index]);

  const offer = OFFERS[index]!;
  const pt = pointFor(offer);
  const detected = phase !== "search";
  const cardLeft = Math.min(78, Math.max(22, pt.x));

  return (
    <div className="pointer-events-none absolute left-1/2 top-0 aspect-square w-[min(300px,78vw)] -translate-x-1/2">
      {/* anel externo */}
      <div className="absolute inset-0 rounded-full border border-[var(--r4r-red)]/35 shadow-[0_0_60px_-20px_var(--r4r-red)]" />
      <div className="absolute inset-[12%] rounded-full border border-[var(--r4r-red)]/25" />
      <div className="absolute inset-[26%] rounded-full border border-[var(--r4r-red)]/20" />
      <div className="absolute inset-[40%] rounded-full border border-[var(--r4r-red)]/15" />

      {/* linhas internas discretas */}
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[var(--r4r-red)]/15 to-transparent" />
      <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-[var(--r4r-red)]/15 to-transparent" />

      {/* feixe girando */}
      <div
        className="animate-radar-sweep absolute inset-0 rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, color-mix(in oklab, var(--r4r-red) 45%, transparent) 0deg, color-mix(in oklab, var(--r4r-red) 8%, transparent) 40deg, transparent 90deg, transparent 360deg)",
          maskImage: "radial-gradient(circle, black 60%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(circle, black 60%, transparent 100%)",
        }}
      />

      {/* pontos de ruído */}
      {NOISE.map((n, i) => (
        <span
          key={i}
          className="absolute h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--r4r-red)]/40"
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
        />
      ))}

      {/* ponto da oferta atual */}
      <span
        className={`absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--r4r-red)] transition-opacity ${
          detected ? "animate-radar-blip opacity-100" : "opacity-50"
        }`}
        style={{
          left: `${pt.x}%`,
          top: `${pt.y}%`,
          boxShadow: detected ? "0 0 12px 2px var(--r4r-red)" : undefined,
        }}
      />
      {detected && (
        <span
          className="animate-radar-ripple absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--r4r-red)]"
          style={{ left: `${pt.x}%`, top: `${pt.y}%` }}
        />
      )}

      {/* mini-card da oferta */}
      {phase === "card" && (
        <div
          className="animate-scale-in absolute z-20 w-[168px] -translate-x-1/2 rounded-xl border border-[var(--r4r-red)]/50 bg-black/85 p-2.5 text-center shadow-[0_0_30px_-6px_var(--r4r-red)] backdrop-blur-sm"
          style={{ left: `${cardLeft}%`, top: `${Math.min(pt.y + 14, 66)}%` }}
        >
          <p className="text-[9px] font-bold uppercase tracking-wider text-[var(--r4r-red)]">
            🚨 Oferta encontrada
          </p>
          <div className="mt-1 text-xl leading-none">{offer.emoji}</div>
          <p className="mt-1 text-[11px] font-bold leading-tight text-white">
            {offer.name}
          </p>
          <p className="text-[9px] text-white/50 line-through">de {offer.from}</p>
          <p className="text-sm font-extrabold leading-tight text-white">
            por {offer.to}
          </p>
          <p className="mt-1 text-[10px] font-bold text-[var(--r4r-red)]">
            🔥 {offer.off}
          </p>
        </div>
      )}
    </div>
  );
}
