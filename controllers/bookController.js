const db = require("../models")

module.exports = {
    findAllSaved:function(req, res){
        console.log("getting  saved books")

        db.Book
            .find()
            .sort({date: -1})
            .then((dbModel) => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    create: function (req,res){
        console.log("creating book")
        console.log(req.body)
        db.Book.create(req.body)
            .then((dbModel) => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    remove:function(req, res){
        console.log("removing book")

        db.Book.findById({_id: req.param.id})
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }

}