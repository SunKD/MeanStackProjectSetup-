
const c = require('../controllers/controller')();
// let bp = require('body-parser');
// let mongoose = require('mongoose');


module.exports = (app) => {
    // app.get('/', function(req, res){
    //     res.json({"msg": "testing"})
    // })

    app.get('/authors', function (req, res) {
        c.readAll(req, res);
    })

    app.post('/authors', function (req, res) {
        c.create(req, res);
    })

    app.get('/authors/:id', function (req, res) {
        c.readOne(req, res);
    })

    app.put('/authors/:id', function (req, res) {
        c.update(req, res);
    });

    app.delete('/authors/:id', function (req, res) {
        c.delete(req, res);
    })


}