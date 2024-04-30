const { json } = require('body-parser');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.get('/add1',(req,res)=>{
    const num1 = req.query.a;
    const num2 = req.query.b;
    const ans = parseInt(num1) + parseInt(num2);

    res.status(200).json({ message :"Addition of two numbers is :" +ans});
});

app.post('/add2',(req,res)=>{
    const num1 = req.query.a;
    const num2 = req.query.b;
    const ans = parseInt(num1) + parseInt(num2);

    res.status(200).json({ message :"Addition of two numbers is :" + ans});
})

app.use((err,req,res,next)=>{
    res.status(400).json({message : "Internal Server Error"})
})

app.listen(port);