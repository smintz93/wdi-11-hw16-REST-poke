const express = require("express");
const router = express.Router();

const Pokemon = require("../models/pokemon");


router.use((req, res, next) => {
	// console.log("I am middleware and will be run for all routes");
	next();
})

// INDEX ROUTE

router.get("/", (req, res) => {
	
	res.render("index.ejs", {
		pokemonList: Pokemon
	})
})

// NEW ROUTE 

router.use("/new", (req, res) => {
	res.render("new.ejs")
})


router.get("/:index/edit", (req, res) => {
	
	res.render("edit.ejs", {
		pokemon: Pokemon[req.params.index],
		index: req.params.index

	})
})




// SHOW ROUTE 

router.get("/:id", (req, res) => {
	
	res.render("show.ejs", {
		pokemon: Pokemon[req.params.id]
	})

})


router.post("/", (req, res) => {
	// now that we have body-parser the data is available to us in req.body
	

	// add a new object to our fruits array
	const newPokemon = {
		name: req.body.name,
		img: req.body.img,
		type: req.body.type

		
	}
	
	Pokemon.push(newPokemon)
	res.redirect("/pokemon")

})


//D ELETE



router.delete("/:id", (req, res) => {
	
	Pokemon.splice(req.params.id, 1);

	res.redirect("/pokemon")

})




router.put("/:id", (req, res) => {

	const thePokemon = {};
	thePokemon.name = req.body.name;
	thePokemon.img = req.body.img;
	thePokemon.type = req.body.type;



	Pokemon[req.params.id] = thePokemon;


	res.redirect("/pokemon");	
})






module.exports = router; 