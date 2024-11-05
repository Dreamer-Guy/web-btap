import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import productRouter from "./src/Product/route.js";
import productDetailsRouter from "./src/ProductDetails/route.js";

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Serve static files from the 'public' directory
// app.use(express.static(join(__dirname, 'public')));

app.use("/products", productRouter);
app.use("/productDetails", productDetailsRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
