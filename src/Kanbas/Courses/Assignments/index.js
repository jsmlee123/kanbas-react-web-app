import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { RiMore2Fill } from "react-icons/ri";
import { AiOutlinePlus,AiFillCheckCircle } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <div class="d-flex flex-column wd-course-list ">
        <div>
            <div class="float-start">
                <input type="email"
                    class="form-control w-100"
                    id="input1"
                    placeholder="Search for Assignments"/>
            </div>
            <div class="float-end">
                <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fa fa-plus" aria-hidden="true"></i>
                    Group
                </button>
                <button type="button" class="btn btn-danger wd-button-medium">
                    <i class="fa fa-plus" aria-hidden="true"></i>
                    Assignment
                </button>
                <button type="button" class="btn btn-outline-secondary wd-button-medium">
                    <RiMore2Fill/>
                </button>
            </div>
        </div>
        <hr/>
        <div>
            <ul class="list-group rounded-0 mt-4">
                <li class="list-group-item list-group-item-secondary">
                    <div class="float-start pe-2 wd-list">
                      <RiMore2Fill/>
                      <RiMore2Fill/>
                    </div>
                    Assignments
                    <div class="float-end">
                        <div class="d-inline border border-secondary rounded-pill me-3">
                            <span>40% of total</span>
                        </div>
                        <AiOutlinePlus className="me-3"/>
                        <RiMore2Fill/>
                    </div>
                </li>
                {courseAssignments.map((assignment) => (
                   <div class="wd-list-border">
                    <Link
                      key={assignment._id}
                      to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                      className="list-group-item">

                        <div class="float-start">
                          <RiMore2Fill/>
                          <RiMore2Fill className="me-3"/>
                          <FaEdit className="wd-green me-1"/>
                        </div>
                        
                        <div class="float-end">
                            <AiFillCheckCircle className="wd-green me-3"/>
                            <RiMore2Fill/>
                            
                        </div>
                        <div class="wd-assignments-body">
                            <h6>{assignment._id + " - " + assignment.title}</h6>
                            <p> Week 0 - SETUP - RANDOM ABRIDGED FILLER TEXT HERE!!!<br/>
                                Due Sep 18, 2022 at 11:59 | 100 pts</p>
                        </div>
        
                    </Link>
                  </div>
                ))}

                <div class="wd-list-border">
                    
                  
                </div>
            </ul>
        </div>
    </div>
  );
}
export default Assignments;
