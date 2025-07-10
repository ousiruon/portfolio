import { ProjectsStateProps } from "@/store/projectsSlice";
import { motion } from "motion/react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";

const ProjectsModern = ({
  projects,
  isEn,
}: {
  projects: ProjectsStateProps[];
  isEn: boolean;
}) => {
  return (
    <>
      {projects.length > 0 && (
        <div className="flex flex-col gap-10 w-full max-w-[900px] mx-auto">
          <div className="flex flex-row w-full md:w-3/4 relative mb-10 gap-4">
            <div className="flex flex-row leading-none items-center justify-start gap-2">
              <span className="text-xl md:text-2xl text-terniary-modern font-bold">
                01.
              </span>
              <div className="transition-colors ease-in duration-300 hover:text-terniary-modern w-full text-3xl md:text-4xl font-bold">
                {isEn ? "Projects" : "Projets"}
              </div>
            </div>
            <div className="relative flex-1">
              <div className="absolute top-[50%] translate-y-[-50%] right-0 w-full h-[1px] bg-text-modern opacity-50"></div>
            </div>
          </div>
          <div className="flex flex-col gap-10 md:gap-20 w-full">
            {[...projects].reverse().map((project, index) => (
              <div
                key={project.id}
                className={`flex ${
                  index % 2
                    ? "flex-col md:flex-row"
                    : "flex-col md:flex-row-reverse"
                } gap-4 md:gap-8 w-full`}
              >
                <motion.div className="w-full md:w-5/6 relative">
                  <Image
                    src={project.img}
                    alt={project.title}
                    width={500}
                    height={500}
                    className="w-full aspect-projects object-left rounded md:rounded-lg"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-terniary-modern rounded md:rounded-lg opacity-5 md:opacity-20  hover:opacity-5 transition-all ease-in duration-300"></div>
                </motion.div>
                <div className="w-full md:w-2/4 flex flex-col justify-center">
                  <div className="flex flex-col gap-2 md:gap-4">
                    <div
                      className={`flex w-full text-terniary-modern text-lg ${
                        index % 2
                          ? "justify-start md:justify-end"
                          : "justify-start"
                      }`}
                    >
                      {project.title}
                    </div>
                    <div className="relative w-full">
                      <div
                        className={`relative z-10 ${
                          index % 2 ? "mx-0 md:mx-[-30%]" : "mx-0"
                        } md:w-[130%] bg-bg2-modern rounded p-4 text-sm text-justify`}
                      >
                        {isEn
                          ? project.desc.en.find((item) => item.introduction)
                              ?.introduction
                          : project.desc.fr.find((item) => item.introduction)
                              ?.introduction}
                      </div>
                    </div>
                    <div className="relative w-full flex flex-col gap-2">
                      <div
                        className={`flex w-full text-xs gap-2 ${
                          index % 2
                            ? "justify-start md:justify-end"
                            : "justify-start"
                        }`}
                      >
                        {project.keywords &&
                          project.keywords.length > 0 &&
                          project.keywords.map((keyword) => (
                            <span
                              className="text-terniary-modern/60 hover:text-terniary-modern transition-colors ease-in duration-300"
                              key={keyword}
                            >
                              {keyword}
                            </span>
                          ))}
                      </div>
                      <div
                        className={`flex flex-row w-full text-xl mt-2 md:mt-4 gap-4 ${
                          index % 2
                            ? "justify-start md:justify-end"
                            : "justify-start"
                        }`}
                      >
                        <a
                          className="hover:text-terniary-modern transition-colors duration-300 ease-in"
                          target="_blank"
                          href={project.link}
                        >
                          <FiExternalLink />
                        </a>
                        <a
                          className="hover:text-terniary-modern transition-colors duration-300 ease-in"
                          target="_blank"
                          href={project.repository}
                        >
                          <FaGithub />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
export default ProjectsModern;
