const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ami:12341234@cluster0-efqqn.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err))


//conn.connect();')
// const conn = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'dhwjs4248',
//     port: '3307',
//     database: ''
// });


app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'jade');
app.set('views', './views_kim');
app.locals.pretty = true;

app.use(express.static('views_kim')); // 이미지 상위 폴더 지정

app.listen(3000, ()=>{
    console.log('Connected 3000 port');
});

app.get('/', (req, res)=>{
    res.render('view.jade');
});
app.get('/about', (req, res)=>{
    res.render('about.jade');
});
app.get('/signin', (req, res)=>{
    res.render('signin.jade');
});
app.get('/w_all', (req, res)=>{
    res.render('w_all.jade');
});
app.get('/w_outer', (req,res)=>{
    res.render('w_outer.jade');
});
app.get('/w_top', (req,res)=>{
    res.render('w_top.jade');
});
app.get('/w_bottom', (req,res)=>{
    res.render('w_bottom.jade');
});
app.get('/w_outer/item01', (req,res)=>{
    res.render('item01.jade');
});
// 일단 db랑 연동하는거 안배웠으니까, 여기까지. 연동 후 회원가입, 로그인 구현
app.post('/signin', (req,res)=>{
    res.redirect('/signin');
});

app.get('/admin', (req,res)=>{
    res.render('admin.jade');
});