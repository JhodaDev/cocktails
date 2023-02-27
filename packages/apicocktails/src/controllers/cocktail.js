const Cocktail = require('../model/CocktailSchema')

const getCocktailByName = async (req, res) => {
  try {
    const { name } = req.params

    const response = await fetch(`${process.env.END_POINT}/search.php?s=${name}`)
    const { drinks } = await response.json()

    if (!drinks) {
      return res.status(404).json({
        message: 'Cocktail not found'
      })
    }

    res.status(200).json({
      drinks,
      code: 200
    })
  } catch (error) {
    res.status(400).json({
      message: error.message,
      code: 400
    })
  }
}

const createCocktail = async (req, res) => {
  try {
    const { strDrink, strCategory, strGlass, strInstructions, strTags, strDrinkThumb } = req.body

    const cocktail = new Cocktail({
      strDrink,
      strCategory,
      strGlass,
      strInstructions,
      strTags,
      strDrinkThumb
    })

    await cocktail.save()

    res.status(201).json({
      message: 'Cocktail created successfully',
      data: cocktail
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      message: error.message
    })
  }
}

const deleteCocktail = async (req, res) => {
  try {
    const { id } = req.params

    await Cocktail.findByIdAndDelete(id)

    res.status(200).json({
      message: 'Cocktail deleted successfully',
      code: 200
    })
  } catch (error) {
    res.status(400).json({
      message: error.message,
      code: 400
    })
  }
}

const getMyCocktails = async (req, res) => {
  try {
    const cocktails = await Cocktail.find()

    res.status(200).json({
      cocktails,
      code: 200
    })
  } catch (error) {
    res.status(400).json({
      message: error.message,
      code: 400
    })
  }
}

module.exports = {
  getCocktailByName,
  createCocktail,
  deleteCocktail,
  getMyCocktails
}
