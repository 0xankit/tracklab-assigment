const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/traklabs_test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
    console.log('successful');
});

module.exports.User = require('./users');
