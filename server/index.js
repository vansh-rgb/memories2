import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import PostRoutes from './routes/posts.js';
import {signup,login} from "./controllers/Auth.js"
const app = express();
app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded());

app.use(bodyParser.json({limit: "30mb",extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb",extended: true}));
app.use('/posts',PostRoutes);
app.post('/signup',signup);
app.post('/login',login);

const CONNECTION_URL = "mongodb://localhost:27017/fsadProject";
const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL,{})
.then(()=> app.listen(PORT,()=>console.log('server running on ',PORT)))
.catch((error)=>console.log(error.message));

