const { Router } = require('express');
const router = Router();

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

module.exports = router;