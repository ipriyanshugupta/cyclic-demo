import express from "express";
const app = express()


app.get('/', (_,res)=>{
    res.send("Working !!")
})

app.get('/new', (_,res)=>{
    res.send("New endpoint...")
})

app.listen(3001, ()=>{
    console.log("Server running on port 3001")
})

