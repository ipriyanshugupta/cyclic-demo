import express from "express";
const app = express()


app.get('/', (_,res)=>{
    res.send("Working !!")
})

app.get('/about', (_,res)=>{
    res.send("About endpoint...")
})

app.listen(3001, ()=>{
    console.log("Server running on port 3001")
})

