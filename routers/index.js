const router = require('express').Router();
const index = require('../controllers/indexController');

router.get('/',index.index);

router.get('/about',index.about);

router.get('/service',index.service);

router.get('/feature',index.feature);

router.get('/contact',index.contact);

module.exports = router;