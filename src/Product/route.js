import express from "express";
import {fetchAllFilteredProducts,getProductById}
from "./controller.js";

const shoppingProductRouter=express.Router();

shoppingProductRouter.get("/get",fetchAllFilteredProducts);
export default shoppingProductRouter;