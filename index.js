require('dotenv').config();

//Configuracion BD
const conectarDB = require('./config/db');

const express = require('express');

//Para CORS
const cors = require('cors');

let app = express();

app.use('/api/search', require('./routes/auth') );

// CORS
app.use(cors());
app.options('*', cors());

//Directorio publico
app.use( express.static('public'));

// Lectura y parseo del body
app.use( express.json() );

//Conectar a la base de datos
conectarDB();

//escuchar
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});