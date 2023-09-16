import express from "express";
import tableC from "../controllers/tableC.js";

let tableCreateRoute = express.Router();
tableCreateRoute.get("/createTable", tableC);

export default tableCreateRoute;
