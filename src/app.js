import express from 'express'
import handlebars from 'express-handlebars'
import productRouter from './routes/product.router.js'
import cartRouter from './routes/cart.router.js'
import viewsRouter from './routes/views.router.js'
import __dirname from './utils.js'

const app = express()
app.use(express.json())

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

app.use('/', viewsRouter)
app.use('/api/products', productRouter)
app.use('/api/cart', cartRouter)

app.listen(8080)