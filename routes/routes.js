const renderMW = require('../middleware/renderMW');

module.exports = function (app) {
    const objectRepository = {
        /**
         * DB schemes here
         */
    };

    // Default page
    app.use('/',
        renderMW(objectRepository, 'index'));
}