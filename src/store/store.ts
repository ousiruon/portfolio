import { configureStore } from "@reduxjs/toolkit";
import { menuSlice } from "./menuSlice";
import { HeroSlice } from "./heroSlice";
import { aboutSlice } from "./aboutSlice";
import { projectsSlice } from "./projectsSlice";
import { contactSlice } from "./contactSlice";
const store = configureStore({
  reducer: {
    menu: menuSlice.reducer,
    hero: HeroSlice.reducer,
    about: aboutSlice.reducer,
    projects: projectsSlice.reducer,
    contact: contactSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
