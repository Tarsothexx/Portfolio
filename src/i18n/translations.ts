export type Language = 'en' | 'pt'

export type SkillTag = {
  label: string
  /** Proficiency 0-100. Omit for core, fully-confident skills. */
  level?: number
}

export type Project = {
  id: string
  tag: string
  title: string
  description: string
  stack: string[]
  links?: { label: string; href: string }[]
  decoration: string
  featured?: boolean
}

export type Content = {
  nav: { id: string; label: string }[]
  hero: {
    status: string
    name: string
    subtitle: string
    ctaPrimary: string
    ctaSecondary: string
    scroll: string
  }
  about: {
    eyebrow: string
    headingLine1: string
    headingLine2: string
    paragraph1: string
    pullQuote: string
    paragraph2: string
  }
  skills: {
    eyebrow: string
    headingLine1: string
    headingLine2: string
    categories: {
      id: string
      label: string
      title: string
      tags: SkillTag[]
    }[]
  }
  projects: {
    eyebrow: string
    headingLine1: string
    headingLine2: string
    items: Project[]
    soonTag: string
    soonText: string
    soonCta: string
  }
  timeline: {
    eyebrow: string
    headingLine1: string
    headingLine2: string
    items: { date: string; title: string; description: string }[]
  }
  contact: {
    eyebrow: string
    headingLine1: string
    headingLine2: string
    text: string
    githubLabel: string
    linkedinLabel: string
  }
  footer: { text: string }
}

export const socials = {
  github: 'https://github.com/Tarsothexx',
  // TODO: paste your clean LinkedIn profile URL here (the one you sent came through
  // as a truncated Microsoft Teams share link, not the direct LinkedIn URL).
  linkedin: 'https://www.linkedin.com/in/tarc%C3%ADsio-vanderlei-657427287/',
}

