# Redesenho enxuto da landing page Radar 4 Rodas

## Objetivo
Transformar a página atual em uma experiência curta e mobile-first, concentrando logo, proposta, três benefícios e CTA principal na primeira visualização, sem alterar rastreamento ou destino dos botões.

## Alterações visuais
- Manter o logo oficial e o fundo automotivo atual, reduzindo elementos decorativos e espaçamentos.
- Exibir no topo, em sequência compacta: “GRUPO GRATUITO NO WHATSAPP”, headline, subheadline e três benefícios.
- Tornar “ENTRAR GRÁTIS NO GRUPO” o principal destaque visual, seguido de “Gratuito • Sem conversas • Saia quando quiser”.
- Manter “🔥 Vagas limitadas” junto ao CTA, pois essa mensagem já faz parte da comunicação solicitada anteriormente.
- Remover as seções longas, cards de produtos, relatos, benefícios repetidos e bloco final grande de conversão.
- Manter apenas um fechamento discreto com a assinatura da marca, sem competir com o CTA principal.
- Garantir encaixe profissional em celulares comuns e uma composição centralizada, curta e equilibrada no desktop.

## Preservação obrigatória
- Manter exatamente o link atual do grupo de WhatsApp.
- Preservar sem mudanças a função `trackLead`, sua trava global por sessão e a geração de `eventID` com `crypto.randomUUID()`.
- Preservar o Meta Pixel base, `PageView`, ID `1391985675598607` e todas as configurações existentes.
- Não adicionar formulários, menus, pop-ups, páginas, depoimentos, contadores ou informações novas.

## Validação
- Verificar a página em larguras comuns de celular e desktop.
- Confirmar que não há cortes, sobreposições nem rolagem horizontal.
- Confirmar que o CTA mantém o link e dispara a mesma lógica de Lead, sem duplicação.
