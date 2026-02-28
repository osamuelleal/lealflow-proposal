<div align="center">

# 📊 Lealflow Proposal

**Proposta comercial interativa em formato de slides — pronta para usar, fácil de personalizar.**

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

</div>

---

## Sobre

**Lealflow Proposal** é um template para criar propostas comerciais interativas apresentadas como slides — rodando inteiramente no navegador. Em vez de PDFs estáticos ou arquivos PowerPoint, você entrega uma apresentação polida, responsiva e facilmente compartilhável que funciona em qualquer dispositivo.

Todo o conteúdo da proposta fica em um **único arquivo de configuração** (`src/client.config.ts`). Para criar uma nova proposta para outro cliente, basta editar esse arquivo — nenhum componente precisa ser alterado.

---

## Funcionalidades

- **Personalização em arquivo único** — todo o conteúdo e dados do cliente em um só lugar
- **Fluxo de 9 slides** — Capa → Problema → Solução → Funcionalidades → Preços → Cronograma → Requisitos → Condições → CTA
- **Navegação por teclado** — Setas, Espaço, Home, End
- **Navegação por toque/swipe** — funciona perfeitamente em celulares e tablets
- **Totalmente responsivo** — otimizado para Safari mobile e todos os navegadores modernos
- **Sem backend** — build estático, hospede em qualquer lugar

---

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | React 19 |
| Linguagem | TypeScript 5.9 |
| Build | Vite 7 |
| Estilização | Tailwind CSS 3 |
| Arquitetura | Atomic Design |

---

## Estrutura do Projeto

```
src/
├── client.config.ts          # ← Edite este arquivo para personalizar por cliente
├── App.tsx                   # Lógica de navegação (teclado + toque)
├── components/
│   ├── atoms/                # Elementos base de UI
│   ├── molecules/            # Grupos compostos de UI
│   ├── organisms/            # SlideLayout e shell de navegação
│   └── slides/               # Um arquivo por slide
│       ├── CoverSlide.tsx
│       ├── ProblemSlide.tsx
│       ├── SolutionSlide.tsx
│       ├── FeaturesSlide.tsx
│       ├── PricingSlide.tsx
│       ├── TimelineSlide.tsx
│       ├── RequirementsSlide.tsx
│       ├── ConditionsSlide.tsx
│       └── CTASlide.tsx
```

---

## Como Começar

### Pré-requisitos

- Node.js 18+
- npm

### Instalação e execução

```bash
# Clone o repositório
git clone https://github.com/osamuelleal/lealflow-proposal.git
cd lealflow-proposal

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:5173](http://localhost:5173) no navegador.

### Build para produção

```bash
npm run build
```

O resultado ficará na pasta `dist/` — pronto para deploy em qualquer host estático (Vercel, Netlify, GitHub Pages, etc.).

---

## Personalizando para um Cliente

Tudo que você precisa editar é o **`src/client.config.ts`**.

```ts
export const clientConfig = {
  client: {
    name: 'Nome do Cliente',     // Aparece na capa e no slide de CTA
    location: 'Cidade, Estado',
  },
  presenter: {
    company: 'Sua Empresa',
    product: 'Seu Produto',
    author: 'Seu Nome',
    email: 'seu@email.com',
    tagline: 'Seu slogan aqui',
  },
  date: 'Mês Ano',
  // ... conteúdo dos slides abaixo
}
```

Todos os slides leem seu conteúdo a partir desse config. Nenhum outro arquivo precisa ser alterado.

---

## Navegação

| Entrada | Ação |
|---|---|
| `→` / `↓` / `Espaço` | Próximo slide |
| `←` / `↑` | Slide anterior |
| `Home` / `Esc` | Primeiro slide |
| `End` | Último slide |
| Swipe para esquerda | Próximo slide |
| Swipe para direita | Slide anterior |
| Indicadores de ponto | Ir para qualquer slide |

---

## Deploy

Este é um build estático padrão do Vite. Após rodar `npm run build`, faça o deploy da pasta `dist/` em qualquer provedor de hospedagem estática:

- **Vercel** — `vercel --prod`
- **Netlify** — arraste e solte a pasta `dist/`
- **GitHub Pages** — envie `dist/` para a branch `gh-pages`

---

## Licença

MIT — sinta-se livre para usar e adaptar este template para suas próprias propostas.

---

<div align="center">
  Feito com ♥ pela <a href="https://lealtech.com.br">Lealtech</a>
</div>
