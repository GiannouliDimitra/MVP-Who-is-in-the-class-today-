const express = require ("express");
const app = express();
const cors = require ("cors");
const connection = require ("./connection");
const port = 8000;

//middleware
app.use(express.json());
app.use(cors());

const studentModel = require ("./models/studentModel");
const studentRoutes = require("./routers/studentRouter");


app.use("/", studentRoutes);
app.listen (port, () => {
    console.log (`The server is working in port ${port}`)
});

