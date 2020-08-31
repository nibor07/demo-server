const { Router } = require('express');
const { buscarProducto } = require('../controllers/productoController');
const router = Router();

/*router.get('/', (req, res) => {
    res.json({
        ok:true
    })
});*/

router.get('/', buscarProducto );

module.exports = router;