
import cors from "cors";
import express, { Request, Response } from "express";
import { ProductRoutes } from "./app/module/product/product.routs";
const app = express()

app.use(express.json())
app.use(cors())

// application routes
app.use('/api', ProductRoutes)

const getAController = (req: Request, res: Response) => {
  res.send('Hello World!')
}

app.get('/', getAController)

export default app

