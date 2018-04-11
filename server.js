const express = require("express"); 
const app = express();

const bodyParser = require("body-parser");
const methodOverride = require("method-override")


const Pokemon = require("./models/pokemon.js")

const pokemonController = require("./controllers/pokemoncontrollers")



app.use(bodyParser.urlencoded({extended: false}))
app.use(methodOverride("_method"))




app.use(express.static("public"))




app.use("/pokemon",pokemonController);




app.listen(3000, () => {
	console.log('Server is listenning on Port 3000');
})



