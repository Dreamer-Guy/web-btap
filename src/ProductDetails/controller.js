import serviceFactory from "../Factory/serviceFactory.js";

const productDetailService=serviceFactory.getProductDetailsSerVice();

const getProductDetailsByID=async(req,res)=>{
    try{
        const {id}=req.params;
        const productDetails=await productDetailService.get(id);
        if(productDetails){
            return res.json({
                data:productDetails,
            });
        }else{
            return res.json({
                data:null,
            })
        }
    }
    catch(error){
        return res.json({
            data:null,
        });
    }
}

const getProductAllDetails=async(req,res)=>{
    try{
        const productDetails=await productDetailService.getAll();
        if(productDetails){
            return res.json({
                data:productDetails,
            });
        }
        else{
            return res.json({
                data:null,
            })
        }
    }
    catch(error){
        return res.json({
            data:null,
        });
    }
}

export {getProductDetailsByID,getProductAllDetails};