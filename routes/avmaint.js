const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/all', ctrl.avmaint.getAll);
router.post('/', ctrl.avmaint.create);
router.put('/update/:id', ctrl.avmaint.update);

// router.get('/:avmaint', ctrl.avmaint.getAvmaintById);

module.exports = router;
