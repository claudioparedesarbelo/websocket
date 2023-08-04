import { Router } from 'express'
import ProductManager from '../manager/product.manager.js'

const router = Router()
const productManager = new ProductManager()

router.get('/', async(req, res) => {
    try{
    const limit = (req.query.limit)
    const products = await productManager.list()
    const result =  products.slice(0, limit)
    res.send(result)
    
    } catch {
        return res.status(404).json({status: "error", message: 'List not found'})
    }
})

router.get('/:pid', async(req, res) => {
    try{
    const pid = parseInt(req.params.pid)
    const productById = await productManager.byId(pid);
    res.send(productById)
    }catch {
        return res.status(404).json({status: "error", message: 'Product not found'})
    }
    })


router.post('/', async (req, res) => {
    try{
    const data = req.body
    const result = await productManager.create(data)
    res.send(result)
    }catch {res.status(404).json({status: "error"})}
})

router.put('/:pid', async(req, res) =>{
    try{
    const pid = parseInt(req.params.pid)
    const product = req.body
    const updateById = await productManager.updateById(pid, product);
    console.log("Product Upload")
    res.send(updateById)
    }catch {
        res.status(404).json({status: "error", message: "Product not upload"})
    }
})

router.delete('/:pid', async(req, res) => {
    try{
    const pid = parseInt(req.params.pid)
    const deleteById = await productManager.delete(pid);
      if(deleteById){
          res.status(200).send("Producto eliminado")
      }else{
      res.status(404).send("Producto no encontrado")
      }
    } catch {
      res.status(404).json({status: "error", message: "Product not delete"})
    }
  })

export default router