import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import {AiOutlineMore} from "react-icons/ai"
import "./index.css"
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";


function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
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
        
        <div className="d-flex flex-column ">
          <div className="d-flex flex-column wd-add-modules">
            <div className="d-flex flex-row">
              <button 
                className="btn btn-success w-50"
                onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
                Add
              </button>
              <button 
                className="btn btn-success w-50 ms-1"
                onClick={() => dispatch(updateModule(module))}>
                  Update
              </button>
            </div>
            

            <input 
              className="form-control w-100"
              value={module.name}
              onChange={(e) => 
                dispatch(setModule({ ...module, name: e.target.value }))}
            />
            <textarea 
              className="form-control w-100"
              value={module.description}
              onChange={(e) => 
                dispatch(setModule({ ...module, description: e.target.value }))}
            />
            
          </div>
        </div>
        
        <ul class="list-group wd-course-list">
          {modules
            .filter((module) => module.course === courseId)
            .map((module, index) => (
              <div className="mb-3">
                <li key={index} class="list-group-item list-group-item-secondary pb-3">
                  {module.name}
                  <div class="float-end pe-2">
                    <button
                      className="btn btn-success btn-sm ps"
                      onClick={() => dispatch(setModule(module))}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm ps ms-2"
                      onClick={() => dispatch(deleteModule(module._id))}
                    >
                      Delete
                    </button>
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
