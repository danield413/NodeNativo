
const express = require("express")
const config = require("config")
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded(
    { extended: true }
);

const app = express()
const port = config.get("server-port")

app.use(jsonParser);
app.use(urlEncodedParser);

const controller = require("./controller/logic/person.controller")

/** Methods */
app.get('/', (req, res, next) => {
    res.send("Welcome to academic rest api");
});

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

app.listen(port, () => {
    console.log("Server is running...")
})