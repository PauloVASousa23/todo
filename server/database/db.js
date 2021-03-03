const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://todoUser:todo123@cluster0.tejvz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

const db = mongoose.connection;

module.exports = {
    db
}