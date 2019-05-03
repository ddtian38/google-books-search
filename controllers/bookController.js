const db = require("../models")

module.exports = {
    findAllSaved:function(req, res){
        console.log("getting  saved books")

        db.Book
            .find({saved: true})
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
        db.Book.findById({_id: req.params.id})
        .then(dbModel => {
            console.log(dbModel)
            dbModel.remove()
        })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }

}