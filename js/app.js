// var ref = new Firebase("https://pricetracker2015.firebaseio.com/");
// var fbData;
// var userData;
// var baseUrl = 'http://localhost:3000/'
// var baseUrl = 'https://calm-island-3256.herokuapp.com/'

$(document).ready(function(){
  console.log("hello")
//   $('#login').on('click', function(e){
//     e.preventDefault();

//     fbAuth().then(function(authData){
//       fbData = authData;
//       var fbString = JSON.stringify(authData);
//       window.localStorage.setItem("fbData", fbString);
//       ajaxLogin(authData);
//       setProfile(authData);
//     });
  });

// //function definitions only ++++++++++++++++++++++++++++++++++++++++++++++++++++++

// var fbAuth = function(){
//   var promise = new Promise(function(resolve, reject){
//     ref.authWithOAuthPopup("facebook", function(error, authData) {
//       if (error) {
//         alert("login failed!");
//         reject(error);
//       } else {
//         resolve(authData);
//       };
//     });
//   })
//   return promise;
// };

// var ajaxLogin = function(authData){
//   userId = authData.facebook.id;
//   var ajaxData = {user:{oauth_id:userId}};
//   $.ajax({
//     url: baseUrl + 'users/'+userId+'/identify',
//     type: 'GET',
//     data: ajaxData
//   }).done(function(response) {
//     userData = response;
//     window.location.href = '#page-map';
//   }).fail(function() {
//     alert("Login Failed");
//   });
// };