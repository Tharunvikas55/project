const customer=require("../models/cus_acc");
const product=require("../models/stock");
const cart=require("../models/cart");

const signUpGet=(req,res)=>{
    res.render("signup",{title:"signUp"})
  };
const signUpPost=(req,res)=>{
  let cus_mobile_no=req.body.cus_mobile_no;
  customer.findOne({cus_mobile_no:cus_mobile_no},function(err,data){
if(err){
  res.send(err);
} else{
  if(data){
    console.log("email is already exist");
    res.send({status:0});

  } else{
    const cust=new customer(req.body);
    cust.save()  
    .then(result=>{
      console.log("registered successfully");
      res.redirect('/');
    })
    .catch(err=>{
      console.log(err);
     });
  
  }
}
  })
    
  };

//admin view the customer details
const adminview=(req,res)=>{
  customer.find()
  .then(result=>{
    res.render('adminCustomerView',{ customers :result,title:"All Customers"});
  })
  .catch(err=>{
    console.log(err);
  });
}
//

const proDetails=(req,res)=>{
  const id = req.params.id;
  product.findById(id)
    .then(result => {
      res.render('productDetails', { products: result, title: 'Product Details' });
    })
    .catch(err => {
      console.log(err);
      
    });
}


const postCart=(req,res)=>{
  console.log(req.body);
  const cartnew=new cart(req.body)
  cartnew.save()
  .then(result=>{
    res.redirect("/customer/");
  })
  .catch(err=>{
    console.log(err);
   });
   
 
}

module.exports={
    signUpGet,
    signUpPost,
    adminview,
    proDetails,
    postCart
}