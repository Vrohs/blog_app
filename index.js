const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;


// mongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/lecture01')
.then(() => console.log('connected to mongodb://127.0.0.1:27017/lecture01'))
.catch((err) => {
    console.error(err)
})


// mongoDB schema
const userSchema = new mongoose.Schema({

    firstName:{
        
        type: String,
        required: true
    },

    email:{

        type: String,
        required: true,
        unique: true
    },

    gender:{

        type: String,
        enum: ['Male', 'Female', 'Other']
    }
});

const userModel = mongoose.model("user", userSchema);


app.use((req,res,next) => {
    next()
})
app.use(express.static('.'))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set("view engine", "ejs")


app.get('/', (req,res) => {
    res.send('visit /blog for the blog page')
})

app.get('/blog', (req,res) => {

    res.render('homepage')
})

app.get('/login', (req,res)=>{

    res.render('login')
})

app.get('/signup', (req,res)=>{

    res.render('signup')
})




app.listen(port)