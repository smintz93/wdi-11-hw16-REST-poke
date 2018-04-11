const express = require("express");
const router = express.Router();

const Pokemon = require("../models/pokemon");



// INDEX ROUTE

router.get("/", (req, res) => {
	
	res.render("index.ejs", {
		pokemonList: Pokemon
	})
})




// router.use((req, res, next) => {
// 	// console.log("I am middleware and will be run for all routes");
// 	next();
// })








module.exports = router; 