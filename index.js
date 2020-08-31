const express = require('express');
require('dotenv').config();

const app = express();

app.use('/api/auth', require('./routes/auth') );

//escuchar
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});