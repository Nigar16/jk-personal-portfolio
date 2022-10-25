import Home from "./pages/Home";
import Navbar from "./components/layout/navbar/Navbar";
import Footer from "./components/layout/Footer";
import LayOut from "./components/layout/Layout";
import Course from "./pages/Events";
import CourseItem from "./components/items/Event-Item";
import InnerEvent from "./pages/InnerPages/InnerEvent";
import ScrollToTop from "./components/ui/ScrollToTop";
import ProjectItem from "./components/items/Project-item";
import InnerProjects from "./pages/InnerPages/InnerProjects";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import Articles from "./pages/Articles";
import BlogPosts from "./pages/BlogPosts";
import InlineArticle from "./pages/InnerPages/InnerArticle";
import ArticleItem from "./components/items/Article-item";

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
          <Route path="/inline-courses/:courseid" element={<InnerEvent />} />
          <Route
            path="/inline-project/:projectid"
            element={<InnerProjects />}
          />
          <Route path="/articles" element={<Articles />} />
          <Route path="/projects" element={<Projects />} />

          <Route path="/blogs" element={<BlogPosts />} />


        </Routes>
      </LayOut>
    </BrowserRouter>
    
  );
}

export default App;
