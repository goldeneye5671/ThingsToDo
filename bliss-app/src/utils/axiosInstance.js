import axios from "axios";
import process from "process";

const env = process.env.NODE_ENV || "development";

console.log("env")

//change this when you deploy you dumb ass
export default axios.create({
    withCredentials: true,
    baseURL: env === "production" ? "/" : "http://127.0.0.1:5000"
})