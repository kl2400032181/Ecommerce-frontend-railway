import axios from "axios";

const API = axios.create({
  baseURL: "ecommerce-backend-pushed2-production.up.railway.app"
});

export default API;
