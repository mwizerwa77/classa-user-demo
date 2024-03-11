const express = require("express")
const dbConnection =  require("./models/mongodb")
const useDbController = require("./controllers/userControllerDb")
const useApiController = require("./controllers/userController")
const app = express()

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use("/api/users", useApiController);
app.use("/users", useDbController);

dbConnection()
app.listen(3000, () => console.log('Server started on port 3000'));
