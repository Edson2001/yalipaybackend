import { Router } from "express";
import UserController from "../User/User.controller";

const route = Router()
const user = UserController()

route.get("/", (req, res)=>{
    return res.send("API ON")
})

route.get('/user', user.list)

export default route