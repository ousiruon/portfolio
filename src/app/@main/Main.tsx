"use client";
import { RootState } from "@/store/store";
import Projects from "./Projects";
import { Fira_Sans, Inconsolata } from "next/font/google";
import { useSelector } from "react-redux";
import About from "./About";
import Contact from "./Contact";
const inter = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});
const Main = () => {
  const { isModern } = useSelector((state: RootState) => state.menu);
  return (
    <>
      <main
        className={`${
          isModern ? inter.className : inconsolata.className
        } min-h-dvh relative flex flex-col items-end ${
          isModern
            ? "bg-bg-modern text-text-modern"
            : "bg-bg-classic text-text-classic"
        }`}
      >
        <Projects />
        <About />
        <Contact />
      </main>
    </>
  );
};
export default Main;
