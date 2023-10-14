import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import {AiOutlineMore} from "react-icons/ai"
import "./index.css"


function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <div class="d-flex flex-column wd-course-list">
      <div>
          <div class="float-end">
              <button type="button" class="btn btn-outline-secondary wd-button-medium">Collapse All</button>
              <button type="button" class="btn btn-outline-secondary wd-button-medium">View Progress</button>
              <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Publish All
              </button>
              <button type="button" class="btn btn-danger wd-button-medium">
                  <i class="fa fa-plus" aria-hidden="true"></i>
                  Save Profile
              </button>
              <button type="button" class="btn btn-outline-secondary wd-button-medium">
                  <AiOutlineMore/>
              </button>
          </div>
      </div>
      <hr/>
      <ul class="list-group mt-4">
        <ul class="list-group wd-course-list">
          {
          modules
            .filter((module) => module.course === courseId)
            .map((module, index) => (
              <div className="mb-3">
                <li key={index} class="list-group-item list-group-item-secondary">
                  <div class="float-start pe-2">
                      <i class="fa fa-ellipsis-v wd-gray fa-xs" aria-hidden="true"></i>
                      <i class="fa fa-ellipsis-v wd-gray fa-xs" aria-hidden="true"></i>
                  </div>
                  {module.name}
                  
                  <div class="float-end">
                      <i class="fa fa-plus" aria-hidden="true"></i>
                      <i class="fa fa-ellipsis-v wd-gray" aria-hidden="true"></i>
                  </div>
                </li>
                <div class="wd-list-border">
                  <li class="list-group-item">
                    <div class="float-start pe-2">
                        <i class="fa fa-ellipsis-v wd-gray fa-xs" aria-hidden="true"></i>
                        <i class="fa fa-ellipsis-v wd-gray fa-xs" aria-hidden="true"></i>
                    </div>
                    {module.description}
                    <div class="float-end">
                        <i class="fa fa-check-circle wd-green" aria-hidden="true"></i>
                        <i class="fa fa-ellipsis-v wd-gray" aria-hidden="true"></i>
                    </div>
                  </li>
              </div>
            </div>
          ))
          }
    
          </ul>
        </ul>
      </div>

    
  );
}
export default ModuleList;
