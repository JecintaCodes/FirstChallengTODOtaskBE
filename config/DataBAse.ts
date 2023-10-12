import mongoose from "mongoose"

const todoDB: string = "mongodb://0.0.0.0:27017/BookStoreDataBase"
// const todoDB: string = "mongodb+srv://Jecinta:<Jecinta>@jecinta.zxc8ay5.mongodb.net/"

export const ToDoDataBase = async()=>{
    try {
        
        mongoose.connect(todoDB).then(()=>{
            console.log(`database connected${todoDB}`)
            console.log("")
        })
       
    } catch (error) {
        console.log(`error${error}`)
    }
}