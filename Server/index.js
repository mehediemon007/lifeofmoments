import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import postRouter from "./routes/posts.js"


const app = express();
dotenv.config();



app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());



app.use('/posts', postRouter);

app.get('/',(req,res)=>{
    res.send("Wel come to Api");
})



// const CONNECTION_URL = "mongodb+srv://mehediemon6741:mehediemon6741@cluster0.dau9q.mongodb.net/dbname?retryWrites=true&w=majority";

const PORT =  process.env.PORT || 5000;
mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
   .then(()=>{
    console.log('Database Connected');
    app.listen(PORT,()=>{
        console.log("Server Running....",PORT);
    })
    }).catch((error)=>{
       console.log(error.message)
   })

mongoose.set('useFindAndModify',false);



// app.listen(PORT,()=>{
//   console.log("Connected Successfully");    
// })







