import serviceFactory from "../Factory/serviceFactory.js";

const productDetailService=serviceFactory.getProductDetailsSerVice();

const getProductDetailsByID=async(req,res)=>{
    try{
        const {id}=req.params;
        const productDetails=await productDetailService.get(id);
        if(productDetails){
            return res.json({
                productDetail:productDetails,
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

const getProductAllDetails=async(req,res)=>{
    try{
        const productDetails=await productDetailService.getAll();
        if(productDetails){
            return res.json({
                productDetails:productDetails,
            });
        }
        else{
            return res.json({
                productDetails:null,
            })
        }
    }
    catch(error){
        return res.json({
            productDetails:null,
        });
    }
}

export {getProductDetailsByID,getProductAllDetails};