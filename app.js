
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

const ipFn = require("./middleware/getIpAddress");
app.use("*", ipFn);

// token middleware
tkFn = require("./middleware/verifyToken")
app.use(tkFn)

/** Methods */
app.get('/', (req, res, next) => {
    res.send("Welcome to academic rest api");
});

const personRoutes = require("./routes/person.routes")
personRoutes(app);

app.listen(port, () => {
    console.log("Server is running...")
})