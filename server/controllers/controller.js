let mongoose = require('mongoose');
require('../models/author.js');
// let bp = require('body-parser');

module.exports = () => {
    var Authors = mongoose.model('Author'); // 
    var Quotes = mongoose.model('Quote');
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

        createQuote: (req, res) => {
            let newQuote = new Quotes({
                quote: req.body.quote,
                // vote: req.body.vote
            })
            Authors.findOne({ _id: req.params.id }, function (err, author) {
                console.log(author);
                author.quotes.push(newQuote);
                if (err) {
                    res.json(err);
                } else {
                    author.save((err2, author2) => {
                        if (!err2) {
                            res.json({ message: "Success", data: author2 });
                        }
                    })
                    console.log("'Successfully added the quote to the author");
                }
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

        updateVote: (req, res) => {
            // let id = req.params.id;
            Authors.findOne({_id: req.params.id} , function (err, d) {
                if (!err) {
                    let q = d.quotes.id(req.body.id);
                    q.vote = q.vote + req.body.voteVal;
                    d.save((err2, a)=> {
                        if (err) {
                            res.json(err2)
                        } else {
                            res.json(a);
                        }
                    })
                }
            });
            
            
        },

        delete: (req, res) => {
            Authors.deleteOne({ _id: req.params.id }, function (err, datas) {
                if (err) {
                    res.json(err);
                }
                res.json(datas);
            })
        },

        deleteQuote: (req, res)=>{
            Authors.findOne({'_id': req.params.id}).exec( (err, d)=> {
                if (!err) {
                    console.log(req.params.quoteId, "this is the delete");
                    d.quotes.id(req.params.quoteId).remove();
                    
                    d.save((err2, a)=> {
                        if (err) {
                            res.json(err2)
                        } else {
                            res.json(a);
                        }
                    })
                }
            });
            
        }
    }
}