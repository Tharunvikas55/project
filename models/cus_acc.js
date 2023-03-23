const mongoose=require("mongoose");
const schema=mongoose.Schema;

const customerSchema=new schema({
cus_name:{
    type:String,
    required:true,
},
cus_mobile_no:{
    type:String,
    required:true,
},
cus_address:{
    type:String,
    required:true,
},
cus_password:{
    type:String,
    required:true,
},
role:{
    type:String,
}
},{timestamps:true})

const customer=mongoose.model("customer",customerSchema);

module.exports=customer;