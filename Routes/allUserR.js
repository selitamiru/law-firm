import express from "express";
import allUsers from "../controllers/allUserC.js";

let allUserRoute = express.Router();
allUserRoute.get("/getAllUser", allUsers);

export default allUserRoute;
