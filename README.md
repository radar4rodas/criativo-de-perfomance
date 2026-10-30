# Criativo de Performance

Landing page conectada ao Lovable.

## Implementação atual

A página utiliza **a imagem integral aprovada pelo proprietário**, em `public/criativo-de-performance-lp.avif`, sem recriar visualmente o monitor, os textos ou os cards. A conversão usa exclusivamente uma camada HTML com a área clicável posicionada sobre o botão verde que já está desenhado na imagem.

## Pendências de publicação

- **WhatsApp:** aguardar o novo link para inserir em `src/routes/index.tsx` (constante `WHATSAPP_LINK`). Por segurança, o controle permanece desabilitado.
- **Meta Pixel:** aguardar o ID correto. Não reutilizar os códigos das páginas anteriores.

A imagem ocupa a largura disponível no celular, preserva sua proporção e se ajusta à altura da tela em desktops. Os arquivos de recortes da versão anterior foram excluídos.
