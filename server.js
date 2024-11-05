import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import productRouter from "./src/Product/route.js";
import productDetailsRouter from "./src/ProductDetails/route.js";

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(join(__dirname, 'public')));

app.use("/products", express.static(join(__dirname, 'public','shop-left-sidebar.html')));


app.use("/api/products", productRouter);
app.use("/api/productDetails", productDetailsRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