export const translations: Record<Language, Content> = {
  en: {
    nav: [
      { id: 'sobre', label: 'About' },
      { id: 'skills', label: 'Skills' },
      { id: 'projetos', label: 'Projects' },
      { id: 'trajetoria', label: 'Journey' },
      { id: 'contato', label: 'Contact' },
    ],
    hero: {
      status: 'SYSTEM STATUS: ONLINE — OPEN TO NEW PROJECTS',
      name: 'Tarcisio Vanderlei\nEvangelista',
      subtitle:
        'Fullstack Developer with a degree in Systems Analysis and Development — experienced, curious, and always exploring new technologies, with a background in IT support.',
      ctaPrimary: 'View projects →',
      ctaSecondary: 'Get in touch',
      scroll: 'SCROLL',
    },
    about: {
      eyebrow: 'About',
      headingLine1: 'From support',
      headingLine2: 'to interface.',
      paragraph1:
        'I have a degree in Systems Analysis and Development and I\'m passionate about technology. My path started with curiosity — wanting to understand how things work — and for a long time I\'ve been part of the IT support team (GTI) at Instituto Mauá de Tecnologia, which gave me a practical, close-up view of how systems behave in everyday use.',
      pullQuote:
        'I like building practical solutions, learning new tools, and taking on challenges that help me grow.',
      paragraph2:
        'Today I build with JavaScript, TypeScript, React, and Tailwind CSS, and I\'m studying Elixir on my own. I\'m in constant progress — looking for opportunities to gain experience, sharpen my skills, and contribute to projects that make a difference.',
    },
    skills: {
      eyebrow: 'Stack',
      headingLine1: 'Tools I use',
      headingLine2: 'every day',
      categories: [
        {
          id: 'frontend',
          label: 'Frontend',
          title: 'Interface & Experience',
          tags: [
            { label: 'React' },
            { label: 'Tailwind CSS' },
            { label: 'JavaScript' },
            { label: 'TypeScript' },
            { label: 'HTML5' },
            { label: 'CSS3' },
          ],
        },
        {
          id: 'fullstack',
          label: 'Fullstack & Data',
          title: 'Backend & Persistence',
          tags: [
            { label: 'Firebase' },
            { label: 'Git & GitHub' },
            { label: 'Next.js', level: 55 },
            { label: 'PostgreSQL', level: 45 },
            { label: 'Elixir', level: 40 },
          ],
        },
        {
          id: 'infra',
          label: 'Infrastructure',
          title: 'Automation & Systems',
          tags: [
            { label: 'Deployment & Automation' },
            { label: 'Active Directory' },
            { label: 'Scripting (PowerShell)' },
            { label: 'Support & Networking' },
          ],
        },
      ],
    },
    projects: {
      eyebrow: 'Projects',
      headingLine1: 'Things I\'ve',
      headingLine2: 'built',
      items: [
        {
          id: 'linguaquest',
          tag: 'Extension Project IV · Live',
          title: 'LinguaQuest',
          description:
            'A Japanese-learning web app I built for a language teacher, as a full academic extension project — from the formal report to the production deployment.',
          stack: ['React', 'TypeScript', 'Vite', 'Firebase', 'Tailwind CSS', 'Claude API'],
          links: [
            { label: 'Visit site ↗', href: 'https://linguaquest-c77f9.web.app/' },
            { label: 'Source code ↗', href: 'https://github.com/Tarsothexx/linguaquest' },
          ],
          decoration: 'あ',
          featured: true,
        },
        {
          id: 'petsatisfeito',
          tag: 'Earlier project',
          title: 'PetSatisfeito',
          description:
            'One of the first complete projects I built on my own, focused on the pet care industry — part of the process that helped me consolidate my web development foundation before LinguaQuest.',
          stack: ['JavaScript', 'HTML/CSS'],
          decoration: '🐾',
        },
      ],
      soonTag: 'Coming soon',
      soonText:
        'More fullstack projects are on the way as I go deeper into Next.js, PostgreSQL, and Elixir. Keep an eye on GitHub.',
      soonCta: 'View GitHub ↗',
    },
    timeline: {
      eyebrow: 'Journey',
      headingLine1: 'How I got',
      headingLine2: 'here',
      items: [
        {
          date: 'ONGOING',
          title: 'IT Team (GTI) — Instituto Mauá de Tecnologia',
          description:
            'IT support and software deployment — helping keep everyday systems running smoothly for the people who use them.',
        },
        {
          date: 'GRADUATED',
          title: 'Systems Analysis and Development — Descomplica',
          description: 'Degree focused on complete software projects, from database to interface.',
        },
        {
          date: 'EXTENSION PROJECT IV',
          title: 'LinguaQuest',
          description:
            'Planning, developing, and shipping a Japanese-learning web app — including a formal academic report and full documentation.',
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      headingLine1: 'Let\'s build',
      headingLine2: 'something together?',
      text: 'Open to fullstack developer opportunities, freelance work, or just talking about code and infrastructure.',
      githubLabel: 'GitHub ↗',
      linkedinLabel: 'LinkedIn ↗',
    },
    footer: { text: 'Built with React, TypeScript, and Tailwind CSS.' },
  },

  pt: {
    nav: [
      { id: 'sobre', label: 'Sobre' },
      { id: 'skills', label: 'Skills' },
      { id: 'projetos', label: 'Projetos' },
      { id: 'trajetoria', label: 'Trajetória' },
      { id: 'contato', label: 'Contato' },
    ],
    hero: {
      status: 'STATUS DO SISTEMA: ONLINE — DISPONÍVEL PARA NOVOS PROJETOS',
      name: 'Tarcisio Vanderlei\nEvangelista',
      subtitle:
        'Desenvolvedor Fullstack formado em Análise e Desenvolvimento de Sistemas — experiente, curioso e sempre explorando novas tecnologias, com background em suporte de TI.',
      ctaPrimary: 'Ver projetos →',
      ctaSecondary: 'Falar comigo',
      scroll: 'ROLAR',
    },
    about: {
      eyebrow: 'Sobre',
      headingLine1: 'Do suporte',
      headingLine2: 'para a interface.',
      paragraph1:
        'Sou formado em Análise e Desenvolvimento de Sistemas e apaixonado por tecnologia. Minha trajetória começou pela curiosidade — a vontade de entender como as coisas funcionam — e há bastante tempo faço parte da equipe de suporte de TI (GTI) do Instituto Mauá de Tecnologia, o que me deu uma visão prática de como sistemas se comportam no dia a dia de quem usa.',
      pullQuote:
        'Gosto de criar soluções práticas, aprender novas ferramentas e encarar desafios que me ajudam a crescer.',
      paragraph2:
        'Hoje desenvolvo com JavaScript, TypeScript, React e Tailwind CSS, além de estudar Elixir por conta própria. Estou em construção constante — buscando experiência, aprimorando habilidades e contribuindo com projetos que façam diferença.',
    },
    skills: {
      eyebrow: 'Stack',
      headingLine1: 'Ferramentas que uso',
      headingLine2: 'no dia a dia',
      categories: [
        {
          id: 'frontend',
          label: 'Frontend',
          title: 'Interface & Experiência',
          tags: [
            { label: 'React' },
            { label: 'Tailwind CSS' },
            { label: 'JavaScript' },
            { label: 'TypeScript' },
            { label: 'HTML5' },
            { label: 'CSS3' },
          ],
        },
        {
          id: 'fullstack',
          label: 'Fullstack & Dados',
          title: 'Backend & Persistência',
          tags: [
            { label: 'Firebase' },
            { label: 'Git & GitHub' },
            { label: 'Next.js', level: 55 },
            { label: 'PostgreSQL', level: 45 },
            { label: 'Elixir', level: 40 },
          ],
        },
        {
          id: 'infra',
          label: 'Infraestrutura',
          title: 'Automação & Sistemas',
          tags: [
            { label: 'Deploy & Automação' },
            { label: 'Active Directory' },
            { label: 'Scripting (PowerShell)' },
            { label: 'Suporte & Redes' },
          ],
        },
      ],
    },
    projects: {
      eyebrow: 'Projetos',
      headingLine1: 'Coisas que eu',
      headingLine2: 'construí',
      items: [
        {
          id: 'linguaquest',
          tag: 'Projeto de Extensão IV · Em produção',
          title: 'LinguaQuest',
          description:
            'Aplicativo web de ensino de japonês desenvolvido para uma professora de idiomas, como projeto de extensão acadêmica completo — do relatório formal à entrega em produção.',
          stack: ['React', 'TypeScript', 'Vite', 'Firebase', 'Tailwind CSS', 'Claude API'],
          links: [
            { label: 'Ver site ↗', href: 'https://linguaquest-c77f9.web.app/' },
            { label: 'Código fonte ↗', href: 'https://github.com/Tarsothexx/linguaquest' },
          ],
          decoration: 'あ',
          featured: true,
        },
        {
          id: 'petsatisfeito',
          tag: 'Projeto anterior',
          title: 'PetSatisfeito',
          description:
            'Um dos primeiros projetos completos que desenvolvi, voltado ao setor pet — parte do processo que consolidou minha base em desenvolvimento web antes do LinguaQuest.',
          stack: ['JavaScript', 'HTML/CSS'],
          decoration: '🐾',
        },
      ],
      soonTag: 'Em breve',
      soonText:
        'Novos projetos fullstack estão a caminho enquanto aprofundo Next.js, PostgreSQL e Elixir. Fique de olho no GitHub.',
      soonCta: 'Ver GitHub ↗',
    },
    timeline: {
      eyebrow: 'Trajetória',
      headingLine1: 'Como cheguei',
      headingLine2: 'até aqui',
      items: [
        {
          date: 'EM ANDAMENTO',
          title: 'Equipe de TI (GTI) — Instituto Mauá de Tecnologia',
          description:
            'Suporte de TI e implantação de software — ajudando a manter os sistemas do dia a dia funcionando bem para quem usa.',
        },
        {
          date: 'FORMADO',
          title: 'Análise e Desenvolvimento de Sistemas — Descomplica',
          description: 'Formação com foco em projetos completos de software, do banco de dados à interface.',
        },
        {
          date: 'PROJETO DE EXTENSÃO IV',
          title: 'LinguaQuest',
          description:
            'Planejamento, desenvolvimento e entrega de um app web de ensino de japonês — incluindo relatório acadêmico formal e documentação completa.',
        },
      ],
    },
    contact: {
      eyebrow: 'Contato',
      headingLine1: 'Vamos construir',
      headingLine2: 'algo juntos?',
      text: 'Aberto a oportunidades como desenvolvedor fullstack, freelas ou apenas trocar uma ideia sobre código e infraestrutura.',
      githubLabel: 'GitHub ↗',
      linkedinLabel: 'LinkedIn ↗',
    },
    footer: { text: 'Construído com React, TypeScript e Tailwind CSS.' },
  },
}
