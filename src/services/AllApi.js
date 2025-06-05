import { baseUrl } from "./baseUrl";
import axios from "axios";

export const getAllusers = async() => {
    return await axios.get(`${baseUrl}/users`)
};
export const updateUserData = async(userId,updatedPassword) => {
    return await axios.put(`${baseUrl}/users/${userId}`,updatedPassword)
};

export const getAllStudents = async() => {
    return await axios.get(`${baseUrl}/students`)
};
export const AddNewStudent = async(addedData) => {
    return await axios.post(`${baseUrl}/students`,addedData)
};
export const updateCurrentStudent = async(studentId,updatedData) => {
    return await axios.put(`${baseUrl}/students/${studentId}`,updatedData)
};
export const deleteStudent = async(studentId) => {
    return await axios.delete(`${baseUrl}/students/${studentId}`)
};

export const getAllCourses = async() => {
    return await axios.get(`${baseUrl}/courses`)
};
export const AddNewCourse = async(addedData) => {
    return await axios.post(`${baseUrl}/courses`,addedData)
};
export const updateCurrentCourse = async(courseId,updatedData) => {
    return await axios.put(`${baseUrl}/courses/${courseId}`,updatedData)
};
export const deleteCourse = async(courseId) => {
    return await axios.delete(`${baseUrl}/courses/${courseId}`)
};


export const getAllGrades = async() => {
    return await axios.get(`${baseUrl}/grades`)
};
export const updateCurrentGrade = async(studentId,updatedData) => {
    return await axios.put(`${baseUrl}/grades/${studentId}`,updatedData)
};
