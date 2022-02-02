const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {v4 : uuidV4} = require('uuid');

const userSchema = new Schema({
    _id: { type: String, default: uuidV4, required: true },
    name: { type: String },
});

module.exports = mongoose.model('users', userSchema);