
const c = require('../controllers/controller')();
// let bp = require('body-parser');
// let mongoose = require('mongoose');
const path = require('path');

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

    app.post('/authors/:id', function(req, res){
        c.createQuote(req, res);
    })

    app.get('/authors/:id', function (req, res) {
        c.readOne(req, res);
    })

    app.put('/authors/:id', function (req, res) {
        c.update(req, res);
    });

    app.post('/quotes/:id', function (req, res) {
        console.log("got into this place ")
        c.updateVote(req, res);
    });

    app.delete('/authors/:id', function (req, res) {
        c.delete(req, res);
    })

    app.delete('/quotes/:id/:quoteId', function (req, res) {
        c.deleteQuote(req, res);
    })

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });

}