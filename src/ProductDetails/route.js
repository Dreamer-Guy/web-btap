import express from "express";
import { getProductDetails } from "./controller.js";

const shoppingProductRouter=express.Router();

shoppingProductRouter.get("/get/:id",getProductDetails);
export default shoppingProductRouter;