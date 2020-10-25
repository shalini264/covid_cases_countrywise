const express = require('express') 
const api = require('novelcovid');
const exhbs =require('express-handlebars');
const { response } = require('express');
api.settings({baseUrl: 'https://corona.lmao.ninja'})
const app = express()
app.set('view engine', 'hbs');
app.engine('hbs',exhbs( {
    extname: 'hbs',
    dafaultView: 'home',
    layoutsDir:__dirname + '/views/layouts/'
}));
app.get('/countries',(req,res)=>{
    api.countries({sort:'cases'}).then((response)=>{
        res.render('home',{info:response})
    })
});
app.listen(3000,()=>{
    console.log("app is listening on port 3000");
})