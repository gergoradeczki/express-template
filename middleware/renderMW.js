/**
 * Renders the requested view
 */

const requireOption = require('./requireOption');

module.exports = function (objectrepository, viewName) {

    return function (req, res) {
        console.log('Template: ' + viewName);
        res.render(viewName, res.tpl);

    };

};