import { Request, Response } from "express"
import authModel from "../model/authModel";

export const createUser = async(req:Request, res:Response)=>{
    try {
        const {name, email, password}=req.body;

        const user = await authModel.create({
          name,
          email,
          password
        })

        return res.status(201).json({
            message:"user registered",
            data: user
            
        })
    } catch (error) {
        return res.status(404).json({
            message:`error creating user:${error}`
        })
    }
}

export const viewAllUser = async(req:Request, res:Response)=>{
    try {

        const user = await authModel.find({ })

        return res.status(200).json({
            message:"user gotten",
            data: user
            
        })
    } catch (error) {
        return res.status(404).json({
            message:`error creating user:${error}`
        })
    }
}
export const deleteUser = async(req:Request, res:Response)=>{
    try {
        const {userID}=req.params;

        const user = await authModel.findByIdAndDelete({ userID})

        return res.status(200).json({
            message:"user deleted",
            data: user
            
        })
    } catch (error) {
        return res.status(404).json({
            message:`error creating user:${error}`
        })
    }
}