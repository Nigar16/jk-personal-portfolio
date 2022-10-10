import Home from "../pages/home/Home";
import Navbar from "../components/layout/navbar/Navbar";
import Footer from "../components/layout/Footer";
import LayOut from "../components/layout/Layout";
import Course from "../pages/courses/Courses";
import CourseItem from "../pages/courses/Course-Item";
import InlineCourse from "../pages/courses/InlineCourse";
import ScrollToTop from "../components/ScrollToTop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <LayOut>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Course />} />
          <Route path="/inline-courses/:courseid" element={<InlineCourse />} />
          {/*<Route path="/blog-posts/:courseid" element={<Blog />} />*/}

        </Routes>
      </LayOut>
  </BrowserRouter>
  );
}

export default App;
