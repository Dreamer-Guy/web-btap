import express from "express";
import {fetchAllFilteredProducts,getProductById}
from "./controller.js";

const shoppingProductRouter=express.Router();

shoppingProductRouter.get("/get",fetchAllFilteredProducts);
shoppingProductRouter.get("/get/:id",getProductById);

export default shoppingProductRouter;