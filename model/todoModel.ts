import mongoose from "mongoose"


interface iTask {
   
    title: string;
    isComplete: boolean;
    userID: string;
}

interface iTaskData extends iTask, mongoose.Document{}
const taskModel = new mongoose.Schema<iTaskData>({
    title:{
        type:String
    },
    userID:{
        type:String
    },
    isComplete:{
        type:Boolean
    },
   
},{timestamps: true})

export default mongoose.model<iTaskData>("tasks",taskModel)