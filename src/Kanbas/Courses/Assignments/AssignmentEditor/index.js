import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import {RiMore2Fill} from "react-icons/ri";
import {AiFillCheckCircle} from "react-icons/ai";

function AssignmentEditor() {
  const { assignmentId, courseId } = useParams();
  const params = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId
  );

  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div class="d-flex flex-column wd-course-list ">
      <div class="me-3">
          <div class="float-end">
              <div class="d-inline">
                  <AiFillCheckCircle className="wd-green me-3"/>
                  <span class="wd-green">Published</span>           
              </div>
              <button type="button" class="btn btn-outline-secondary wd-button-medium ms-3">
                <RiMore2Fill/>
              </button>
          </div>
      </div>
      <hr/>
      <div class="col">
          <div class="row">
              <span>Assignment Name</span>
              <div class="mt-2 pe-5">
                  <input type="name"
                      class="form-control"
                      id="input1"
                      placeholder={assignment._id + " - " + assignment.title}/>
              </div>
              <div class="mt-2 pe-5">
                  <textarea 
                      class="form-control" 
                      id="assignmentdescription1" 
                      rows="5"
                      placeholder="This assignment describes how to install the development environment for creating and working with Web applications we will be developing this semester.  We will add new content every week, pushing the code to a GitHub source repository,  and then deploying the content to a remote server hosted on Netlify."
                  ></textarea>
              </div>
              
          </div>
          <div class="row justify-content-center">
              <div class="row justify-content-center mt-3  align-items-start">
                  <label for="points1" class="col-sm-2 form-label">Points</label>
                  <input type="password" class="form-control w-50" id="points1" placeholder="100"/>

              </div>
              <div class="row justify-content-center mt-3 ms-n5 align-items-start">
                  <label for="group1" class="col-sm-2 form-label">Assignment Group</label>
                  <select class="form-select w-50" id="group1">
                      <option selected>ASSIGNMENTS</option>
                      </select>
              </div>
              <div class="row justify-content-center mt-3 ms-n5 align-items-start">
                  <label for="grade1" class="col-sm-2 form-label">Display Grade As</label>
                  <select class="form-select w-50" id="grade1">
                      <option selected>Percentage</option>
                      </select>
              </div>
              <div class="row  justify-content-center mt-3 ms-n5  align-items-start ">
                  <div class="form-check w-50 ms-5 ps-5">
                      <input class="form-check-input ms-5 "
                              type="checkbox" id="r6"/>
                          <label class=" form-check-label  ms-3" for="r6">
                          Do not count this assignment towards the final grade</label>
                  </div>
              </div>
              <div class="row justify-content-center mt-3 ms-n5 align-items-start">
                  <label for="submission1" class="col-sm-2 form-label">Submission Type</label>
                  <div class="form-group w-50 border border-secondary-subtle pt-3 pb-3" id="submission1">
                      <select class="form-select w-75" id="online1">
                          <option selected>Online</option>
                      </select>
                      <h6 class="mt-4 ms-1">Online Entry Options</h6>
                      <div class="form-check w-25 mt-3">
                          <label class="form-check-label" for="textentry">
                              Text Entry
                          </label>
                          <input class="form-check-input"
                                  type="checkbox" id="textentry" checked/>
                      </div>
                      <div class="form-check w-25 mt-3">
                          <label class="form-check-label" for="websiteurl">
                              Website URL
                          </label>
                          <input class="form-check-input"
                                  type="checkbox" id="websiteurl" checked/>
                      </div>
                      <div class="form-check w-25 mt-3">
                          <label class="form-check-label" for="mediarecordings">
                              Media Recordings
                          </label>
                          <input class="form-check-input"
                                  type="checkbox" id="mediarecordings" checked/>
                      </div>
                      <div class="form-check w-25 mt-3">
                          <label class="form-check-label" for="studentannotation">
                              Student Annotation
                          </label>
                          <input class="form-check-input"
                                  type="checkbox" id="studentannotation"/>
                      </div>
                      <div class="form-check w-25 mt-3">
                          <label class="form-check-label" for="fileuploads">
                              File Uploads
                          </label>
                          <input class="form-check-input"
                                  type="checkbox" id="fileuploads"/>
                      </div>
                  </div>
              </div>

              <div class="row justify-content-center mt-3 ms-n5 align-items-start">
                  <label for="submission1" class="col-sm-2 form-label">Submission Type</label>
                  <div class="form-group w-50 border border-secondary-subtle pt-3" id="submission1">
                      <label for="assignto" class="form-label">
                          <h6>Assign To</h6>
                      </label>
                      <div id="assignto" class="form-control border border-secondary-subtle">
                          <button type="button" class="btn btn-outline-secondary btn-sm ms-3">
                              Everyone x
                          </button>
                      </div>

                      <label for="due" class="form-label mt-3">
                          <h6>Due</h6>
                      </label>
                      <input id="due" type="date" class="form-control" value="2023-09-18"/>
                          
                      <div class="row">
                          <div class="col">
                              <label for="due" class="form-label mt-3">
                                  <h6>Available From</h6>
                              </label>
                              <input id="due" type="date" class="form-control" value="2023-09-06"/>
                          </div>
                          <div class="col">
                              <label for="due" class="form-label mt-3">
                                  <h6>Until</h6>
                              </label>
                              <input id="due" type="date" class="form-control" />
                          </div>
                      </div>

                      <button type="button" class="btn btn-secondary btn-block w-100 mt-5">
                          <i class="fa fa-plus me-3" aria-hidden="true"></i>
                          Add
                      </button>
                  </div> 
              </div>    
          </div>
      </div>
      <div class="row mt-5 ps-5 pe-5">
          <div class="col">
              <div class="form-check">
                  <label class="form-check-label" for="notify">
                      Notify users that this content has changed
                  </label>
                  <input class="form-check-input"
                          type="checkbox" id="notify"/>
              </div>
              <div class="float-end">                  
                  <button type="button" onClick={handleSave} class="btn btn-outline-secondary wd-button-medium">Cancel</button>
                  <button type="button" onClick={handleSave} class="btn btn-danger wd-button-medium">Save</button>
              </div>
          </div>
      </div>
  </div>
  );
}

export default AssignmentEditor;
