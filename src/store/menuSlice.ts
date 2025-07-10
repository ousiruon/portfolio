import { createSlice } from "@reduxjs/toolkit";
interface menuStateProps {
  isOpen: boolean;
  isModern: boolean;
  isEn: boolean;
  menuContent: {
    en: { name: string; path: string }[];
    fr: { name: string; path: string }[];
  };
}
const initialState: menuStateProps = {
  isOpen: false,
  isModern: true,
  isEn: true,
  menuContent: {
    en: [
      { name: "Projects", path: "#projects" },
      { name: "About Me", path: "#aboutMe" },
      { name: "Contact", path: "#contact" },
      { name: "Résumé", path: "/resume/cvEN.pdf" },
    ],
    fr: [
      { name: "Projets", path: "#projects" },
      { name: "Qui suis-je", path: "#aboutMe" },
      { name: "Contact", path: "#contact" },
      { name: "Résumé", path: "/resume/cvFR.pdf" },
    ],
  },
};
export const menuSlice = createSlice({
  name: "menuSlice",
  initialState,
  reducers: {
    setLanguage: (state) => {
      state.isEn = !state.isEn;
    },
    setLayout: (state) => {
      state.isModern = !state.isModern;
    },
    setOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});
export const { setLanguage, setLayout, setOpen } = menuSlice.actions;
