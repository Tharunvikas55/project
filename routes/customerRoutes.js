const express=require("express");
const customerController=require("../controller/customerController");
const customer=require("../models/cus_acc");
const product=require("../models/stock");
const router=express.Router();

// router.get('/:id',(req,res)=>{
//     let custid=req.params.id;
//     let products=product.find()
//     .then(result=>{
//         console.log(result);
//         res.render("index",{custid,products:result,title:"index"})
//     })
    
// })
router.get("/",(req,res)=>{
    product.find()
    .then(result=>{
        console.log(result);
        res.render("index",{products:result,title:"index"})
    })   
})
router.get("/signup",customerController.signUpGet);
router.get("/:id/details",customerController.proDetails);

router.post("/:id/addtocart",customerController.postCart);
router.post("/signup",customerController.signUpPost);
router.post("/login",(req,res)=>{
    let cus_mobile_no=req.body.cus_mobile_no;
    let cus_password=req.body.cus_password;
    customer.findOne({cus_mobile_no:cus_mobile_no},function(err,data){
        
        if(err){
            res.send(err);
        }
        else{
            if(data==null){
                console.log("invalid user");
                res.send({status:0})
            }
            else{

             if(cus_mobile_no==data.cus_mobile_no){
                if(cus_password==data.cus_password){
                    if(data.role=='admin'){
                        res.redirect("/admin/");
    
                    }else{
                        
                        
                        res.redirect("/customer/")
        
                        // res.send(id:data._id) 
                    }
                }
                // let custid=data._id;
                // console.log(custid);
                else{
                    console.log("password wrong");
                    res.redirect("/");
                }
                 
            }
            else{
                console.log("invalid password");
            }
        }
        }

    })

})



// router.post('/login',(req,res)=>{
//     // res.render("login")
//     product.find()
//     .then(result=>{
//       res.render("index",{products :result,title:"index"})
//     })
//     .catch(err=>{
//       console.log(err);
//     });
//   }
//   );



module.exports=router;