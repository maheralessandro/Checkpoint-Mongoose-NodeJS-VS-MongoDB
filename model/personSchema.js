const mongoose = require("mongoose") ;



const Person = new mongoose.Schema ({
    name:{
        type : String ,
        required : true ,
    },
    age:Number ,
    favoriteFoods:[String]

});

module.exports = mongoose.model('Checkpoint',Person) ;