import express from "express"
import route from "./routes"
import dotenv from "dotenv"

dotenv.config()

const app = express()
app.use(express.json())
app.use(route)

app.listen(process.env.ENV_SERVER_PORT || 3030, ()=> console.log(`http://localhost:${process.env.ENV_SERVER_PORT || "3030"}`))