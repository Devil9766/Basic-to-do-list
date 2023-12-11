import bodyParser from "body-parser";
import express from "express";
import jsdom from "jsdom"
import $ from "jquery"


// const { JSDOM } = jsdom;
// const { window } = new JSDOM();
// const { document } = (new JSDOM('')).window;
// global.document = document;
// var jq = $( window);




const app = express();
const port = 3000;


app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));


const weekList = [];
const dayList = [];




const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
var day = weekday[d.getDay()];

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var month = months[d.getMonth()];




app.get("/" , (req , res) =>{
    res.render("index.ejs")
})

app.get("/work" , (req , res) =>{

   
    res.render("work.ejs" , { wd : weekList, });
})

app.get("/today" , (req , res) =>{

   
    res.render("today.ejs" , {
        newDay : day ,
        newMonth : month,
        d2: dayList,
    });
 } )

app.post("/work" , (req , res) =>{
    let w = req.body["work1"];
    weekList.push(w);
    
    res.redirect("/work" );

})

app.post("/today" , (req , res) =>{
    let d1 = req.body["today1"];
    dayList.push(d1);
    res.redirect("/today" );

})






app.listen(port , () =>{
    console.log(`Server has started successfully on port ${port}`);
})