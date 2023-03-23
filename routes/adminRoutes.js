const express=require("express");
// const product_new=require("../models/admin_new_product");
const customerController=require("../controller/customerController");
const adminController=require("../controller/adminController");
// const supplierController=require("../controller/supplierController");

const router=express.Router();

router.get("/",(req,res)=>{
    res.render("adminIndex",{title:"Admin"});
});
router.get('/products',adminController.all_pro);
router.get("/products/suppliers",adminController.all);
router.get("/customers/view",customerController.adminview);
router.post("/new/product",adminController.post_pro);
router.post("/new/supplier",adminController.post_suppl);
router.get("/:id/delete",adminController.delete_pro);

router.get("/:id/edit",adminController.edit_pro_get);
router.post("/:id/update",adminController.edit_pro_post);



module.exports=router;