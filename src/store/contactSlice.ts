import { createSlice } from "@reduxjs/toolkit";
interface ContactState {
  repo: string;
  en: {
    important: boolean;
    text: string;
  }[];
  fr: {
    important: boolean;
    text: string;
  }[];
}
const initialState: ContactState = {
  repo: "https://github.com/ousiruon/Gameroun",
  en: [
    {
      important: false,
      text: "If you think I might be a good fit for a",
    },
    {
      important: true,
      text: "role",
    },
    {
      important: false,
      text: "have a",
    },
    {
      important: true,
      text: "freelance project",
    },
    {
      important: false,
      text: "in mind, or just want to say hi — I’d love to hear from you! Feel free to drop me a message.",
    },
  ],
  fr: [
    {
      important: false,
      text: "Si vous pensez que je pourrais correspondre à un",
    },
    {
      important: true,
      text: "poste",
    },
    {
      important: false,
      text: ", que vous avez un projet ",
    },
    {
      important: true,
      text: "freelance en tête",
    },
    {
      important: false,
      text: ", ou que vous avez simplement envie de dire bonjour — n’hésitez pas à m’écrire, ça me fera plaisir de vous lire !.",
    },
  ],
};
export const contactSlice = createSlice({
  name: "contactSlice",
  initialState,
  reducers: {},
});
