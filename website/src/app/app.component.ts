import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'website';
  
  

  ngOnInit(){

    

  /* 
(function (d, s, id) {
  var js, sjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "https://sdk.snapkit.com/js/v1/login.js";
  sjs.parentNode.insertBefore(js, sjs);
}(document, 'script', 'loginkit-sdk'));


(<any>window).snapKitInit = function () {
    var loginButtonIconId = 'my-login-button-target';
    // Mount Login Button
    
    snap.loginkit.mountButton(loginButtonIconId, {
      clientId: '1a9fe673-920e-49ce-9735-2ddaada657c6',
      redirectURI: 'http://localhost:4200/',
      //redirectURI: 'https://api-project-1027665890840.firebaseapp.com/profile',
      scopeList: [
        'user.display_name',
        'user.bitmoji.avatar'
      ],
      handleResponseCallback: function() {
        snap.loginkit.fetchUserInfo()
          .then(data => {
            console.log('User info:', data);
        });
      },
    });
    
  };
 // Load the SDK asynchronously
(function (d, s, id) {
    var js, sjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://sdk.snapkit.com/js/v1/login.js";
    sjs.parentNode.insertBefore(js, sjs);
  }(document, 'script', 'loginkit-sdk'));
  */
  }; 
}
