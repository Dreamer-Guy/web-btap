import serviceFactory from "../Factory/serviceFactory.js";

const productDetailService=serviceFactory.getProductDetailsSerVice();

const getProductDetails=async(req,res)=>{
    try{
        const {id}=req.params;
        const productDetails=await productDetailService.get(id);
        if(productDetails){
            return res.json({
                productDetails:productDetails,
            });
        }else{
            return res.json({
                productDetail:null,
            })
        }
    }
    catch(error){
        return res.json({
            productDetail:null,
        });
    }
}

export {getProductDetails};