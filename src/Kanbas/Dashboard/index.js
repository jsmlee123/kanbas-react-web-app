import { React, useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }  
) {


  return (
    <div>
      <div className="wd-profile-header">
          <span className="wd-dashboard-header-text">Dashboard</span>
      </div>
      
      <hr className="wd-hr"/>
      <div className="d-flex flex-column">
          <h4 className="wd-published-courses-header">Published Courses({courses.length})</h4>
      </div>
      <div className="d-flex flex-row flex-wrap wd-add-course-body">
        <input value={course.name} className="form-control w-25"
          onChange={(e) => setCourse({ ...course, name: e.target.value }) }/>
        <input value={course.number} className="form-control w-25" 
          onChange={(e) => setCourse({ ...course, number: e.target.value }) }/>
        <input value={course.startDate} className="form-control w-25" type="date" 
          onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
        <input value={course.endDate} className="form-control w-25" type="date"
          onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
        <button className="btn btn-outline-secondary w-25" onClick={addNewCourse} >
              Add Course
        </button>
        <button className="btn btn-outline-secondary w-25" onClick={updateCourse} >
          Update
        </button>
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
                        <button
                            className="btn btn-outline-secondary btn-sm"
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(course);
                            }}>
                            Edit
                          </button>

                          <button
                          className="btn btn-outline-secondary btn-sm ms-1"
                          onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                          }}>
                            Delete
                        </button><br/>
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
