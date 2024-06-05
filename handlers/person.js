const personSchema = require("../model/personSchema");


const CrearePerson = async(req,res)=>{
    let {name , age , favoriteFoods} = req.body ;
    let newPerson = await new personSchema(req.body) ;
    if(!name){
        return res.status(400).json({msg:'name requaired'})
     }
     newPerson.save()
     .then((doc)=>{
         res.status(200).json({msg:'person created', doc})
     })
     .catch((err)=>{
         res.status(500).json({msg:'error occurred'})
     })
} ;

// creation plusieur person 

const crea = async(req,res)=>{
    personSchema.insertMany([
        {name:"eya" , age:10 , favoriteFoods:"pizza"} ,
        {name:"dali" , age:6 , favoriteFoods:"mloukhia"} ,
        {name:"fatma" , age:4 , favoriteFoods:"pasta"},
        {name: "mary" , age:30 , favoriteFoods:"parmiggiana"}
    ])
    .then((doc)=>{
        res.status(200).json({msg:'person created', doc})
    })
    .catch((err)=>{
        res.status(500).json({msg:'error occurred'})
    })
} ;

//Use model.find() to Search Your Database


const selection = async(req,res)=>{
    await personSchema.find()
    .then((doc)=>{
        res.status(200).json({msg:'person selected', doc})
    })
    .catch((err)=>{
        res.status(500).json({msg:'error occurred'})
    })
} ;

const selectionOne = async(req,res)=>{
    await personSchema.findOne(
        {name : "eya"}
    )
    .then((doc)=>{
        res.status(200).json({msg:'person selected', doc})
    })
    .catch((err)=>{
        res.status(500).json({msg:'error occurred'})
    })
} ;

//Search Your Database By _id

const selectionId = async(req,res)=>{
    await personSchema.findById(
        {_id : "665eeb87c37196c9fa98a288"}
    )
    .then((doc)=>{
        res.status(200).json({msg:'person selected', doc})
    })
    .catch((err)=>{
        res.status(500).json({msg:'error occurred'})
    })
} ;


//Perform Classic Updates by Running Find, Edit, then Save



const addFood = async(rec,res)=>{
    await personSchema.findByIdAndUpdate(
        {_id : "665f7dc71b869f6f0960097b"} ,
        {$push:{favoriteFoods : "hamburger"}}
    )
    .then((doc)=>{
        res.status(200).json({msg:'food selected', doc})
    })
    .catch((err)=>{
        res.status(500).json({msg:'error occurred'})
})};


// Perform New Updates on a Document Using model.findOneAndUpdate()

const personName =async(req , res)=>{
    await personSchema.findOneAndUpdate(
        {name : "eya"} ,
        {age : 20} ,
        {new: true}
    )
    .then((doc)=>{
        res.status(200).json({msg:'age modified', doc})
    })
    .catch((err)=>{
        res.status(500).json({msg:'error occurred'})
})};


//Delete One Document Using model.findByIdAndRemove


const rimuoviPersona = async(req,res)=>{
    await personSchema.findByIdAndDelete(
        {_id : "665f7dc71b869f6f0960097d"}
    )
    .then((doc)=>{
        res.status(200).json({msg:'person delete' , doc})
    })
    .catch((err)=>{
        res.status(500).json({msg:'error occurred'})
    })
};

//MongoDB and Mongoose - Delete Many Documents with model.remove()

const rimMary = async (req,res)=>{
    await personSchema.deleteMany({name:"mary"})
    .then((doc)=>{
        res.status(200).json({msg:'rimossa co successo' , doc})
    })
    .catch((err)=>{
        res.status(500).json({msg:'mary nn rimossa'})
    })
} ;

//Chain Search Query Helpers to Narrow Search Results


const filtro = (req , res)=>{
    personSchema.find({favoriteFoods:"pizza"})
    .sort({name:1})
    .limit(2)
    .select({age:false})
    .exec()
    .then((doc)=>{
        res.status(200).json({msg:'documento filtrato', doc})
    })
    .catch((err)=>{
        res.status(500).json({msg:"comando nn eseguito"})
    })
}




module.exports = {rimMary , filtro , rimuoviPersona , CrearePerson , crea , selection ,selectionOne , selectionId , addFood , personName } ;