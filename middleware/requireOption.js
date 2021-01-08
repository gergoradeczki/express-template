/**
 * Checks if the object repository have the required property then returns it
 * Throws TypeError otherwise
 * @param {*} objectRepository 
 * @param {*} propertyName 
 */

function requireOption(objectRepository, propertyName) {
    if (objectRepository && objectRepository[propertyName]) {
        return objectRepository[propertyName];
    }
    throw new TypeError(propertyName + ' required');
}

module.exports = requireOption;