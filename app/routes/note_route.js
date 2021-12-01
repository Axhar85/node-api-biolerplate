module.exports = function(app, db) {
    app.post('/notes', (req, res) => {
        //craete a note here
        console.log(req.body)
        res.send('Hello')
    });
};