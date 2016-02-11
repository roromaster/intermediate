Meteor.startup(function() {
  // code to run on server at startup
  process.env.MAIL_URL = 'smtp://smtp.free.fr';


  Accounts.config({
    sendVerificationEmail: true
  });

});
