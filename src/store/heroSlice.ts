import { createSlice } from "@reduxjs/toolkit";
interface HeroStateProps {
  heroContent: {
    en: {
      title?: string;
      subtitle?: string;
      description?: string;
      important: boolean;
    }[];
    fr: {
      title?: string;
      subtitle?: string;
      description?: string;
      important: boolean;
    }[];
  };
}
const initialState: HeroStateProps = {
  heroContent: {
    en: [
      {
        title: "Hi, my name is",
        important: true,
      },
      {
        subtitle: "Oussama Dehmani.",
        important: false,
      },
      {
        subtitle: "I build things for the web.",
        important: false,
      },
      {
        description: "A montreal based passionate",
        important: false,
      },
      {
        description: "software developer",
        important: true,
      },
      {
        description:
          "with a focus on creating modern, responsive, and user-friendly",
        important: false,
      },
      {
        description: "web applications with React",
        important: true,
      },
      {
        description: "I specialize in building",
        important: false,
      },
      {
        description: "dynamic and interactive web applications",
        important: true,
      },
      {
        description: "using the latest technologies and best practices.",
        important: false,
      },
    ],
    fr: [
      {
        title: "Salut, je m'appelle",
        important: true,
      },
      {
        subtitle: "Oussama Dehmani.",
        important: false,
      },
      {
        subtitle: "Je crée des choses pour le web.",
        important: false,
      },
      {
        description: "Un passionné basé à Montréal",
        important: false,
      },
      {
        description: "développeur logiciel",
        important: true,
      },
      {
        description:
          "axé sur la création d'applications modernes, réactives et conviviales",
        important: false,
      },
      {
        description: "applications web avec React",
        important: true,
      },
      {
        description: "Je suis spécialisé dans la création de",
        important: false,
      },
      {
        description: "applications web dynamiques et interactives",
        important: true,
      },
      {
        description:
          "en utilisant les dernières technologies et les meilleures pratiques.",
        important: false,
      },
    ],
  },
};
export const HeroSlice = createSlice({
  name: "heroSlice",
  initialState,
  reducers: {},
});
