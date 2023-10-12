import mongoose from "mongoose"


interface iAuth {
    name: string;
    email: string;
    password: string;
   
}

interface iAuthData extends iAuth, mongoose.Document{}
const authModel = new mongoose.Schema<iAuthData>({
    email:{
        type:String
    },
    name:{
        type:String
    },
    password:{
        type:String
    },
  
},{timestamps: true})

export default mongoose.model<iAuthData>("users",authModel)