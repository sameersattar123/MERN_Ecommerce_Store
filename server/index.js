import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import bodyParser from 'body-parser';
import Connection from "./database/db.js";
import defaultData from "./default.js";
import Router from "./routes/Route.js"

const app = express();
dotenv.config();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())      

app.use("/" , Router)

app.use(express.static(path.join(__dirname , "./client/build")))

app.get("*" , function( req, res){
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
})

const PORT = 5000

const USERNAME = process.env.DB_USERNAME
const PASSWORD = process.env.DB_PASSWORD
 
Connection(USERNAME,PASSWORD);


app.listen(PORT , () => console.log(`server is running on ${PORT}`))     

defaultData();