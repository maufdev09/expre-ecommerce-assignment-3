
import cors from "cors";
import express, { Request, Response } from "express";
import { ProductRoutes } from "./app/module/product/product.routs";
import { OrderRoutes } from "./app/module/order/order.routs";
const app = express()

app.use(express.json())
app.use(cors())

// application routes
app.use('/api/products', ProductRoutes)
app.use('/api/orders', OrderRoutes)

const getAController = (req: Request, res: Response) => {
  res.send('Hello World!')
}

app.get('/', getAController)

export default app

