const { Router } = require('express')
const { getCocktailByName, createCocktail, deleteCocktail, getMyCocktails } = require('../controllers/cocktail')
const router = Router()

router.get('/:name', getCocktailByName)
router.post('/', createCocktail)
router.delete('/:id', deleteCocktail)
router.get('/', getMyCocktails)

module.exports = router
