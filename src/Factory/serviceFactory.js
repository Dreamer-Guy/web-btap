import mockProductService from "../Product/mockService.js";
import mockProductDetailsService from "../ProductDetails/mockService.js";
const productService=mockProductService;
const productDetailsServce=mockProductDetailsService;
const serviceFactory = {
    getProductSerVice:()=>{
        return productService;
    },
    getProductDetailsSerVice:()=>{
        return productDetailsServce;
    },
};

export default serviceFactory;