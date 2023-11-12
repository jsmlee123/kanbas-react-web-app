import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;
const MODULES_URL = "https://kanbas-node-server-app-j2bj.onrender.com/api/modules";
const COURSES_URL = "https://kanbas-node-server-app-j2bj.onrender.com/api/courses";
export const updModule = async (module) => {
  const response = await axios.
    put(`${MODULES_URL}/${module._id}`, module);
  return response.data;
};
export const delModule = async (moduleId) => {
  const response = await axios
    .delete(`${MODULES_URL}/${moduleId}`);
  return response.data;
};
export const findModulesForCourse = async (courseId) => {
  const response = await axios
    .get(`${COURSES_URL}/${courseId}/modules`);
  return response.data;
};
export const createModule = async (courseId, module) => {
    const response = await axios.post(
        `${COURSES_URL}/${courseId}/modules`,
        module
    );
    return response.data;
};
