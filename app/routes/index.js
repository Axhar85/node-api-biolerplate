const noteRoutes = require('./note_route');

module.exports = function(app, db) {
    noteRoutes(app, db)
}