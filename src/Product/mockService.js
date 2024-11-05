import Product from "../Model/Product.js";

const mockProducts = [
    {
        "_id": "P01",
        "type": "Electronics",
        "name": "Smartphone XYZ",
        "price": 699.99,
        "salePrice": 649.99,
        "brand": "TechBrand",
        "rating": 4.5,
        "totalStock": 50,
        "image": "https://images.pexels.com/photos/3765175/pexels-photo-3765175.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
        "_id": "P02",
        "type": "Home Appliance",
        "name": "Air Purifier 3000",
        "price": 199.99,
        "brand": "CleanAir",
        "totalStock": 30,
        "image": "https://images.pexels.com/photos/3765175/pexels-photo-3765175.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "rating": 4.8
    },
    {
        "_id": "P03",
        "type": "Fashion",
        "name": "Leather Jacket",
        "price": 149.99,
        "salePrice": 119.99,
        "brand": "StyleCo",
        "totalStock": 20,
        "image": "https://images.pexels.com/photos/3765175/pexels-photo-3765175.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "rating": 4.2
    },
    {
        "_id": "P04",
        "type": "Beauty",
        "name": "Skin Care Lotion",
        "price": 29.99,
        "brand": "GlowUp",
        "totalStock": 100,
        "image": "https://images.pexels.com/photos/3765175/pexels-photo-3765175.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
        "_id": "P05",
        "type": "Electronics",
        "name": "Wireless Earbuds",
        "price": 89.99,
        "salePrice": 79.99,
        "brand": "SoundWave",
        "totalStock": 75,
        "image": "https://images.pexels.com/photos/3765175/pexels-photo-3765175.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "rating": 4.6
    },
    {
        "_id": "P06",
        "type": "Sports",
        "name": "Yoga Mat",
        "price": 24.99,
        "brand": "FitLife",
        "totalStock": 150,
        "image": "https://images.pexels.com/photos/3765175/pexels-photo-3765175.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "rating": 4.3
    },
    {
        "_id": "P07",
        "type": "Home Appliance",
        "name": "Coffee Maker",
        "price": 79.99,
        "salePrice": 69.99,
        "brand": "BrewMaster",
        "totalStock": 60,
        "image": "https://images.pexels.com/photos/3765175/pexels-photo-3765175.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "rating": 4.1
    },
    {
        "_id": "P08",
        "type": "Beauty",
        "name": "Makeup Brush Set",
        "price": 39.99,
        "brand": "BeautyBliss",
        "totalStock": 80,
        "image": "https://images.pexels.com/photos/3765175/pexels-photo-3765175.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "rating": 4.7
    },
    {
        "_id": "P09",
        "type": "Fashion",
        "name": "Running Shoes",
        "price": 89.99,
        "salePrice": 79.99,
        "brand": "SportyStyle",
        "totalStock": 40,
        "image": "https://images.pexels.com/photos/3765175/pexels-photo-3765175.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "rating": 4.5
    },
    {
        "_id": "P10",
        "type": "Electronics",
        "name": "Smartwatch",
        "price": 199.99,
        "brand": "WristTech",
        "totalStock": 25,
        "image": "https://images.pexels.com/photos/3765175/pexels-photo-3765175.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "rating": 4.4
    }
];


const productService = {
    getProducts: async ({ brands, types, sortField, sortOrder }) => {
        const products = mockProducts.filter((product) => {
            if (brands && brands.length > 0 && !brands.includes(product.brand)) {
                return false;
            }
            if (types && types.length > 0 && !types.includes(product.type)) {
                return false;
            }
            return true;
        }).sort((productA, productB) => {
            if (sortOrder === 1) {
                return productA[sortField] - productB[sortField];
            }
            return productB[sortField] - productA[sortField];
        });
        return products;
    },

    getProductById: async (productId) => {
        const index = mockProducts.findIndex((product) => product._id === productId);
        return mockProducts[index];
    },
};

export default productService;