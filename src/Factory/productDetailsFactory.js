import {PhoneDetail,LaptopDetail,WatchDetail,CameraDetail,TelevisionDetail}
from "../Model/ProductDetails";

const Type={
    PHONE:'phone',
    LAPTOP:'laptop',
    WATCH:'watch',
    CAMERA:'camera',
    TELEVISION:'television'
}

const productDetailMapping={
    [Type.PHONE]: PhoneDetail,
    [Type.LAPTOP]: LaptopDetail,
    [Type.WATCH]: WatchDetail,
    [Type.CAMERA]: CameraDetail, 
    [Type.TELEVISION]: TelevisionDetail,
}
const productTechnicalDetailsFactory = (type, productDetails) => {
    const ProductDetailType = productDetailMapping[type];
    if (!ProductDetailType) {
        throw new Error("Invalid product type");
    }
    return new ProductDetailType(productDetails);
};


export default productTechnicalDetailsFactory;