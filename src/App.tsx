import "./App.css";
import BookCover from "./components/BookCover/BookCover";
import aboutData from "./assets/aboutData.json";
import projectData from "./assets/projectData.json";
import { ProjectContext, AboutContext } from "./lib/context/dataContext";

function App() {
  return (
    <ProjectContext.Provider value={projectData}>
      <AboutContext.Provider value={aboutData}>
        <div className="container">
          <BookCover />
        </div>
      </AboutContext.Provider>
    </ProjectContext.Provider>
  );
}

export default App;
