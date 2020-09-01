const express = require('express');
require('dotenv').config();
const cors = require('cors');
let app = express();

app.use('/api/auth', require('./routes/auth') );

// CORS
app.use(cors());
app.options('*', cors());

//Directorio publico
app.use( express.static('public'));

//escuchar
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});