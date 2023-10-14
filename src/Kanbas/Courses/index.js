import db from "../../Kanbas/Database";
import { useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import {AiOutlineMenu} from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import "./index.css";

function Courses() {
  const { courseId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);

  const { pathname } = useLocation();
  const paths = pathname.split("/");
  const top = paths.pop();
  const roots = ["Home", "Modules", "Assignments", "Grades"]
  return (
    <div>
      <div class="d-flex ps-3 mt-3">
          <AiOutlineMenu className="fs-1 wd-red" size={25}/>
          <nav class="ms-3">
              <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                      <Link
                      key={courseId}
                      to={`/Kanbas/Courses/${courseId}`}
                      className="wd-red wd-non-decorated">
                        {course.number}.12631.202410
                      </Link>
                  </li>
                  {roots.includes(top) ? 
                    <li class="breadcrumb-item active">
                      {top}
                    </li> : 
                    <li class="breadcrumb-item">
                      <Link
                      key={courseId}
                      to={`/Kanbas/Courses/${courseId}/Assignments`}
                      className="wd-red wd-non-decorated">
                        {paths.pop()}
                      </Link>
                    </li>
                  }

                  {roots.includes(top) ? null : 
                    <li class="breadcrumb-item active">
                      {top}
                    </li>
                  }
                  
                  
              </ol>
          </nav>
      </div>
      <hr className="wd-hr"/>
      
      <CourseNavigation />

      <div>
        <div
          className="overflow-y-scroll position-absolute bottom-0 end-0"
          style={{
            left: "320px",
            top: "80px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;
