import express from "express";
import dotenv from "dotenv";
dotenv.config()

const app = express();
const PORT = process.env.PORT || 3000;
app.get('/', (_,res)=>{
    res.send("Working !!")
})

app.get('/new', (_,res)=>{
    res.send("New endpoint...")
})

app.listen(PORT, ()=>{
    console.log("Server running on port 3001")
})

