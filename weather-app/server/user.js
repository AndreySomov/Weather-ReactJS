const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

const UserScheme = new Scheme({
    name: String,
    age: Number,
    status: String,
});

const User = mongoose.model('user', UserScheme);

module.exports = User;