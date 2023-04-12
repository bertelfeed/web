const express = require('express')
const path = require("path")
const fs = require("fs")
const app = express()
const port = 3000


import {Asreroids} from "./pages/Asteroids";
import {Asreroid} from "./pages/Asteroid";
import {Destroyment} from "./pages/Destroyment";
const router = createBrowserRouter([
    {
        path: "/Asteroid",
        element: <div>Hello world!</div>,
    },
    {
        path: "/Asteroids",
        element: <div>Hello world!</div>,
    },
    {
        path: "/Destroyment",
        element: <div>Hello world!</div>,
    },
]);

app.use(express.json())
app.use(express.urlencoded())
app.use(express.static('./static'))
app.get('*',(req, res) => {
    res.sendFile("index.html", {root: path.join(__dirname,"./static")})

})

app.post('/reg-data',(req,res) =>{
    fs.appendFile("data.txt", JSON.stringify(req.body)+"\n", (err) =>{
        if (err) {
            res.status( 500).send("User not added")
        }
        else {
            res.status( 201).send("User added")
        }
    })
})
app.listen(port, ()=>{
    console.log('Example app listening on port ',port)
})
