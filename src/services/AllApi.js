import { baseUrl } from "./baseUrl";
import axios from "axios";

export const getAllStudents = async() => {
    return await axios.get(`${baseUrl}/students`)
};
export const updateCurrentStudent = async(studentId,updatedData) => {
    return await axios.put(`${baseUrl}/students/${studentId}`,updatedData)
};

