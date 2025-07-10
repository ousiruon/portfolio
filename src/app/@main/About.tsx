"use client";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { MdOutlineArrowRight } from "react-icons/md";
import { PiDotBold } from "react-icons/pi";
import { FcAbout } from "react-icons/fc";

const About = () => {
  const { isEn, isModern } = useSelector((state: RootState) => state.menu);
  const about = useSelector((state: RootState) => state.about);
  const [aboutContent, setAboutContent] = useState<
    { desContent: string; important: boolean }[]
  >([]);
  const [isPhotoHighlighted, setIsPhotoHighlighted] = useState<boolean>(false);
  useEffect(() => {
    if (isEn) {
      setAboutContent(about.description.en);
    } else {
      setAboutContent(about.description.fr);
    }
  }, [about, isEn]);
  return (
    <>
      <div
        id="aboutMe"
        className="flex flex-col items-center justify-start py-10 md:py-20 px-4 w-full"
      >
        {about && aboutContent.length > 0 && (
          <div className="flex flex-col gap-10 w-full max-w-[900px] mx-auto">
            {isModern && (
              <div className="flex flex-row w-full md:w-3/4 relative mb-10 gap-4">
                <div className="flex flex-row leading-none items-center justify-start gap-2">
                  <span className="text-xl md:text-2xl text-terniary-modern font-bold">
                    02.
                  </span>
                  <div className="transition-colors ease-in duration-300 hover:text-terniary-modern w-full text-3xl md:text-4xl font-bold">
                    {isEn ? "About Me" : "Qui suis-je"}
                  </div>
                </div>
                <div className="relative flex-1">
                  <div className="absolute top-[50%] translate-y-[-50%] right-0 w-full h-[1px] bg-text-modern opacity-50"></div>
                </div>
              </div>
            )}
            {!isModern && (
              <div className="flex flex-row relative mb-10 gap-4">
                <div className="flex flex-row items-center justify-center gap-2">
                  <div className="transition-colors ease-in duration-300 border-b-2 border-terniary-classic text-4xl font-bold">
                    {isEn ? "About Me" : "Qui suis-je"}
                  </div>
                  <FcAbout size={26} />
                </div>
              </div>
            )}
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-col gap-6 w-full md:w-2/3 md:pr-8 text-justify">
                <p>
                  {aboutContent.map(
                    (item, index) =>
                      index === 0 && (
                        <span
                          key={index}
                          className={
                            item.important
                              ? isModern
                                ? "text-terniary-modern"
                                : "text-terniary-classic"
                              : ""
                          }
                        >
                          {item.desContent}
                          {index < aboutContent.length - 1 && " "}
                        </span>
                      )
                  )}
                </p>
                <p>
                  {aboutContent.map(
                    (item, index) =>
                      index !== 0 && (
                        <span
                          key={index}
                          className={
                            item.important
                              ? isModern
                                ? "text-terniary-modern"
                                : "text-terniary-classic"
                              : ""
                          }
                        >
                          {item.desContent}
                          {index < aboutContent.length - 1 && " "}
                        </span>
                      )
                  )}
                </p>
              </div>
              {isModern && (
                <div className="flex items-center justify-center w-full md:w-1/3 py-8 md:py-0">
                  <motion.div
                    onHoverStart={() => setIsPhotoHighlighted(true)}
                    onHoverEnd={() => setIsPhotoHighlighted(false)}
                    className="flex w-70% aspect-square relative rounded-lg"
                  >
                    <motion.div
                      animate={{
                        x: isPhotoHighlighted ? 12 : 10,
                        y: isPhotoHighlighted ? -12 : -10,
                      }}
                      transition={{ delay: 0.3, duration: 0.3 }}
                      className="relative w-full h-full z-2"
                    >
                      <Image
                        src={about.photo}
                        width={512}
                        height={768}
                        alt="Oussama's Personal Photo"
                        className="relative w-full h-full object-cover rounded-lg"
                      />
                      <div
                        className={`absolute top-0 left-0 h-full w-full rounded-lg transition-colors duration-300 ease-in z-4 ${
                          isPhotoHighlighted
                            ? "bg-terniary-modern/0"
                            : "bg-terniary-modern/10"
                        }`}
                      ></div>
                    </motion.div>
                    <motion.div
                      animate={{
                        x: isPhotoHighlighted ? -4 : 0,
                        y: isPhotoHighlighted ? 4 : 0,
                      }}
                      transition={{ delay: 0.3, duration: 0.3 }}
                      className="absolute top-0 left-0 h-full w-full rounded-lg ease-in border-2 border-terniary-modern"
                    ></motion.div>
                  </motion.div>
                </div>
              )}
              {!isModern && (
                <div className="flex items-center justify-center w-full md:w-1/3 py-8 md:py-0">
                  <div className="flex w-50% md:w-70% aspect-square relative">
                    <div className="relative w-full h-full">
                      <Image
                        src={about.photo}
                        width={512}
                        height={768}
                        alt="Oussama's Personal Photo"
                        className="relative w-full h-full object-cover z-4 rounded-[44%_8%_53%_41%_/_72%_18%_64%_12%] overflow-hidden border-2 border-terniary-classic"
                      />
                      <div className="absolute top-0 left-0 mt-1 ml-1 h-full w-full bg-terniary-classic rounded-[44%_8%_53%_41%_/_72%_18%_64%_12%] overflow-hidden"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-6 w-full md:w-2/3 md:pr-8 text-justify md:text-base">
              <p>
                {isEn
                  ? about.keywordsDescription.en
                  : about.keywordsDescription.fr}
              </p>
              <div>
                <ul className="flex flex-row flex-wrap">
                  {about.keywords.map((keyword, index) => (
                    <li
                      key={index}
                      className="text-sm bg-secondary-modern px-2 py-2 w-1/2 flex flex-row items-center gap-2"
                    >
                      <div
                        className={`${
                          isModern
                            ? "text-terniary-modern"
                            : "text-terniary-classic"
                        }`}
                      >
                        {isModern ? (
                          <MdOutlineArrowRight />
                        ) : (
                          <PiDotBold size={25} />
                        )}
                      </div>
                      {keyword}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default About;
