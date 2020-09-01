const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();

app.use('/api/auth', require('./routes/auth') );

// CORS
app.use(cors())

//escuchar
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});