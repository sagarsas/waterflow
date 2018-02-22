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
      
      
    $('.signinbtn').remove();  
    localStorage.setItem('bsuserData',JSON.stringify(providerData[0]));
    $('#profilepic').attr('src',photoURL);
      
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://us-central1-waterflow-2ff7e.cloudfunctions.net/signInUser",
      "method": "POST",
      "headers": {
        "content-type": "application/json",
      },
      "processData": false,
      "data": JSON.stringify({"displayName":displayName, "email":email, "photoURL":photoURL, "uid":uid})
    }

    $.ajax(settings).done(function (response) {
        localStorage.setItem('bsrefCode',response);
        console.log(response);
    }); 
    // ...
  } else {
    $('.profilebtn').remove();
      localStorage.setItem('bs-login-redirect','confirmation.html')
      window.location.href = "/auth.html"
  }
});