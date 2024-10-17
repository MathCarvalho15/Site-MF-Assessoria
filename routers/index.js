const router = require('express').Router();
const index = require('../controllers/indexController');

router.get('/',index.index);

router.get('/about',index.about);

router.get('/contact',index.contact);

router.get('/service',index.service);

router.get('/testimonial',index.testimonial);


module.exports = router;