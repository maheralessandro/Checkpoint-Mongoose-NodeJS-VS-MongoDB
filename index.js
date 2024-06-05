const express = require("express");
const main = require("./config/dbconnect");
const personRoute = require("./routes/routePerson");




const app = express();
require("dotenv").config();
const port = process.env.PORT ;


main() ;
app.use(express.json()) ;
app.use('/restor',personRoute) ;

app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log(`server connect in ${port}`);
    }
})