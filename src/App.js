import Home from "./pages/home/Home"
import LayOut from "./components/layout/Layout";
import Course from "./pages/Events";
import InnerEvent from "./pages/InnerPages/InnerEvent";
import ScrollToTop from "./components/ui/ScrollToTop";
import InnerProjects from "./pages/InnerPages/InnerProjects";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import Articles from "./pages/Articles";
import BlogPosts from "./pages/BlogPosts";

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
