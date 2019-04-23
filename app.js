const express = require('express');
const deckRouter = require('./routes/deck');

const app = express();

//CORS setup start......
app.use((req, res, next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );

    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
})
//CORS setup end.....

app.use("/api/deck", deckRouter);

module.exports = app;