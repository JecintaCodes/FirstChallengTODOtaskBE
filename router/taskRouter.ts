import { Router } from "express"

import { createTask, deleteTask, viewAllTask } from "../controller/taskController";

const taskRouter = Router();

taskRouter.route("/create-task").post(createTask)
taskRouter.route("view-all-task").get(viewAllTask)
taskRouter.route("/:userID/delete-task").delete(deleteTask)

export default taskRouter