// ============================================================
// ARQUIVO DE CONFIGURAÇÃO DO CLIENTE
// Edite apenas este arquivo para criar uma nova proposta.
// Não é necessário alterar nenhum outro arquivo.
// ============================================================

export const clientConfig = {
  // Dados do cliente
  client: {
    name: 'Mi7 Computadores',
    location: 'Vitória, ES',
    contact: '',
  },

  // Dados do apresentador
  presenter: {
    company: 'Lealtech',
    product: 'Lealflow',
    author: 'Samuel Leal',
    email: 'contato@lealflow.com',
    whatsapp: '',
    tagline: 'Agente de Atendimento Inteligente',
  },

  // Data da proposta
  date: 'Fevereiro de 2026',

  // Slides (ordem e conteúdo)
  slides: [
    { id: 'cover' },
    { id: 'problem' },
    { id: 'solution' },
    { id: 'features' },
    { id: 'pricing' },
    { id: 'timeline' },
    { id: 'requirements' },
    { id: 'conditions' },
    { id: 'cta' },
  ],

  // Conteúdo dos slides
  content: {
    problem: {
      headline: 'Você está perdendo vendas agora mesmo.',
      description:
        'Hoje a Mi7 não consegue atender todo mundo ao mesmo tempo no WhatsApp — e cada mensagem sem resposta é uma venda que vai para a concorrência.',
      painPoints: [
        { icon: '⏱', text: 'Clientes esperam horas por uma resposta simples' },
        { icon: '🔁', text: 'Perguntas repetidas consomem o tempo da equipe' },
        { icon: '🌙', text: 'Fora do horário comercial, ninguém responde' },
        { icon: '💸', text: 'Vendas perdidas por falta de atendimento ágil' },
      ],
    },

    solution: {
      headline: 'Um atendente que nunca dorme.',
      description:
        'O Lealflow é um agente de atendimento inteligente que responde seus clientes no WhatsApp 24 horas por dia, 7 dias por semana — sem precisar de intervenção humana para as situações mais comuns.',
      highlight: '24/7 · Automático · Inteligente',
    },

    features: [
      {
        icon: '💬',
        title: 'Respostas instantâneas',
        desc: 'Dúvidas sobre produtos, preços e estoque respondidas na hora, a qualquer momento.',
      },
      {
        icon: '💳',
        title: 'Venda pelo WhatsApp',
        desc: 'Quando o cliente quer comprar, o link de pagamento é enviado automaticamente no chat.',
      },
      {
        icon: '📦',
        title: 'Rastreamento em tempo real',
        desc: 'O cliente recebe atualizações automáticas: "pedido confirmado", "saiu para entrega".',
      },
      {
        icon: '🤝',
        title: 'Escalada inteligente',
        desc: 'Situações complexas são encaminhadas para atendimento humano no momento certo.',
      },
      {
        icon: '🛒',
        title: 'Loja Nuvemshop',
        desc: 'Sua loja configurada do zero: catálogo, pagamento e frete prontos para vender.',
      },
    ],

    setup: {
      totalPrice: 'R$ 4.000',
      paymentSteps: [
        {
          step: '01',
          moment: 'Ao assinar o contrato',
          value: 'R$ 2.000',
          desc: 'Para iniciar o desenvolvimento imediatamente.',
        },
        {
          step: '02',
          moment: 'Na entrega e ativação',
          value: 'R$ 2.000',
          desc: 'Somente após o sistema estar funcionando.',
        },
        {
          step: '03',
          moment: 'A partir do mês seguinte',
          value: 'R$ 700/mês',
          desc: 'Mensalidade começa após a ativação.',
          isMonthly: true,
        },
      ],
      items: [
        { what: 'Configuração da loja Nuvemshop', why: 'Catálogo, pagamentos e frete do zero' },
        { what: 'Criação do atendente virtual', why: 'Sistema de IA integrado ao seu WhatsApp' },
        { what: 'Integração com a loja', why: 'Consulta de preços e estoque em tempo real' },
        { what: 'Link de pagamento automático', why: 'Fechamento de venda direto no WhatsApp' },
        { what: 'Rastreamento de pedidos', why: 'Status do pedido no chat, sem esforço' },
        { what: 'Infraestrutura e servidores', why: 'Toda a base técnica onde o sistema roda' },
        { what: 'Testes e ativação', why: 'Garantia de funcionamento antes de ir ao ar' },
      ],
    },

    monthly: {
      price: 'R$ 700',
      label: '/mês',
      sublabel: 'Tudo incluído. Sem surpresas.',
      items: [
        { what: 'Servidor dedicado (VPS)', why: 'O sistema rodando 24/7 na nuvem' },
        { what: 'API do WhatsApp Business', why: 'Conexão técnica com o seu WhatsApp' },
        { what: 'Inteligência Artificial (GPT-4o)', why: 'O cérebro do atendente' },
        { what: 'Manutenção e suporte', why: 'Problemas corrigidos sem custo extra' },
      ],
      volumeNote: 'O valor pode ser reajustado proporcionalmente caso o volume de atendimentos cresça de forma consistente — com 30 dias de aviso prévio.',
    },

    timeline: {
      headline: '6 semanas para transformar seu atendimento.',
      weeks: [
        { week: '01', label: 'Briefing', desc: 'Reunião de alinhamento + configuração dos servidores' },
        { week: '02', label: 'Loja', desc: 'Configuração completa da Nuvemshop' },
        { week: '03', label: 'Agente', desc: 'Desenvolvimento do atendente virtual com IA' },
        { week: '04', label: 'Integração', desc: 'Conexão com WhatsApp e loja online' },
        { week: '05', label: 'Testes', desc: 'Testes completos com cenários reais' },
        { week: '06', label: 'Ativação', desc: 'Go-live, treinamento e entrega do sistema' },
      ],
    },

    requirements: {
      headline: 'O que precisamos de você',
      items: [
        { icon: '🔑', text: 'Acesso à conta da Nuvemshop' },
        { icon: '📱', text: 'Número de WhatsApp Business exclusivo para o atendente' },
        { icon: '📋', text: 'Lista de produtos com preços, descrições e fotos' },
        { icon: '📝', text: 'Instruções sobre a empresa e loja, perguntas e respostas e informações para passar ao agente de como falar dos produtos' },
      ],
    },

    conditions: {
      headline: 'Condições do contrato',
      items: [
        { label: 'Contrato mínimo', value: '3 meses de mensalidade' },
        { label: 'Cancelamento', value: '30 dias de aviso prévio' },
        { label: 'Bugs e instabilidades', value: 'Corrigidos sem custo pela Lealtech' },
        { label: 'Novas funcionalidades', value: 'Orçadas separadamente (Fase 2)' },
      ],
      outOfScope: [
        'Integrações com Mercado Livre, Shopee ou Amazon',
        'Disparos de mensagens em massa',
        'Funcionalidades além do escopo descrito',
        'Alterações de escopo após início do desenvolvimento',
      ],
    },

    cta: {
      headline: 'Pronto para transformar\nseu atendimento?',
      subline: 'Próximo passo: assinar o contrato e enviar as informações necessárias.',
    },
  },
}
