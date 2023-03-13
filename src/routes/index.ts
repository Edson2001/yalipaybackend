import { Router } from "express";
import UserController from "../User/User.controller";
import AccountController from "../Accout/Account.controller";

const route = Router()

const user = UserController()
const account = AccountController()

route.get("/", (req, res)=>{
    return res.send("API ON")
})

route.get('/user', user.list)
route.get("/user/:id", user.find)
route.post("/user", user.create)


//route.post("/account", account.create)
route.get("/account/:id", account.find)


export default route