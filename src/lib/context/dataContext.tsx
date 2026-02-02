import { createContext } from "react";
import aboutData from "../../assets/aboutData.json";
import projectData from "../../assets/projectData.json";

export const AboutContext = createContext(aboutData);

export const ProjectContext = createContext(projectData);
