const { Router } = require('express');
const { buscarProducto } = require('../controllers/productoController');
const router = Router();

router.get('/', buscarProducto );

module.exports = router;