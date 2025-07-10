"use client";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

const Footer = () => {
  const { isModern, isEn } = useSelector((state: RootState) => state.menu);
  return (
    <>
      <footer
        className={`flex w-full items-center justify-center text-xs font-semibold py-8 ${
          isModern ? "bg-bg2-modern text-text-modern" : "bg-bg2-classic"
        }`}
      >
        {isEn ? "DESIGNED AND CODED WITH ♥ IN MTL" : "CONÇU ET CODÉ AVEC ♥ À MTL"}
      </footer>
    </>
  );
};
export default Footer;
