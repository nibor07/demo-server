const { Router } = require('express');
const { revalidarToken } = require('../controllers/auth');
const router = Router();

/*router.get('/', (req, res) => {
    res.json({
        ok:true
    })
});*/

router.get('/', revalidarToken );

module.exports = router;