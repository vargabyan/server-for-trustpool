const express = require('express');
const app = express();
const PORT = 5000;
const userAdminRoute = require('./routers/userAdminRoute');
const mongoose = require("mongoose")


app.use(express.json({ limit: "10mb", extended: true }))
app.use(express.urlencoded({ limit: "10mb", extended: true }))

app.use('/user-admin', userAdminRoute);
app.use('*', userAdminRoute);

mongoose.connect(
    "mongodb://127.0.0.1:27017/trustpool",
    function (error) {
        if (error) return console.log(error)

        app.listen(PORT, function () {
            console.log(`Example app listening on port ${PORT}!`);
        });
    }
)