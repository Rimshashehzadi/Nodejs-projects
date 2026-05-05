// console.log("hello world");
// include express
const express = require('express')
const app = express()

// start express serverr
app.listen(3000,() =>{
    console.log("successfully connected with port 3000");
})

// read data
app.get('/',(req,res) =>{
    res.send('<h1>Hello</h1>')
})

// route parameter
app.get('/about',(req,res) =>{
    res.send("<h2>about page</h2>")
})
// nested route
app.get('/about/gallary',(req,res)=>{
    res.send("<h2>Gallary page</h2>")
})
// use special character in route
app.get('/random.text',(req,res)=>{
    res.send("<h2>Random page</h2>")
})
// user parameters
app.get('/about/user/:id',(req,res)=>{
    res.send(req.params) //params means parameters
})
//nested route with nested values
app.get('/user/:userid/book/:bookid',(req,res)=>{
    res.send("Book Id:" + req.params.bookid) //concatinate
})

app.get('/user/:userid-:bookid',(req,res)=>{
    res.send( req.params) //concatinate
})
//querymparameter
app.get('/search',(req,res)=>{
    res.send( req.query) //concatinate
})
// query parameter
app.get('/search',(req,res)=>{
    const name=req.query.name
    const age = req.query.age
    res.send(`Search result for Name : ${name} Age: ${age}`)
})
