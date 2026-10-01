import express from 'express'
const app=express();

app.get("/",(req,res)=>{
   // res.send("hello express")
   //res.send("<h1> hello Express</h1> ");
   res.send(
    `<h1>Hello server</h1>
    <h2> i am responding from express</h2>
    <h3> the code is minimal and easy</h3>
    
    
    `
   )
});
app.get("/about",(req,res)=>{
    res.send("<h2> About page </h2>")
})
app.get("/products", (req,res)=>{
    const product={
        id:1,
        name:"mobile",
        price: 25000,
    };
    res.send(product)
});

//this line must be last line
app.listen(4444,()=>console.log("prg1 is running at 4444"));