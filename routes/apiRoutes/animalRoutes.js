const {filterByQuery, findById, createNewAnimal, validateAnimal} = require('../../lib/animals');
const { animals } = require('../../data/animals');
const router = require('express').Router();


//route to find an animal array, a wide set of data
router.get('/animals', (req, res) => {
    let results = animals;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
  });


//route to find an animal by ID, much more specific
router.get('/animals/:id', (req, res)=> {
    const result = findById(req.params.id, animals);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});

//route to post user's input
router.post('/animals', (req, res) => {
    //setting animal id by the next index available, to prevent double of them
    req.body.id= animals.length.toString()
    
    // if any data in req.body is incorrect, send 400 error back
    if (!validateAnimal(req.body)) {
        res.status(400).send('The animal is not properly formatted.');
    } else {
        const animal = createNewAnimal(req.body, animals);
        res.json(animal);
    }

});

module.exports = router;