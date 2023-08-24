const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes/book-routes");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/books",router);

mongoose.connect("*******"
).then(()=>console.log("Connected to Database"))
 .then(()=> {
    app.listen(5000)
 }).catch((err) => console.log(err));


//j0jGNjhNbh9fRlJU