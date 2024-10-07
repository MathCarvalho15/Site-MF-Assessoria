const router = require('express').Router();
const index = require('../controllers/indexController');

router.get('/',index.index);

router.get('/about',index.about);

router.get('/appointment',index.appointment);

router.get('/contact',index.contact);

router.get('/feature',index.feature);

router.get('/service',index.service);

router.get('/team',index.team);

router.get('/testimonial',index.testimonial);


module.exports = router;