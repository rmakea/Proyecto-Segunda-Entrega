const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const cors = require('cors');
const puerto = process.env.PORT || 3000;

const app = express();

app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials',()=>{});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extenden : true}));
app.use(bodyParser.json())

//Definir rutas: login, categorias, index y Not Found
//GETS o POST

app.get('/',(req,res)=>{
    res.render('index');    
})


app.get('/prod',(req,res)=>{
    res.render('productos');    
})

app.get('/login',(req,res)=>{
    res.render('login');    
})

app.get('/categorias',(req,res)=>{
    res.render('categorias');    
})

app.get('/prov',(req,res)=>{
    res.render('provedores');    
})

app.get('/clientes',(req,res)=>{
    res.render('clientes');    
})

app.get('/venta',(req,res)=>{
    res.render('ventas');    
})

app.get('/ventana',(req,res)=>{
    res.render('ventanafact');    
})

app.get('/factura',(req,res)=>{
    res.render('facturas');    
})

app.get('*',(req,res)=>{
    res.render('404');
})

//Definir puerto en que se escuchan solicitudes
app.listen(puerto,()=>{
    console.log('El servidor esta corriendo en el puero: ' ,puerto);    
})