import express,{Application, Request, Response} from "express"
import cors from "cors"
import authRouter from "./router/authRouter"
import taskRouter from "./router/taskRouter"


export const mainApp =(app:Application)=>{
app.use(express.json())
app.use(cors())
app.use("/api",authRouter)
app.use("/api",taskRouter)

app.get("/",(req:Request,res:Response)=>{
    try {
        return res.status(200).json({
            message:"api is live ❤❤❤..."
            
          })
   
    } catch (error) {
        return res.status(404).json({
            message:`api error:${error}`
        })
    }
    }
)


}