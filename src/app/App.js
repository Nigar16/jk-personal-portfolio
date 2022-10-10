import Home from "../pages/home/Home";
import Navbar from "../components/layout/navbar/Navbar";
import Footer from "../components/layout/Footer";
import LayOut from "../components/layout/Layout";
import Course from "../pages/courses/Courses";
import CourseItem from "../pages/courses/Course-Item";
import InlineCourse from "../pages/courses/InlineCourse";
import ScrollToTop from "../components/ScrollToTop";
import ProjectItem from "../pages/projects/Project-item";
import InlineProjects from "../pages/projects/InlineProjects";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectsPage from "../pages/projects/ProjectsPage";
import ArticlePage from "../pages/articles/ArticlePage";
const projectTypes = [
  { id: 1, name: "All", isActive: true },
  { id: 2, name: "Ecommerce", isActive: false },
  { id: 3, name: "Portfolio", isActive: false },
  { id: 4, name: "Blog", isActive: false },
];
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <LayOut>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Course />} />
          <Route path="/inline-courses/:courseid" element={<InlineCourse />} />

          <Route
            path="/inline-project/:projectid"
            element={<InlineProjects />}
          />
          <Route path="/articles" element={<ArticlePage />} />
          <Route path="/projects" element={<ProjectsPage />} />

          {/*<Route path="/blog-posts/:courseid" element={<Blog />} />*/}


        </Routes>
      </LayOut>
    </BrowserRouter>
  );
}

export default App;
