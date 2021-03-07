const { Router } = require('express');
const router = Router();

const cats = [
    { name: "dartañan", food: "brocoli", age: 2, sleep: ["arriba del refrigerador", "árboles"], img: "1.jpg" },
    { name: "bruno", food: "jurel", age: 1, sleep: ["sillón", "tu cama"], img: "2.jpg" },
    { name: "beña", food: "merkat", age: 4, sleep: ["cualquier lugar lejos de ti", "cajas de cartón"], img: "3.jpg" },
    { name: "botman", food: "atun", age: 3, sleep: ["balcón", "entrada"], img: "4.jpg" },
];

const cars = [
    { brand: "Koenigsegg", model: "agera", hp: 500 },
    { brand: "Infiniti", model: "q60", hp: 250 },
    { brand: "Peugeot", model: "206", hp: 120 },
    { brand: "Audi", model: "q7", hp: 180 },
];

router.get('/', (req, res) => {
    res.render('index.ejs')
});

router.get('/cars', (req, res) => {
    res.render('cars', { cars });
});

router.get('/cats', (req, res) => {
    res.render('cats', { cats });
});

router.get('/cars/new', (req, res) => {
    res.render('form');
});

router.get('/cat/:id', (req, res) => {
    // console.log(req.params.id);
    const id = req.params.id;
    res.render('details', { cats: cats[id - 1] });
});


module.exports = router;