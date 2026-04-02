import axios from "axios";

const API = axios.create({
  baseURL: "https://ecommerce-backend-pushed2-production.up.railway.app"
});

export default API;
