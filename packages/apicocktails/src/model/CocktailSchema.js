const { Schema, model } = require('mongoose')

const CocktailSchema = new Schema({
  strDrink: {
    type: String,
    required: true
  },
  strCategory: {
    type: String
  },
  strGlass: {
    type: String
  },
  strInstructions: {
    type: String
  },
  strTags: {
    type: String
  },
  strDrinkThumb: {
    type: String
  }
}, {
  versionKey: false,
  timestamps: true
})

module.exports = model('Cocktail', CocktailSchema)
