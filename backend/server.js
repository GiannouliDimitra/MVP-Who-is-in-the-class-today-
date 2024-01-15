const express = require ("express");
const connection = require ("./connection");
const cors = require ("cors");
const app = express();
const port = 8000;

const studentRoutes = require("./routers/studentRouter");
const userRoutes = require("./routers/userRouter");

//middleware
app.use(express.json());
app.use(cors());

//routes
app.use("/", studentRoutes);
app.use("/", userRoutes);

app.listen (port, () => {
    console.log (`The server is working in port ${port}`)
});

