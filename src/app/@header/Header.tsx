"use client";
import { Fira_Sans, Inconsolata } from "next/font/google";
import { AppDispatch, RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setLanguage, setLayout, setOpen } from "@/store/menuSlice";
import { motion } from "motion/react";
import SubHeader from "./SubHeader";
import { IoClose } from "react-icons/io5";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
const inter = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});
const Header = () => {
  const dispatch: AppDispatch = useDispatch();
  const { isModern, isEn, menuContent, isOpen } = useSelector(
    (state: RootState) => state.menu
  );
  const { heroContent } = useSelector((state: RootState) => state.hero);
  const { cartoonPhoto } = useSelector((state: RootState) => state.about);
  const [headerContent, setHeaderContent] = useState<
    { name: string; path: string }[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hero, setHero] = useState<
    {
      title?: string;
      subtitle?: string;
      description?: string;
      important: boolean;
    }[]
  >([]);
  // const [hoverResume, setHoverResume] = useState(false);
  useEffect(() => {
    if (isEn) {
      setHeaderContent(menuContent.en);
    } else {
      setHeaderContent(menuContent.fr);
    }
  }, [isEn, menuContent]);
  useEffect(() => {
    if (isEn) {
      setHero(heroContent.en);
    } else {
      setHero(heroContent.fr);
    }
  }, [isEn, heroContent]);
  useEffect(() => {
    if (!isLoading) {
      setIsLoading(true);
    }
  }, [isEn, isModern]);
  useEffect(() => {
    if (isLoading && headerContent.length > 0) {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, [isLoading, headerContent]);
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width > 768 && isOpen) {
        dispatch(setOpen());
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen, dispatch]);
  return (
    <>
      {!isLoading && (
        <header
          className={`${
            isModern ? inter.className : inconsolata.className
          } min-h-dvh relative flex flex-col items-end ${
            isModern
              ? "bg-bg-modern text-text-modern"
              : "bg-bg-classic text-text-classic"
          }`}
        >
          <div className="w-full flex flex-row-reverse justify-between items-center px-4 py-3 text-sm">
            <div className="flex gap-1 text-xs">
              <a
                className={`cursor-pointer ${
                  isModern && isEn && "text-terniary-modern"
                } ${!isModern && isEn && "text-terniary-classic"} ${
                  isEn && "font-bold"
                }`}
                onClick={() => dispatch(setLanguage())}
              >
                en
              </a>
              <div className="font-semibold">|</div>
              <a
                className={`cursor-pointer ${
                  isModern && !isEn && "text-terniary-modern"
                } ${!isModern && !isEn && "text-terniary-classic"} ${
                  !isEn && "font-semibold"
                }`}
                onClick={() => dispatch(setLanguage())}
              >
                fr
              </a>
            </div>
            <div className="flex gap-1 text-xs">
              <a
                className={`cursor-pointer ${
                  isModern && "text-terniary-modern"
                }  ${isModern && "font-bold"}`}
                onClick={() => dispatch(setLayout())}
              >
                Modern
              </a>
              <div className="font-semibold">|</div>
              <a
                className={`cursor-pointer  ${
                  !isModern && "text-terniary-classic"
                } ${!isModern && "font-bold"}`}
                onClick={() => dispatch(setLayout())}
              >
                Retro
              </a>
            </div>
          </div>
          <nav className="hidden md:flex justify-end items-center w-full p-4 max-w-[900px] mx-auto">
            <ul
              className={`flex gap-8 text-sm ${
                isModern ? "font-[500]" : "font-bold"
              } leading-none`}
            >
              {headerContent.map((single, index) => (
                <li className="flex gap-1 items-center" key={single.name}>
                  {single.name !== "Résumé" && (
                    <>
                      {isModern && (
                        <span className="text-xs text-terniary-modern">{`0${
                          index + 1
                        }.`}</span>
                      )}
                      <a
                        href={single.path}
                        className={`text-decoration-none transition-colors ease-in duration-300 ${
                          isModern
                            ? "hover:text-terniary-modern"
                            : "hover:text-terniary-classic"
                        }`}
                      >
                        {single.name}
                      </a>
                    </>
                  )}
                  {/*single.name === "Résumé" && (
                    <motion.a
                      target="_blank"
                      rel="noopener noreferrer"
                      onHoverStart={() => setHoverResume(true)}
                      onHoverEnd={() => setHoverResume(false)}
                      href={single.path}
                      className={`relative text-decoration-none text-xs transition-colors ease-in duration-300 rounded z-2 ${
                        isModern
                          ? "w-[70px] h-full"
                          : "bg-terniary-classic/80 hover:bg-terniary-classic text-bg-classic p-2"
                      }`}
                    >
                      {!isModern && single.name}
                      {isModern && (
                        <>
                          <div
                            className={`absolute ${
                              hoverResume
                                ? "bottom-[45%] left-[-5%] translate-y-[45%]"
                                : "bottom-[50%] left-0 translate-y-[50%]"
                            }  p-2 border-terniary-modern border-2 text-terniary-modern bg-bg-modern z-2 rounded transition-all ease-in duration-300`}
                          >
                            {single.name}
                          </div>
                          <div className="absolute bottom-[50%] left-0 translate-y-[50%] p-2 border-2 border-terniary-modern bg-terniary-modern z-1 rounded transition-all ease-in duration-300">
                            {single.name}
                          </div>
                        </>
                      )}
                    </motion.a>
                  )*/}
                </li>
              ))}
            </ul>
          </nav>
          {/* Mobile Navigation */}
          <div
            className={`md:hidden flex justify-end items-center w-full p-4 text-2xl ${
              isModern ? "text-terniary-modern" : "text-terniary-classic"
            }`}
          >
            <div onClick={() => dispatch(setOpen())} className="cursor-pointer">
              <HiOutlineMenuAlt1 />
            </div>
          </div>
          {isOpen && (
            <div
              onClick={() => dispatch(setOpen())}
              className="fixed top-0 left-0 w-full h-full backdrop-blur-xs blur-xs bg-white/3 z-40"
            ></div>
          )}
          <motion.nav
            initial={{ x: "100%" }}
            animate={isOpen ? { x: 0 } : {}}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              mass: 0.8,
              restDelta: 0.001,
              duration: 0.3,
            }}
            className={`fixed top-0 h-dvh flex flex-col justify-center items-center py-6 px-10 z-50 shadow-xl ${
              isModern ? "bg-bg-modern" : "bg-bg-classic"
            }`}
          >
            <div
              className={`absolute top-5 right-5 flex items-end justify-end w-full cursor-pointer `}
            >
              <div
                onClick={() => dispatch(setOpen())}
                className={`hover:rotate-90 transition-all ease-in duration-300 ${
                  isModern ? "text-terniary-modern" : "text-terniary-classic"
                }`}
              >
                <IoClose size={32} />
              </div>
            </div>
            <ul
              className={`flex flex-col items-center gap-8 text-base ${
                isModern ? "font-[500]" : "font-bold"
              } leading-none`}
            >
              {headerContent.map((single, index) => (
                <li
                  className={`flex flex-col gap-1 items-center justify-center px-15 sm:px-30 py-5`}
                  key={single.name}
                >
                  {single.name !== "Résumé" && (
                    <>
                      {isModern && (
                        <span className="text-xs text-terniary-modern">{`0${
                          index + 1
                        }.`}</span>
                      )}
                      <a
                        href={single.path}
                        onClick={() => {
                          dispatch(setOpen());
                        }}
                        className={`text-decoration-none transition-colors ease-in duration-300 ${
                          isModern
                            ? "hover:text-terniary-modern"
                            : "hover:text-terniary-classic"
                        }`}
                      >
                        {single.name}
                      </a>
                    </>
                  )}
                  {/*single.name === "Résumé" && (
                    <motion.a
                      href={single.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`relative text-decoration-none text-xs transition-colors ease-in duration-300 rounded z-2 ${
                        isModern
                          ? "w-full h-full"
                          : "bg-terniary-classic/80 hover:bg-terniary-classic text-bg-classic py-4 px-10"
                      }`}
                    >
                      {!isModern && single.name}
                      {isModern && (
                        <>
                          <div
                            className={`relative py-4 px-10 border-terniary-modern border-2 text-terniary-modern bg-bg-modern z-2 rounded transition-all ease-in duration-300`}
                          >
                            {single.name}
                          </div>
                        </>
                      )}
                    </motion.a>
                  )*/}
                </li>
              ))}
            </ul>
          </motion.nav>
          {hero.length > 0 && (
            <SubHeader
              isModern={isModern}
              hero={hero}
              cartoonPhoto={cartoonPhoto}
            />
          )}
        </header>
      )}
      {isLoading && (
        <div
          className={`fixed top-0 left-0 h-full w-full ${
            isModern ? "bg-bg-modern" : "bg-bg-classic"
          } z-50 flex flex-col items-center justify-center`}
        >
          <div
            className={` 
            relative p-8 text-center flex items-center justify-center aspect-square text-3xl
            ${
              isModern
                ? `bg-bg-modern ${inter.className} text-terniary-modern`
                : `bg-bg-classic ${inconsolata.className} text-terniary-classic`
            }`}
          >
            <div
              className={`absolute top-0 left-0 w-full h-full border-t-4 border-b-4 rounded-full rotateAnim ${
                isModern ? ` text-terniary-modern` : `text-terniary-classic`
              }`}
            ></div>
            <div
              className={`absolute top-[50%] left-[50%] w-[90%] h-[90%] translate-[-50%] border-l-4 border-r-4 rounded-full rotateAnimReverse ${
                isModern ? ` text-terniary-classic` : `text-bg2-classic`
              }`}
            ></div>
            O.D
          </div>
        </div>
      )}
    </>
  );
};
export default Header;
