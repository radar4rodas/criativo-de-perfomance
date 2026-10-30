/**
 * Meta Pixel — Criativo de Performance.
 *
 * Um único bootstrap no cliente, compatível com TanStack Start/SSR.
 * O guard evita PageView duplicado durante remounts / React StrictMode.
 */
export const META_PIXEL_ID = "1578641077611583";

type Fbq = {
  (...args: unknown[]): void;
  callMethod?: (...args: unknown[]) => void;
  queue?: unknown[][];
  loaded?: boolean;
  version?: string;
  push?: (...args: unknown[]) => void;
};

declare global {
  interface Window {
    fbq?: Fbq;
    _fbq?: Fbq;
    __criativoPerformancePixelStarted?: boolean;
  }
}

export function initializeMetaPixel() {
  if (typeof window === "undefined" || typeof document === "undefined") return;
  if (window.__criativoPerformancePixelStarted) return;

  // Garante inicialização única também no modo de desenvolvimento.
  window.__criativoPerformancePixelStarted = true;

  // A função oficial enfileira eventos até fbevents.js carregar.
  if (!window.fbq) {
    const fbq = function (...args: unknown[]) {
      if (fbq.callMethod) {
        fbq.callMethod(...args);
      } else {
        fbq.queue?.push(args);
      }
    } as Fbq;

    fbq.queue = [];
    fbq.loaded = true;
    fbq.version = "2.0";

    window.fbq = fbq;
    window._fbq = fbq;
  }

  if (!document.querySelector('script[data-criativo-meta-pixel="true"]')) {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    script.setAttribute("data-criativo-meta-pixel", "true");
    document.head.appendChild(script);
  }

  window.fbq("init", META_PIXEL_ID);
  window.fbq("track", "PageView");
}

export function trackWhatsAppLead() {
  if (typeof window === "undefined") return;
  // Se o visitante clicar antes de o efeito da página terminar, inicia o Pixel primeiro.
  initializeMetaPixel();
  window.fbq?.("track", "Lead");
}
