import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

function CourseNavigation() {
  const links = [
    "Home", 
    "Modules", 
    "Assignments", 
    "Grades",
    "People",
    "Panopto Video",
    "Discussions",
    "Announcements",
    "Pages",
    "Files",
    "Rubrics",
    "Outcomes",
    "Collaborations",
    "Syllabus",
    "Progress Reports",
    "Settings"
  ];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  
  return (
    <div className="wd-account-sidebar ps-3">
      <span className="wd-text-small wd-black">202410_1 Fall 2023 semest...</span>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/Courses/${courseId}/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}

export default CourseNavigation;
