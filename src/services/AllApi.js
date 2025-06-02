import { baseUrl } from "./baseUrl";
import axios from "axios";

export const getAllUser = async() => {
    return await axios.get(`${baseUrl}/students`)
};
