import express from 'express';
const app = express();
const PORT = 8000;
import path from "path";
const __dirname =path.resolve();
console.log(__dirname,"-------");

// app.get("/",(req, res)=>{

//     console.log("we got request");
//     res.send("<h1>Hello I am server</h1><hr/><p>loreum id scdscdvvd,v,xc;,c ,x l </p>");
// });



app.use(express.static(path.join(__dirname,"public")));

app.get("/",(req,res)=>{
    console.log("recerive");
    res.sendFile(__dirname + "/src/html/index.html");
});

app.listen(PORT, (error)=>{
    error
    ? console.log(error)
    :
    console.log(`server started in http://localhost:${PORT}`);
});

