Meteor.startup(function() {
  // code to run on server at startup
  //process.env.MAIL_URL = 'smtp://smtp.free.fr';

  // Kadira Analytics
  Kadira.connect('bSZkxCD6aefpSonNN', 'a76e0757-9d57-4427-b0e5-89e69c7ea041');

  Accounts.config({
    sendVerificationEmail: true
  });

});
