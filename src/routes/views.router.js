import { Router } from "express";
import ProductManager from "../manager/product.manager.js";


const router = Router()
const productManager = new ProductManager()

router.get('/', (req, res) => {
    res.render('index', {})
})

router.get('/products', async (req, res) => {
    const products = await productManager.list()
    res.render('products', {products})
})
export default router