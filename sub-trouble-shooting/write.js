var firebaseConfig = {
    apiKey: "AIzaSyCdm4yhjEv2bGVp4d8d8SqtyWTpf7gwds0",
    authDomain: "my-info-web.firebaseapp.com",
    databaseURL: "https://my-info-web.firebaseio.com",
    projectId: "my-info-web",
    storageBucket: "my-info-web.appspot.com",
    messagingSenderId: "451708761343",
    appId: "1:451708761343:web:91d8d889069d3fee3cc8ca"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
var database = firebase.database();

function writePost(username, title, body) {
    // A post entry.
    var postData = {
        username,
        title,
        body,
    };
    // Get a key for a new Post.
    const newPostKey = firebase.database().ref().child('posts').push(postData);
    console.log(newPostKey);
    // return firebase.database().ref().update(updates);
}


var regist_btn = document.querySelector('.r_btn');

var subject = document.querySelector('.subject');
var author = document.querySelector('.author');
var main_text = document.querySelector('.main_txt');
var delete_btn = document.querySelector('.del');

regist_btn.addEventListener('click',function (){
    writePost(author.value,subject.value,main_text.value);
    author.value = ""
    subject.value = ""
    main_text.value = ""
    console.log(subject.value);
});

delete_btn.addEventListener('click',function (){

})