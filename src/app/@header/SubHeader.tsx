import { motion } from "motion/react";
import { FaChevronDown } from "react-icons/fa6";
import Image from "next/image";

const SubHeaderModern = ({
  isModern,
  hero,
  cartoonPhoto,
}: {
  isModern: boolean;
  hero: {
    title?: string;
    subtitle?: string;
    description?: string;
    important: boolean;
  }[];
  cartoonPhoto: string;
}) => {
  return (
    <>
      <div className="relative flex-1 flex flex-col md:flex-row justify-start items-center gap-10 w-full max-w-[900px] mx-auto px-4 py-6 md:py-0">
        <div
          className={`flex flex-col w-full md:w-3/4 justify-center items-start gap-6 md:gap-12 ${
            isModern
              ? "bg-bg-modern text-text-modern"
              : "bg-bg-classic text-text-classic"
          } `}
        >
          <h1
            className={`text-xl ${
              isModern ? "text-terniary-modern" : "text-terniary-classic"
            } `}
          >
            {hero.find((item) => item.title)?.title}
          </h1>
          <p className="text-4xl md:text-6xl font-bold flex flex-col gap-6">
            {hero
              .filter((item) => item.subtitle)
              .map((item, index) => (
                <span
                  key={index}
                  className={`${index === 1 ? "opacity-70" : ""}`}
                >
                  {item.subtitle}
                  {index < hero.length - 1 && " "}
                </span>
              ))}
          </p>
          <p className="text-lg w-full md:w-3/4 text-justify">
            {hero
              .filter((item) => item.description)
              .map((item, index) => (
                <span
                  key={index}
                  className={
                    item.important
                      ? `${
                          isModern
                            ? "text-terniary-modern"
                            : "text-terniary-classic"
                        }`
                      : ""
                  }
                >
                  {item.description}
                  {index < hero.length - 1 && " "}
                </span>
              ))}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-2/4 md:w-1/4">
          <div className="w-[80%] aspect-retro relative overflow-hidden rounded-[55%_45%_79%_21%_/_74%_26%_74%_26%]">
            <div
              className={`absolute top-0 left-0 w-full h-full z-1 rounded-[55%_45%_79%_21%_/_74%_26%_74%_26%] overflow-hidden ${
                isModern ? "bg-terniary-modern" : "bg-terniary-classic"
              }`}
            ></div>
            <Image
              src={cartoonPhoto}
              width={512}
              height={768}
              alt="Cartoon Photo"
              className="absolute -bottom-11 md:-bottom-9 left-0 w-full h-full object-cover rounded-lg z-2 overflow-hidden"
            />
          </div>
        </div>
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute bottom-0 left-[50%] translate-x-[-50%] hidden md:flex justify-center items-center ${
            isModern ? "text-terniary-modern" : "text-terniary-classic"
          }`}
        >
          <FaChevronDown size={26} />
        </motion.div>
      </div>
    </>
  );
};
export default SubHeaderModern;
