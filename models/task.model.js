const mongoose = require('mongoose');

const Task = new mongoose.Schema({
    date: Date,
    title: {
        type: String,
        required: true
    },
    details: String,
    completed: {
        type: Boolean,
        default: false
    },
    user_id: {
        type: Object,
        ref: "User"
    }
});

module.exports = mongoose.model('Task', Task);