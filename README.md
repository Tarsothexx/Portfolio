# Portfólio — Tarcisio Vanderlei Evangelista

Site pessoal em React + TypeScript + Vite + Tailwind CSS.

## Rodar localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

## Build de produção

```bash
npm run build
npm run preview   # pra conferir o build localmente
```

O resultado vai para a pasta `dist/`.

## Estrutura

```
src/
  main.tsx              # ponto de entrada
  App.tsx                # monta a página juntando todas as seções
  index.css               # Tailwind + estilos globais que não dá pra fazer só com utility classes
  i18n/
    translations.ts        # TODO o texto do site em EN e PT, num lugar só (projetos, skills, timeline, links)
  context/
    LanguageContext.tsx     # estado do idioma atual + toggle, salvo no localStorage
  hooks/
    useReveal.ts            # animação de entrada ao rolar a página (IntersectionObserver)
    useScrollState.ts        # progresso do scroll, header que encolhe, seção ativa no menu
  components/
    Header.tsx, Hero.tsx, About.tsx, Skills.tsx,
    Projects.tsx, ProjectCard.tsx, Timeline.tsx,
    Contact.tsx, Footer.tsx           # uma seção por arquivo
    NetworkCanvas.tsx                   # fundo animado (canvas com partículas conectadas)
    CursorGlow.tsx                       # brilho que segue o mouse (só desktop)
    ProgressBar.tsx                       # barrinha de progresso no topo
    Chip.tsx                               # tag reutilizável — com ou sem % de proficiência
```

## Idioma (EN/PT)

O site abre em **inglês** por padrão. O botão EN/PT no header troca o idioma e lembra a
escolha (salva no navegador). Todo o texto do site — inclusive dos projetos, skills e
timeline — vem de `src/i18n/translations.ts`, dividido em dois objetos (`en` e `pt`). Pra
editar qualquer texto, é só mudar lá; os componentes não têm texto fixo.

## Skills em progresso (%)

Em vez de marcar uma skill como "aprendendo", `src/i18n/translations.ts` aceita um campo
`level` (0 a 100) em qualquer tag de skill:

```ts
{ label: 'Next.js', level: 55 }
```

Isso faz o chip mostrar a porcentagem com uma barrinha de progresso, em vez de texto tipo
"aprendendo". Pra ajustar os números (são só uma estimativa inicial), procura por
`Next.js`, `PostgreSQL` e `Elixir` dentro dos dois blocos (`en` e `pt`) de `translations.ts`.

## O que editar pra personalizar

- **Textos, projetos, skills, timeline, links**: tudo em `src/i18n/translations.ts` (blocos `en` e `pt`) —
  não precisa mexer nos componentes pra trocar conteúdo.
- **Link do LinkedIn**: está como placeholder em `translations.ts` (`socials.linkedin`). Troque pelo seu.
- **Cores / fontes**: em `tailwind.config.js`, na seção `theme.extend`.
- **Animações/keyframes customizados**: também em `tailwind.config.js` e em `src/index.css`.

## Deploy

Como já usa Firebase no LinguaQuest, o caminho mais direto é o mesmo:

```bash
npm run build
firebase init hosting   # se ainda não tiver configurado nesse projeto
firebase deploy
```

Também funciona direto em Vercel, Netlify ou GitHub Pages — é um app Vite padrão,
só precisa rodar `npm run build` e publicar a pasta `dist/`.
