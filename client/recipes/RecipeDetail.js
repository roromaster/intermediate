
Template.RecipeDetail.onCreated(function () {
  var self = this;
  self.autorun(function() {
    var id = FlowRouter.getParam('id');
     self.subscribe('singleRecipe',id);
  });
});

Template.RecipeDetail.helpers({
  recipe: ()=> {
    var id = FlowRouter.getParam('id');
    return Recipes.findOne({_id: id});
  }
});
