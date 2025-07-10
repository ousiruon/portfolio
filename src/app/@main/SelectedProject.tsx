import { ProjectsStateProps } from "@/store/projectsSlice";
import { motion } from "motion/react";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
const SelectedProject = ({
  selectedProject,
  isEn,
  setSelectedProjectID,
}: {
  selectedProject: ProjectsStateProps;
  isEn: boolean;
  setSelectedProjectID: (id: string | null) => void;
}) => {
  return (
    <>
      <div className="fixed w-full h-full top-0 left-0 backdrop-blur-xs blur-xs bg-white/3 z-20"></div>
      <div className="fixed h-[calc(100dvh-10%)] max-h-[calc(100dvh-10%)] w-[95%] max-w-[1200px] top-[50%] left-[50%] translate-[-50%] bg-bg2-classic z-40 rounded-lg overflow-auto flex flex-col gap-12 px-8 py-4 selectedProjects">
        <div className="flex w-full justify-end text-xl ">
          <motion.div
            className="cursor-pointer text-bg-classic bg-terniary-classic p-2 rounded-sm  transition-colors ease-in duration-300"
            onClick={() => setSelectedProjectID(null)}
          >
            <motion.div whileHover={{ rotate: 90 }}>
              <IoMdClose />
            </motion.div>
          </motion.div>
        </div>
        <div className="flex flex-col flex-1 w-full gap-8">
          <div className="flex w-full justify-center text-2xl font-bold">
            {selectedProject.title}
          </div>
          <div className="bg-bg-classic flex-1 mx-20 rounded-lg p-8 flex flex-col gap-8">
            <div className="flex flex-row gap-4">
              <a
                target="_blank"
                className="px-4 py-2 rounded bg-terniary-classic/80 hover:bg-terniary-classic transition-colors duration-300 ease-in text-bg-classic font-semibold"
                href={selectedProject.link}
              >
                Live
              </a>
              <a
                target="_blank"
                className="px-4 py-2 rounded bg-terniary-classic/80 hover:bg-terniary-classic transition-colors duration-300 ease-in text-bg-classic font-semibold"
                href={selectedProject.repository}
              >
                Repo
              </a>
            </div>
            <div className="flex w-full">
              <Image
                src={selectedProject.img}
                alt={selectedProject.title}
                width={700}
                height={700}
                className="w-full aspect-projects object-left"
              />
            </div>
            <div className="flex flex-col gap-4">
              {isEn
                ? selectedProject.desc.en.map((line, index) => (
                    <div className="flex flex-col gap-4" key={index}>
                      {line.introduction && (
                        <p className="text-xl font-semibold">
                          {line.introduction}
                        </p>
                      )}
                      {line.description && (
                        <p className="text-base">{line.description}</p>
                      )}
                      {line.title && (
                        <p className="text-lg text-terniary-classic font-semibold">
                          {line.title}
                        </p>
                      )}
                    </div>
                  ))
                : selectedProject.desc.fr.map((line, index) => (
                    <div className="flex flex-col gap-4" key={index}>
                      {line.introduction && (
                        <p className="text-xl font-semibold">
                          {line.introduction}
                        </p>
                      )}
                      {line.description && (
                        <p className="text-base">{line.description}</p>
                      )}
                      {line.title && (
                        <p className="text-lg text-terniary-classic font-semibold">
                          {line.title}
                        </p>
                      )}
                    </div>
                  ))}
            </div>
            <div className="flex flex-row gap-2 flex-wrap">
              {selectedProject.keywords?.map((keyword) => (
                <div
                  key={keyword}
                  className="px-3 py-1 bg-terniary-classic text-bg-classic rounded-full text-sm font-semibold"
                >
                  {keyword}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SelectedProject;
