const { response } = require('express');

const buscarProducto = async (req, res = response ) => {

    //const { uid, name } = req;
    console.log('req',req.query.search);
    // Generar JWT
    //const token = await generarJWT( uid, name );

    res.json({
        ok: true
    })
}




module.exports = {
    buscarProducto
}