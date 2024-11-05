import express from "express";
import { getProductAllDetails,getProductDetailsByID } from "./controller.js";

const shoppingProductDetailsRouter=express.Router();

shoppingProductDetailsRouter.get("/get/:id",getProductDetailsByID);
shoppingProductDetailsRouter.get("/get",getProductAllDetails);

export default shoppingProductDetailsRouter;