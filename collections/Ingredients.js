Ingredients = new Mongo.Collection('ingredients');



IngredientItemSchema = new SimpleSchema({
  name: {
    type: String,
    unique: true
  },
  mesureType: {
    type: String,
    allowedValues: [' ','gr','ml']
  }
});

Ingredients.attachSchema(IngredientItemSchema);
