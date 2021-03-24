const DB = require('../Services/db')

module.exports = (container) => {
    container.service('DB', container => new DB())
}