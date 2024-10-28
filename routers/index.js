const router = require('express').Router();
const index = require('../controllers/indexController');

router.get('/',index.index);

router.get('/sobre',index.about);

router.get('/servico',index.service);

router.get('/regulatorio',index.feature);

router.get('/contato',index.contact);

module.exports = router;