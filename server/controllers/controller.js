// let mongoose = require('mongoose');
// let Authors = require('../models/task.js');
// let bp = require('body-parser');

module.exports = () => {
    var Authors = require('../models/author');
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
            Authors.fundOne({ _id: req.params.id }, function (err, data) {
                if (err) {
                    res.json(err);
                }
                res.json(data);
            })
        },

        update: (req, res) => {
            let updateInfo = {
                'name': req.body.name,
            }
            Authors.updateOne({ _id: req.params.id }, undatedInfo, function (err, datas) {
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