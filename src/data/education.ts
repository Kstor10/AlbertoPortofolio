export const education = {
  es: [
    {
      id: "inteligencia-artificial",
      title: "Inteligencia artificial y producto",
      description: "Formación en IA generativa, modelos de lenguaje y gestión de producto.",
      items: [
        {
          name: "Claude + Codex Certified PM",
          provider: "The Product Compass",
          date: "18 de noviembre de 2026",
          kind: "Certificación",
          credential: { id: "CERT-34D81A47", href: "https://www.accredia.io/cert/CERT-34D81A47" },
        },
        {
          name: "AI Agents Certified PM",
          provider: "The Product Compass",
          date: "17 de noviembre de 2026",
          kind: "Certificación",
          credential: { id: "CERT-462EE7E3", href: "https://www.accredia.io/cert/CERT-462EE7E3" },
        },
        { name: "Latitude AI PM Course", provider: "Latitud", date: "Diciembre 2025", kind: "Curso" },
        { name: "LLM Foundations Certified PM", provider: "The Product Compass", date: "Octubre 2025", kind: "Formación" },
        { name: "Máster en IA e Innovación", provider: "Founderz × Microsoft", date: "2024–2025", kind: "Máster" },
        { name: "Curso Superior Universitario en Inteligencia Artificial Generativa", provider: "Universidad Católica San Antonio de Murcia (UCAM)", date: "2024", kind: "750 horas · 30 ECTS" },
      ],
    },
    {
      id: "blockchain",
      title: "Blockchain y criptomonedas",
      description: "Dos cursos que acompañan mi interés por las tecnologías descentralizadas.",
      items: [
        { name: "Tecnología Blockchain", provider: "Universidad de Berkeley", date: "2021", kind: "Curso" },
        { name: "Bitcoin y Criptomonedas", provider: "Universidad de Berkeley", date: "2021", kind: "Curso" },
      ],
    },
    {
      id: "desarrollo",
      title: "Desarrollo y habilidades",
      description: "Estudios técnicos en curso y formación complementaria centrada en las personas.",
      items: [
        { name: "Grado Superior en Desarrollo de Aplicaciones Multiplataforma", provider: "DAM", date: "En curso", kind: "Formación profesional" },
        { name: "Customer Service Success / Fundamentos de Soft Skills", provider: "Udemy", date: "2022", kind: "Curso" },
      ],
    },
  ],
  en: [
    {
      id: "artificial-intelligence",
      title: "Artificial intelligence & product",
      description: "Education in generative AI, language models and product management.",
      items: [
        {
          name: "Claude + Codex Certified PM",
          provider: "The Product Compass",
          date: "November 18, 2026",
          kind: "Certification",
          credential: { id: "CERT-34D81A47", href: "https://www.accredia.io/cert/CERT-34D81A47" },
        },
        {
          name: "AI Agents Certified PM",
          provider: "The Product Compass",
          date: "November 17, 2026",
          kind: "Certification",
          credential: { id: "CERT-462EE7E3", href: "https://www.accredia.io/cert/CERT-462EE7E3" },
        },
        { name: "Latitude AI PM Course", provider: "Latitud", date: "December 2025", kind: "Course" },
        { name: "LLM Foundations Certified PM", provider: "The Product Compass", date: "October 2025", kind: "Training" },
        { name: "Master in AI and Innovation", provider: "Founderz × Microsoft", date: "2024–2025", kind: "Master’s" },
        { name: "University Advanced Course in Generative Artificial Intelligence", provider: "Catholic University of Murcia (UCAM)", date: "2024", kind: "750 hours · 30 ECTS" },
      ],
    },
    {
      id: "blockchain",
      title: "Blockchain & cryptocurrency",
      description: "Two courses connected to my interest in decentralised technologies.",
      items: [
        { name: "Blockchain Technology", provider: "University of Berkeley", date: "2021", kind: "Course" },
        { name: "Bitcoin and Cryptocurrencies", provider: "University of Berkeley", date: "2021", kind: "Course" },
      ],
    },
    {
      id: "development",
      title: "Development & people skills",
      description: "Ongoing technical studies and complementary people-focused training.",
      items: [
        { name: "Multiplatform Application Development", provider: "DAM · Higher Vocational Education", date: "In progress", kind: "Vocational studies" },
        { name: "Customer Service Success / Soft Skills Fundamentals", provider: "Udemy", date: "2022", kind: "Course" },
      ],
    },
  ],
} as const;
