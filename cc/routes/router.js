const express = require('express');
const route = express.Router()

/* 
    * @ discreption Root Routs
    * @method GET/
*/
route.get('/login',(req, res)=> {
    res.render('pages/admin/login')
});

route.get('/',(req, res)=> {
    res.render('pages/public/index')
});

module.exports = route