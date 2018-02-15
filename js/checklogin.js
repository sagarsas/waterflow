firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
      
      
    $('#signinbtn').remove();  
    localStorage.setItem('bsuserData',providerData);
    $('#profilepic').attr('src',photoURL);
    // ...
  } else {
//    $('#signinbtn').add();
    $('.profilebtn').remove();
  }
});