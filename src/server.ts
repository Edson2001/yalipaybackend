import express from "express"

const app = express()

app.get("/", (req, res)=>{

    res.send(",dclcddf")

})

app.listen(3030, ()=> console.log("http://localhost:3030"))