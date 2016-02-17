ShoppingList = new Mongo.Collection('shopping-list');

IngredientListItem = new SimpleSchema({
  name: {
    type: String
  },
  amount: {
    type: String
  },
  mesureType: {
    type: String,
    allowedValues: [' ','gr','ml']
  },
  checked: {
    type: Boolean,
    defaultValue: false
  }
});

ShoppingListSchema = new SimpleSchema({
  name: {
    type: String,
    unique: true
  },
  ingredients: {
    type: [IngredientListItem]
  },
  createAt: {
    type: Date,
    label: "Create At",
    autoValue: function() {
      return new Date()
    },
    autoform: {
      type: 'hidden'
    }
  },
  active: {
    type: Boolean,
    defaultValue: true
  }
});

ShoppingList.attachSchema(ShoppingListSchema);
