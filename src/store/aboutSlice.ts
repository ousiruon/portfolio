import { createSlice } from "@reduxjs/toolkit";
export interface AboutState {
  cartoonPhoto: string;
  photo: string;
  keywordsDescription: {
    en: string;
    fr: string;
  };
  keywords: string[];
  description: {
    en: { desContent: string; important: boolean }[];
    fr: { desContent: string; important: boolean }[];
  };
}
const initialState: AboutState = {
  cartoonPhoto: "/img/cartoonPhoto.png",
  photo: "/img/photo.jpg",
  keywordsDescription: {
    en: "Some of the tools I’ve been working with recently are:",
    fr: "Voici quelques outils avec lesquels j'ai travaillé récemment :",
  },
  keywords: [
    "JavaScript (ES6+)",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Git",
  ],
  description: {
    en: [
      {
        desContent:
          "Hey again, thanks for scrolling this far! My name is Oussama Dehmani, a multilangual IT professional with over a decade of experience in e-business development, customer support, GDPR compliance and IT project management. My journey has taken me from leading product adaptations for Badoo in the MENA region to managing internal systems and teams as an IT manager.",
        important: false,
      },
      {
        desContent: "Recently, I started growing an interest in",
        important: false,
      },
      {
        desContent: "software development",
        important: true,
      },
      {
        desContent: ", particularly on the",
        important: false,
      },
      {
        desContent: "frontend side",
        important: true,
      },
      {
        desContent: ". I am currently focused on mastering",
        important: false,
      },
      {
        desContent: "React and Next.js",
        important: true,
      },
      {
        desContent:
          ", with the goal of building innovative solutions that enhance user experiences.",
        important: false,
      },
      {
        desContent:
          "When I am not coding, I enjoy exploring new technologies, studying numismatics, and spending time with my family.",
        important: false,
      },
    ],
    fr: [
      {
        desContent:
          "Salut encore, et merci d’avoir scrollé jusqu’ici ! Je m’appelle Oussama Dehmani, un professionnel de l’informatique multilingue avec plus de dix ans d’expérience en développement e-business, support client, conformité RGPD et gestion de projets informatiques. Mon parcours m’a mené de l’adaptation de produits pour Badoo dans la région MENA à la gestion de systèmes internes et d’équipes en tant que responsable IT.",
        important: false,
      },
      {
        desContent: "Récemment, j’ai commencé à m’intéresser à",
        important: false,
      },
      {
        desContent: "développement logiciel",
        important: true,
      },
      {
        desContent: ", en particulier au",
        important: false,
      },
      {
        desContent: "frontend",
        important: true,
      },
      {
        desContent: ". En ce moment, je me concentre sur la maîtrise de",
        important: false,
      },
      {
        desContent: "React et Next.js",
        important: true,
      },
      {
        desContent:
          ", dans le but de créer des solutions innovantes qui améliorent l’expérience utilisateur.",
        important: false,
      },
      {
        desContent:
          "Quand je ne code pas, j’aime explorer de nouvelles technologies, étudier la numismatique et passer du temps en famille.",
        important: false,
      },
    ],
  },
};
export const aboutSlice = createSlice({
  name: "aboutSlice",
  initialState,
  reducers: {},
});
