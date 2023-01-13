require('../db/conn')
const router = require("../routers/router")
const express = require("express")
const { json } = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(router)

app.listen(port,()=>{
    console.log(`listening at PORT:${port}`)
})

