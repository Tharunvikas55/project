const product=require("../models/stock");
const supplier=require("../models/supplier");
const countermodel=require("../models/stock");


// stocks start------------------------------------------------------------------------
const all_pro=(req,res)=>{
  product.find().sort({ createdAt: -1 })
  .then(result=>{
    res.render('stockPage',{ products :result,title:"Stocks"});
  })
  .catch(err=>{
    console.log(err);
  });
}


const post_pro=(req,res)=>{
  const pro=new product(req.body);
   pro.save()
    .then(result=>{
      res.redirect("/admin/products")
    })
    .catch(err=>{
      console.log(err);
    });
  }

const delete_pro=(req,res)=>{
  product.findByIdAndDelete(req.params.id)
  .then(result=>{
    res.redirect("/admin/products")
  })
  .catch(err=>{
    console.log(err);
  });
}



const edit_pro_get=(req,res)=>{
  const id = req.params.id;
  product.findById(id)
  .then(result=>{
    res.render('stockEdit',{ products:result,title:"Products"});
  })
  .catch(err=>{
    console.log(err);
  });
}

const edit_pro_post=(req,res)=>{
  const {pname ,costprice, pprice , pbrand , pcatogory , quantity} = req.body; 
  const _id = req.params.id;
  
  product.updateOne({_id:_id},{$set:{pname:pname,costprice:costprice, pprice:pprice , pbrand:pbrand , pcatogory:pcatogory , quantity:quantity}})
    .then((data)=>{
      res.redirect("/admin/products")
    })
    .catch((err)=>{
      console.log(err);
    })

  
}




//stocks end------------------------------------------------------------------

//supplier start--------------------------------------------------------------

const all=(req,res)=>{
  supplier.find()
  .then(result=>{
      res.render('supplier',{ suppl:result,title:"Suppliers"});
  })
  .catch(ree=>{
      console.log(err);
  });
}

const post_suppl=(req,res)=>{
  const s=new supplier(req.body);
  s.save()
  .then(result=>{
    res.redirect("/admin/products/suppliers")
  })
  .catch(err=>{
    console.log(err);
  });
}




//supplier end----------------------------------------------------------------


module.exports={
    //stocks
    
    all_pro,
    post_pro,
    delete_pro,
    edit_pro_get,
    edit_pro_post,



    //suppliers
    all,
    post_suppl
    
}


