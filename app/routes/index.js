const noteRoutes = require('./node_route');

module.exports = function(app, db) {
    noteRoutes(app, db)
}