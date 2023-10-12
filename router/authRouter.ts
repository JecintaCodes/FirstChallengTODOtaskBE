import { Router } from "express"
import { createUser, deleteUser, viewAllUser } from "../controller/authController";

const authRouter = Router();

authRouter.route("/create-user").post(createUser)
authRouter.route("/delete-user").delete(deleteUser)
authRouter.route("/view-all-user").get(viewAllUser)

export default authRouter