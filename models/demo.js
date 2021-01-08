const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Demo = db.model('Jegyzet', {
    _foreignKey: {
        type: Schema.Types.ObjectId,
        ref: 'ReferencedScheme'
    },
    name: String,
});

module.exports = Demo;