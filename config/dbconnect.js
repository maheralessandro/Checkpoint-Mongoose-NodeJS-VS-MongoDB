const mongoose = require("mongoose") ;



const main = async()=>{
    await mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log(`database connected`);
    })
    .catch((err)=>{
        console.error(err);
    })
} ;


module.exports = main ;







