const express = require('express');
const app = express()
const port = 3000


app.use(express.static('.'))
app.set("view engine", "ejs")


app.get('/', (req,res) => {
    res.send('visit /blog for the blog page')
})

app.get('/blog', (req,res) => {

    res.render('index')
})




app.listen(port)