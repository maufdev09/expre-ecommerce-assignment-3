import { order } from "./order.interface";
import { OrderModel } from "./order.model";




const createOrderIntoDB =async(order:order)=>{
    const result = await OrderModel.create(order);
    return result
}


const getAllOrderIntoDB = async()=>{
    const result = await OrderModel.find()
    return result
}

const getOrdersByEmailIntoDB = async(email:string)=>{
    const result = await OrderModel.find({ email: email})
    return result

}





export const OrderServices={
    createOrderIntoDB,
    getOrdersByEmailIntoDB,
    getAllOrderIntoDB
}