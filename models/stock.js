const mongoose=require("mongoose");
const schema=mongoose.Schema;

const productschema=new schema({
        pname:{
        type:String,
        required:true,
    },
    costprice:{
        type:String,
        required:true,
    },
    pprice:{
        type:Number,
        required:true,
    },
    pbrand:{
        type:String,
        required:true,
    },
    pcatogory:{
        type:String,
        required:true,
    },
    pimage: {
        type: String,
        required: true
      },
    quantity:{
        type:Number,
        required:true,
      },
    psupplier:{
        type:String,
        required:true,
    },
    pdescription:{
        type:String,
        required:true,
    }
    
},{timestamps:true});

const product=mongoose.model("product",productschema);
module.exports=product;




