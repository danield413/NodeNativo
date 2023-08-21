const controller = require("../controller/logic/person.controller")

module.exports = (app) => {
    app.get('/person', (req, res, next) => {
        controller.getAll(req, res, next)
    })
    
    app.post('/person', (req, res, next) => {
        controller.createPerson(req, res, next)
    })
    
    app.put('/person', (req, res, next) => {
        controller.updatePerson(req, res, next)
    })
    
    app.get('/person/bydocument/:document', (req, res, next) => {
        controller.getByDocument(req, res, next)
    })
    
    app.delete('/person/:id', (req, res, next) => {
        controller.deletePerson(req, res, next)
    })
}