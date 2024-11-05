import Product from "../Model/Product.js";


const productService = {
    getProducts: async ({ brands, types, sortField, sortOrder }) => {
        const products = Product.find()
            .byBrand(brands)
            .byType(types)
            .sort({ [sortField]: sortOrder })
            .exec();
        return products;
    },
    
    getProductById: async (productId) => {
        const product = await getProductById(productId);
        return product;
    },
};

export default productService;