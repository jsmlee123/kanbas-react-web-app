import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
function Dashboard() {
  const courses = db.courses;
  return (
    <div>
      <div className="wd-profile-header">
          <span className="wd-dashboard-header-text">Dashboard</span>
      </div>
      <hr className="wd-hr"/>
      <div className="d-flex flex-column">
          <h4 className="wd-published-courses-header">Published Courses({courses.length})</h4>
      </div>
      
      <div class="d-flex flex-row flex-wrap ">
        <div class="row row-cols-4 wd-card-container">
        {courses.map((course) => (
          <div class="col">
            <Link
              key={course._id}
              to={`/Kanbas/Courses/${course._id}`}
            >
                <div class="card">
                    <img src="../images/blue.png"
                            class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h6 class="card-title wd-blue">
                          {course.number + " " + course.name}
                        </h6>
                        <span class="card-text wd-gray">{course.number}.12631.202410</span><br/>
                        <span class="wd-text-small wd-gray">202410_1 Fall 2023 Semester Full Term</span>
                    </div>
                </div>
            </Link>
          </div>
        ))}
        </div>
      </div>

    
    </div>
  );
}
export default Dashboard;
