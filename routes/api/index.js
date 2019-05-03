const router = require("express").Router()
const axios = require("axios")
const apiRoutes = require("./booksRoute")

router.use("/books", apiRoutes);

router.get("/search", (req, res)=>{
    axios
        .get("https://www.googleapis.com/books/v1/volumes", { params: req.query })
        .then(({data})=>{
          console.log("getting results from Google")
          res.json(data)
        })
        .catch(err => res.status(422).json(err));
  })

module.exports = router;