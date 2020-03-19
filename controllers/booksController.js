const db = require("../models")

findAll((req, res) => {
    db.Book.find(req.query)
        .then(dbModel => res.send(dbModel))
        .catch(err => res.send(err))
})

create((req, res) => {
    db.Book.find(req.query)
        .then(dbModel => res.send(dbModel))
        .catch(err => res.send(err))

})

module.exports = {
    findAll: findAll,
    create: create
}