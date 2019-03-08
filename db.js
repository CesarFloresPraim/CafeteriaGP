const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ProjectGammaDB', (err)=>{
    if(!err){
        console.log('Connection succeeded...');
    }else{
        console.log('Error :' + JSON.stringify(err, undefined, 2));
    }
});

module.exports = mongoose;