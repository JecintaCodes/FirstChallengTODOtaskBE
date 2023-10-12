import { Request, Response } from "express"
import taskModel from "../model/todoModel"


export const createTask = async(req:Request, res:Response)=>{
    try {
       
        const {title} = req.params;

      
            const task = await taskModel.create({
                title,
            
              });
               
              return res.status(201).json({
                message:'task created',
                data:task
            })
       
    } catch (error) {
        return res.status(404).json({
            message:`error creating user:${error}`
        })
    }
}
export const viewAllTask = async(req:Request, res:Response)=>{
    try {
        
              const task = await taskModel.find()

              return res.status(200).json({
                message:"gotten all task",
                data:task
              })
       
    } catch (error) {
        return res.status(404).json({
            message:`error getting task:${error}`
        })
    }
}
export const deleteTask = async(req:Request, res:Response)=>{
    try {
        const {taskID}=req.params;

        const user = await taskModel.findByIdAndDelete({ taskID})

        return res.status(200).json({
            message:"task deleted",
            data: user
            
        })
    } catch (error) {
        return res.status(404).json({
            message:`error deleting task:${error}`
        })
    }
}