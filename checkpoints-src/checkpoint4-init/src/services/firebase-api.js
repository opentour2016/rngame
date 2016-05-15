let Firebase = require('firebase');
let myFirebaseRef = new Firebase('https://rngameframeworkln.firebaseio.com/');

let connectChild = function (child) {
  return myFirebaseRef.child(child);
}

let api = {};

api.getUserById = function (userId) {
  return new Promise( function (resolve, reject) {
    connectChild(`/users/${userId}`).once('value', (user) => {
      resolve(user.val());
    })
  })
}

module.exports = api;
