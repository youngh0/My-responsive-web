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

function writePost(username, title, main) {
    let day = new Date();
    let today = day.getFullYear() + "/" + (day.getMonth()+1) + "/" + day.getDate();
    // A post entry.
    var postData = {
        username,
        title,
        main,
        today,
    };
    console.log(today);
    // Get a key for a new Post.
    const newPostKey = firebase.database().ref().child('posts').push(postData);
    // return firebase.database().ref().update(updates);
}


var register_btn = document.querySelector('.r_btn');

var subject = document.querySelector('.subject');
var author = document.querySelector('.author');
var main_text = document.querySelector('.main_txt');
var delete_btn = document.querySelector('.del');



window.onload = function (){
    register_btn.addEventListener('click',function (){
        writePost(author.value,subject.value,main_text.value);
        author.value = ""
        subject.value = ""
        main_text.value = ""
    });
}

// delete_btn.addEventListener('click',function (){
//
// })

function getPosts(){
    return; //firebase.database().ref('/users/' + userId);
}
const postRef = firebase.database().ref('/posts/').on('value', function (snapshot) {
    const postData = Object.entries(snapshot.val());
    let tableContent = document.querySelector(".content")
    tableContent.innerHTML = "";
    for(let i = 0; i < postData.length;i++)
    {
        const[key,body] = postData[i];
        tableContent.innerHTML += "<tr><td>" + body.today + "</td> <td>" +
            "<a href='#'>" + body.title+"</a></td> <td>" + body.username + "</td><td>"+ "<a id='del'>x</a>" + "</td></tr>"
    }
})