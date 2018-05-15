let mongoose = require('mongoose');
let Authors = require('../models/author.js');
// let bp = require('body-parser');

module.exports = () => {
    var Authors = mongoose.model('Author'); // 
    return {
        readAll: (req, res) => {
            Authors.find({}, function (err, authors) {
                if (err) {
                    console.log("err");
                    res.json(err);
                } else {
                    res.json(authors);
                }
            })
        },

        create: (req, res) => {
            let newAuthor = new Authors({
                name: req.body.name,
            })
            newAuthor.save(function (err) {
                if (err) {
                    res.json(err);
                }
                res.redirect('/Authors');
            })
        },

        readOne: (req, res) => {
            Authors.findOne({ _id: req.params.id }, function (err, data) {
                if (err) {
                    res.json(err);
                }
                res.json(data);
            })
        },

        update: (req, res) => {
            let editAuthor = {
                'name': req.body.name,
            }
            Authors.updateOne({ _id: req.params.id }, editAuthor, function (err, datas) {
                if (err) {
                    res.json(err);
                } res.json(datas);
            })
        },

        delete: (req, res) => {
            Authors.deleteOne({ _id: req.params.id }, function (err, datas) {
                if (err) {
                    res.json(err);
                }
                res.json(datas);
            })
        }
    }
}