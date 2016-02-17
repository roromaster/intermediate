Template.NewRecipe.onCreated(function(){
  this.addForm =  new ReactiveVar( false );
});

Template.NewRecipe.helpers({
  addForm: function() {
    return Template.instance().addForm.get();
  }
});

Template.NewRecipe.events({
  "click .new-recipe": function(event,template){
    template.addForm.set(!template.addForm.get());
  },
  "click .btn-deny": function(event,template){
    template.addForm.set(!template.addForm.get());
  }
});
