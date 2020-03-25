const mongoose = require("mongoose");
const express = require("express");

const app = express();
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true
    })
    .then(() => {console.log("Connection successfull!")})
    .catch(err => console.log(`These was an error ${err}`));

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`))