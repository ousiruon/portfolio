import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import ProjectsModern from "./ProjectsModern";
import ProjectsRetro from "./ProjectsRetro";

const Projects = () => {
  const { isEn, isModern } = useSelector((state: RootState) => state.menu);
  const projects = useSelector((state: RootState) => state.projects);
  return (
    <>
      <div
        id="projects"
        className="min-h-dvh flex flex-col items-center justify-start py-10 md:py-20 px-4 w-full"
      >
        {isModern ? (
          <ProjectsModern projects={projects} isEn={isEn} />
        ) : (
          <ProjectsRetro projects={projects} isEn={isEn} />
        )}
      </div>
    </>
  );
};
export default Projects;
