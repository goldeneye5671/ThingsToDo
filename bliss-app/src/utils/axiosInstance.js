import axios from "axios";
import process from "process";

export default axios.create({
    withCredentials: true,
    baseURL: process.env.NODE_ENV === "production" ? "/" :"http://127.0.0.1:5000"
})