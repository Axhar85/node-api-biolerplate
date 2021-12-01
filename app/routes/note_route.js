module.exports = function(app, db) {
    app.post('/notes', (req, res) => {
        //craete a note here
        res.send('Hello')
    });
};