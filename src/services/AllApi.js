import { baseUrl } from "./baseUrl";
import axios from "axios";

export const getAllStudents = async() => {
    return await axios.get(`${baseUrl}/students`)
};
export const getCurrentStudent = async(studentId) => {
    return await axios.get(`${baseUrl}/students/${studentId}`)
};

