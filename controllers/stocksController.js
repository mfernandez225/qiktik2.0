const db = require('../models');

module.exports= {
    findAll: function ({query}, response) {
        db.Stocks
        .find((query))
        .sort({date:-1})
        .then(dbModel => response.json(dbModel))
        .catch(err => response.status(422).json(err));
    },
    findById: function (req, res){
        db.Stocks
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },
    create: function(req,res){
        db.Stocks
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    update: function(req,res){
        db.Stocks
        .findOneAndUpdate({_id: req.params.id },req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err=> res.status(422).json(err));
    },
    remove: function(req,res){
        db.Stocks
        .findById({_id:req.params.id})
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    }
    
};