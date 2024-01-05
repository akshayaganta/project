var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
const app = express()
app.use(bodyParser.json())
app.use(express.static('new folder'))
app.use(bodyParser.urlencoded({
    extended:true
}))
mongoose.connect('mongodb+srv://nehaganta:Sajitha8978@cluster0.vyugcug.mongodb.net/?retryWrites=true&w=majority/mydb',{ useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"))
app.post("/register_form",(req,res)=>{
    var Name = req.body.Name;
    var Email = req.body.Email;
    var Mobile = req.body.Mobile;
    var Password = req.body.Password;
    var ConfirmPassword=req.body.ConfirmPassword;
    var Address=req.body.Address;
    var Branch=req.body.Branch;
    var data = {
        "Name": Nameame,
        "Email" : Emailmail,
        "Mobile": Mobile,
        "Password" : Password,
        "ConfirmPassword":ConfirmPassword,
        "Branch":Branch,
        "Address":Address,
    }
    db.collection('users').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });
    return res.redirect('/registersuccess.html')
})
app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('/register.html');
}).listen(3000);
console.log("Listening on PORT 3000");