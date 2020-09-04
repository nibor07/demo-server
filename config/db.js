const mongoose = require('mongoose');
require('dotenv').config({path: 'variables.env'});

function connect(){
    return new Promise((resolve, reject) => {

        try
        {
            if (process.env.NODE_ENV === 'test') {
                const Mockgoose = require('mockgoose').Mockgoose;
                const mockgoose = new Mockgoose(mongoose);
        
                mockgoose.prepareStorage()
                .then(() => {
                    mongoose.connect(process.env.DB_MONGO,{ 
                        useNewUrlParser: true, 
                        useCreateIndex: true,
                        useUnifiedTopology: true
                    })
                    .then((res, err) => {
                        if (err) return reject(err);
                        resolve();
                    })
                })
            }else{ 
                        mongoose.connect(process.env.DB_MONGO, {
                            useNewUrlParser: true, 
                            useUnifiedTopology: true,
                            useCreateIndex: true
                        });
                        console.log('DB Conectada');
            }
        }catch(error){
            console.log(error);        
            process.exit(1);
        }
    })
};

function close(){
    return mongoose.disconnect();
}

module.exports = {connect, close };