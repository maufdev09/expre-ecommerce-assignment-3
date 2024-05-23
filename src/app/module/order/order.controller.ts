import { Request, Response } from "express";
import { OrderServices } from "./order.service";

const createOrder = async (req: Request, res: Response) => {
    try {
        const orderData = req.body

        const result = await OrderServices.createOrderIntoDB(orderData)

        res.status(200).json(
            {
                success: true,
                message: "Order created successfully!",
                data: result,

            }
        )
    } catch (error) {
        console.log(error);

    }
}
const getAllOrderOrGetAllOrder = async (req: Request, res: Response) => {


    try {
        const  email = req.query.email as string

        if (email) {
            const result = await OrderServices.getOrdersByEmailIntoDB(email)

            res.status(200).json(
                {
                    success: true,
                    message: "Orders fetched successfully for user email!",
                    data: result,

                }
            )
        } else {
            const result = await OrderServices.getAllOrderIntoDB()

            res.status(200).json(
                {
                    success: true,
                    message: "Orders fetched successfully!",
                    data: result,

                }
            )


        }



    } catch (error) {
        console.log(error);

    }
}






export const OrderController = {

    createOrder,
    getAllOrderOrGetAllOrder,
}