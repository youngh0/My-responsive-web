// // Your web app's Firebase configuration
// var firebaseConfig = {
//     apiKey: "AIzaSyCdm4yhjEv2bGVp4d8d8SqtyWTpf7gwds0",
//     authDomain: "my-info-web.firebaseapp.com",
//     databaseURL: "https://my-info-web.firebaseio.com",
//     projectId: "my-info-web",
//     storageBucket: "my-info-web.appspot.com",
//     messagingSenderId: "451708761343",
//     appId: "1:451708761343:web:91d8d889069d3fee3cc8ca"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
//
// // Get a reference to the database service
// var database = firebase.database();
// function writePost(username, title, body) {
//     // A post entry.
//     var postData = {
//         username,
//         title,
//         body,
//     };
//     // Get a key for a new Post.
//     const newPostKey = firebase.database().ref().child('posts').push(postData);
//     // return firebase.database().ref().update(updates);
// }
