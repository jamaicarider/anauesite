// Troque aqui o número do WhatsApp (DDI + DDD + número, sem símbolos)
export const WHATSAPP = "5541991166676";
export const WHATSAPP_EXIBIDO = "(41) 99116-6676";
export const INSTAGRAM = "https://instagram.com/annauetextil";
export const INSTAGRAM_USER = "@annauetextil";

// TEXTOS PROVISÓRIOS: substituir pelos depoimentos reais (e confirmar a autorização de cada cliente) antes de publicar.
export const depoimentos = [
  { nome: "Desgosto", cargo: "Cliente", foto: "/depoimentos/desgosto.jpg", alt: "Retrato de homem de camiseta branca e gorro diante de um painel de círculos laranja",
    texto: "A malha tem corpo e o caimento ficou exatamente como pedimos. A estampa saiu fiel à arte." },
  { nome: "Gasoline Speed Shop", cargo: "Cliente", foto: "/depoimentos/gasoline.jpg", alt: "Homem de camiseta bege ao lado de uma moto, sob o arco inflável da Gasoline Speed Shop",
    texto: "Prazo cumprido e peças padronizadas do primeiro ao último lote. Atendimento direto, sem enrolação." },
  { nome: "Museu do Olho", cargo: "Cliente", foto: "/depoimentos/museu-do-olho.jpg", alt: "Fachada do Museu do Olho, em Curitiba, com a grande cobertura curva sobre um bloco amarelo",
    texto: "A amostra nos deu segurança para fechar o pedido. Na entrega, a qualidade era a mesma." },
  { nome: "Toró", cargo: "Cliente", foto: "/depoimentos/toro.jpg", alt: "Modelo de perfil vestindo capa de chuva preta com capuz",
    texto: "Etiqueta personalizada e acabamento bem cuidado. O resultado reforçou a identidade da nossa marca." },
  { nome: "Cutterman", cargo: "Cliente", foto: "/depoimentos/cutterman.jpg", alt: "Homem de costas vestindo camisa verde-oliva e gorro preto",
    texto: "Boa variedade de modelagens e gramaturas. Fácil de pedir e fácil de repetir." },
];

export const linhas = [
  { id: "30-penteada", nome: "30 Penteada", tipo: "tee", gramatura: "155 g/m²",
    desc: "Malha 100% algodão sustentável, fio penteado 30.1.",
    specs: ["Costura dupla de ombro a ombro", "Ribana canelada 2x1 com 2 cm", "Tamanhos PP a XGG"],
    cores: ["#ECEAE4", "#33363A", "#BE974D"],
    modelos: [{ nome: "Basic", forma: 1 }, { nome: "Over", forma: 1.14 }, { nome: "Confort", forma: 1.05 }] },
  { id: "strong", nome: "Strong", tipo: "tee", gramatura: "175 g/m²",
    desc: "Mesma malha da 30 Penteada, mais encorpada.",
    specs: ["Costura dupla de ombro a ombro", "Ribana canelada 2x1 com 2 cm", "Tamanhos PP a XGG"],
    cores: ["#D8D5CC", "#33363A", "#8A9A86"],
    modelos: [{ nome: "Basic Strong", forma: 1 }, { nome: "Over Strong", forma: 1.14 }, { nome: "Confort Strong", forma: 1.05 }] },
  { id: "rugby", nome: "Rugby", tipo: "tee", gramatura: "240–260 g/m²",
    desc: "Malha mais robusta, ideal para peças estruturadas.",
    specs: [],
    cores: ["#C9C4B8", "#15151A", "#6B3B2E"],
    modelos: [{ nome: "Basic Rugby", forma: 1 }, { nome: "Over Rugby", forma: 1.14 }, { nome: "Confort Rugby", forma: 1.05 }] },
  { id: "moletom", nome: "Moletom", tipo: "hoodie", gramatura: "355 g/m²",
    desc: "50% algodão sustentável, 50% poliéster.",
    specs: ["Cobertura de gola", "Ribana canelada no punho e na gola", "Capuz forrado nos modelos canguru"],
    cores: ["#B9BAB6", "#33363A", "#BE974D"],
    modelos: [{ nome: "Blusa Tradicional", forma: 1 }, { nome: "Canguru Fechado", forma: 1 }, { nome: "Canguru Aberto", forma: 1 }] },
  { id: "worker", nome: "Worker", tipo: "shirt", gramatura: "197 g/m²",
    desc: "Sarja peletizada 100% algodão.",
    specs: [],
    cores: ["#C7B79A", "#2B3A2E", "#33363A"],
    modelos: [{ nome: "Manga Curta", forma: 1, curta: true }, { nome: "Manga Longa", forma: 1 }] },
  { id: "ecobag", nome: "Ecobag", tipo: "bag", gramatura: "197–294 g/m²",
    desc: "Sarja peletizada 100% algodão, alças de 3 cm no próprio tecido.",
    specs: ["Pastel P: 34x41 cm, 197 g/m²", "Pastel M: 35x45 cm, 294 g/m²", "c/ Alma G: 46x50x15 cm, 294 g/m²"],
    cores: ["#E2D8C3", "#D8D5CC", "#33363A"],
    modelos: [{ nome: "Pastel P", forma: 0.85 }, { nome: "Pastel M", forma: 1 }, { nome: "c/ Alma G", forma: 1.15 }] },
];

export const medidas = [
  ["PP", 66, 44, 13], ["P", 67, 44, 13], ["M", 68, 44, 14],
  ["G", 69, 47, 15], ["GG", 68, 44, 14], ["XGG", 69, 47, 15],
];

export const passos = [
  ["Consulte o catálogo", "Escolha a linha e o modelo."],
  ["Fale com o atendimento", "Informe o modelo e a quantidade desejada."],
  ["Envie a arte", "Mandamos para análise antes de produzir."],
];

export const faq = [
  ["Qual é o pedido mínimo?", "Linha Essencial: a partir de 18 peças, para produções com até 1 cor. Linha Prime: a partir de 48 peças, para produções com 2 cores ou mais."],
  ["O que são as telas?", "Na serigrafia, cada cor da estampa exige uma matriz de impressão, chamada tela. Uma arte com 3 cores (verde, vermelho e preto) precisa de 3 telas."],
  ["Vocês produzem peça piloto?", "Não. Oferecemos amostras estampadas com artes próprias da equipe, para você avaliar malha, modelagem e serigrafia antes do pedido completo."],
  ["Qual é o prazo de produção?", "Padrão: 25 a 35 dias corridos após a confirmação do pagamento. Estampas complexas ou grande volume: 45 a 60 dias."],
  ["Vocês oferecem desconto progressivo?", "Sim. Quanto maior a quantidade de peças, menor o custo unitário."],
  ["Quais formatos de arte vocês aceitam?", "PDF vetorizado para serigrafia, sem elementos rasterizados. PNG em alta resolução (300 dpi), no tamanho real de impressão, para DTF."],
  ["Como informar as cores da arte?", "Use a referência Pantone, por exemplo “Pantone 185 C”, para garantir a fidelidade de cor na impressão."],
];
