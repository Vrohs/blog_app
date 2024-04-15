const express = require('express');
const app = express()
const port = 3000

app.use((req,res,next) => {
    next()
})
app.use(express.static('.'))
app.set("view engine", "ejs")


app.get('/', (req,res) => {
    res.send('visit /blog for the blog page')
})

app.get('/blog', (req,res) => {

    res.render('index')
})

app.get('/login', (req,res)=>{

    res.render('login')
})

app.get('/signup', (req,res)=>{

    res.render('signup')
})




app.listen(port)