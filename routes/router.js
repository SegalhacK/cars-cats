const { Router } = require('express');
const router = Router();

let cats = [
    {name: "dartañan", food: "brocoli", age: 2, sleep: ["arriba del refrigerador", "árboles"]},
    {name: "bruno", food: "jurel", age: 1, sleep: ["sillón", "tu cama"]},
    {name: "beña", food: "merkat", age: 4, sleep: ["cualquier lugar lejos de ti", "cajas de cartón"]},
    {name: "botman", food: "atun", age: 3, sleep: ["balcón", "entrada"]},
  ];

router.get('/', (req,res) => {
    res.render('index.ejs')
});

router.get('/cars', (req, res) => {
    res.render('cars.ejs');
});

router.get('/cats', (req, res) => {
    res.render('cats.ejs');
});

router.get('/cars/new', (req, res) => {
    res.render('form.ejs');
});

router.get('/cat/:id', (req,res) => {
    console.log(req.params.id);
    const cat = cats[req.params.id - 1]
    res.render('details.ejs');
});


module.exports = router;