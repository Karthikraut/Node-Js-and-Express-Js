const express = require('express');
const app =express();
const Port =4000;
app.get('/', (req, res) => {  
    res.send('Hello, this is my Home Page')  
  })  
app.listen(Port, ()=>{
    console.log("Seerver is Running on Port " ,Port);
})