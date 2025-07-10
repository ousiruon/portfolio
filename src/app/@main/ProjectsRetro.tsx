"use client";
import { ProjectsStateProps } from "@/store/projectsSlice";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoReload } from "react-icons/io5";
import SelectedProject from "./SelectedProject";
import { FcViewDetails } from "react-icons/fc";

const ProjectsRetro = ({
  projects,
  isEn,
}: {
  projects: ProjectsStateProps[];
  isEn: boolean;
}) => {
  const [selectedProjectID, setSelectedProjectID] = useState<string | null>(
    null
  );
  const [selectedProject, setSelectedProject] =
    useState<ProjectsStateProps | null>(null);
  useEffect(() => {
    if (selectedProjectID) {
      const project = projects.find((p) => p.id === selectedProjectID);
      setSelectedProject(project || null);
    } else {
      setSelectedProject(null);
    }
  }, [selectedProjectID, projects]);
  return (
    <>
      {projects.length > 0 && (
        <div
          className={`flex flex-col gap-10 w-full max-w-[1200px] mx-auto md:px-8 ${
            selectedProject !== null && "overflow-hidden "
          }`}
        >
          <div className="flex flex-row relative mb-10 gap-4">
            <div className="flex flex-col items-start justify-start gap-4">
              <div className="flex flex-row items-center justify-center gap-2">
                <div className="transition-colors ease-in duration-300 border-b-2 border-terniary-classic text-3xl md:text-4xl font-bold">
                  {isEn ? "Projects" : "Projets"}
                </div>
                <FcViewDetails size={26} />
              </div>
              <div className="text-sm">
                {isEn
                  ? "Click on any project to learn more."
                  : "Cliquez sur un projet pour en savoir plus."}
              </div>
            </div>
          </div>
          <div className="flex relative">
            <div className="absolute w-full h-full top-0 left-0 rounded-[60%_40%_80%_20%_/_17%_38%_62%_83%] bg-terniary-classic"></div>
            <div className="flex flex-col md:flex-row w-[98%] md:w-[96%] gap-4 md:gap-0 mx-auto flex-wrap relative z-2">
              {[...projects].reverse().map((project) => (
                <div
                  key={project.id}
                  className="w-full md:w-1/2 p-0 md:p-4 flex flex-col relative"
                >
                  <div className="border-2 border-text-classic rounded-t overflow-hidden flex flex-col">
                    <div className="flex flex-row items-center p-2 gap-1 bg-terniary-classic">
                      <div className="w-3 h-3 rounded-full border-text-classic border-2"></div>
                      <div className="w-3 h-3 rounded-full border-text-classic border-2"></div>
                      <div className="w-3 h-3 rounded-full border-text-classic border-2"></div>
                    </div>
                    <div className="flex flex-row border-t-2 border-text-classic items-center justify-between bg-bg-classic">
                      <div className="flex flex-row gap-1 p-2 text-lg font-bold">
                        <IoIosArrowBack />
                        <IoIosArrowForward />
                        <IoReload />
                      </div>
                      <div className="flex-1 border-1 m-1 rounded px-2 font-bold">
                        {project.title}
                      </div>
                      <div className="flex flex-row gap-1 p-2 text-lg font-bold">
                        <CiSearch />
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() => setSelectedProjectID(project.id)}
                    className="border-b-2 border-l-2 border-r-2 border-text-classic rounded-b-lg overflow-hidden  relative cursor-pointer"
                  >
                    <Image
                      src={project.img}
                      alt={project.title}
                      width={500}
                      height={500}
                      className="w-full aspect-projects object-left rounded-b z-2t"
                    />
                    <div className="absolute w-full h-full top-0 left-0 bg-bg-classic/5 md:bg-bg-classic/15 hover:bg-bg-classic/0 transition-colors ease-in duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {selectedProject !== null && (
        <SelectedProject
          selectedProject={selectedProject}
          isEn={isEn}
          setSelectedProjectID={setSelectedProjectID}
        />
      )}
    </>
  );
};
export default ProjectsRetro;
