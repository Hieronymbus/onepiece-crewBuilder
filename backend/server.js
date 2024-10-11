import express, { request, response } from "express";
import fileupload from "express-fileupload";
import { configDotenv } from "dotenv";
import path from 'path'
import cors from 'cors'

import { connectToDB } from "./config/db.js";
import  piratesRoutes  from "./routes/pirates.route.js";
import  crewsRoutes  from "./routes/crews.route.js";

configDotenv();
// app.use(cors({
//     origin: 'http://localhost:5173' // allow requests from your frontend
// }));

// Define __filename and __dirname

const __dirname = path.resolve()

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use('/static', express.static(path.join(__dirname, 'backend', 'public')));
app.use(fileupload());

//// PIRATES ////
app.use("/api/pirates", piratesRoutes)

//// CREWS ////
app.use("/api/crews", crewsRoutes)

//// set server port ////
app.listen(PORT,() => {
    connectToDB();
    console.log("Connected at http://localhost:" + PORT);
});

///Users/student2/Desktop/projects/project/onepiece-mern-stack/backend/public/uploads/buggy.jpeg

