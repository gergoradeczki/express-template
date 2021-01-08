const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/express-template-db', {useNewUrlParser: true, useUnifiedTopology: true});

module.exports = mongoose;