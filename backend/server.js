import express, { request, response } from "express";
import { fileupload } from "express-fileupload";
import { configDotenv } from "dotenv";

import { connectToDB } from "./config/db.js";

import  piratesRoutes  from "./routes/pirates.route.js"
import  crewsRoutes  from "./routes/crews.route.js"

configDotenv();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use(fileupload())

//// PIRATES ////
app.use("/api/pirates", piratesRoutes)

//// CREWS ////
app.use("/api/crews", crewsRoutes)

//// set server port ////
app.listen(PORT,() => {
    connectToDB();
    console.log("Connected at http://localhost:" + PORT);
});

