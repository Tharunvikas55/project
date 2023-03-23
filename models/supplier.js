const mongoose=require("mongoose");
const schema=mongoose.Schema;

const supplierschema=new schema({

    agencyname:{
        type:String,
        required:true,
    },
    ownername:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    catogory:{
        type:String,
        required:true,
    }

},{timestamps:true});

const supplier=mongoose.model("supplier",supplierschema);
module.exports=supplier;