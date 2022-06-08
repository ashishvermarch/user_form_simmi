const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/UserForms?readPreference=primary&directConnection=true&ssl=false';

const connectToMongo = () => {
    mongoose.connect(mongoURI, ()=> {
        console.log('connected to mongo sucessfully');
    })
}

module.exports = connectToMongo;