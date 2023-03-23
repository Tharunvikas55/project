const express=require("express");
const mongoose=require('mongoose');
const session=require("express-session");
// const hbs=require("express-handlebars");
// const passport=require("passport");
// const localStrategy=require("passport-local").Strategy;
// const bcrypt=require("bcrypt");


const path = require('path');
// const bodyParser=require("body-parser");

const adminRoutes=require('./routes/adminRoutes');
const customerRoutes=require("./routes/customerRoutes");
// const new_customer=require('./models/cus_acc');
const product_new=require("./models/stock");

const app=express();


// mongoose.connect("mongodb+srv://Tharun:2003@cluster0.0jtscxv.mongodb.net/?retryWrites=true&w=majority", {
//    useNewUrlParser: true,
//    useUnifiedTopology: true
// });
mongoose.connect("mongodb://localhost:27017/groceryDB", {
   useNewUrlParser: true,
   useUnifiedTopology: true
});
mongoose.set('strictQuery', true);




app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});


// middleware & static files
// app.use(express.static( 'public'));


// app.use(session({
//   secret:"verygood",
//   resave:false,
//   saveUninitialized:true
// }));
// app.use(express.json());






app.get('/',(req,res)=>{
  product_new.find()
  .then(result=>{
    res.render("index1",{products :result,title:"index"})
  })
  .catch(err=>{
    console.log(err);
  });
});

app.get("/contact",(req,res)=>{
  res.render("contact",{title:"contact"});
})

// add customer
app.get('/signup',customerRoutes);
app.get('/:id/details',customerRoutes);

app.post('/signup',customerRoutes);



app.use('/admin',adminRoutes);

app.use("/customer",customerRoutes);


app.use((req,res)=>{
  res.send("<h3>Page not found</h3>");
})

app.listen(3000);