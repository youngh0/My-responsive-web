// Your web app's Firebase configuration
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

// 데티어 불러와서 보여주기
function show(){
    firebase.database().ref('board').once('value', function (snapshot) {
        let test_box = document.querySelector("#test");
        const postData = Object.entries(snapshot.val());
        for(let i = 0; i < postData.length;i++)
        {
            const[key,body] = postData[i];
            if(document.getElementById('num').value === body.title){
                test_box.innerHTML = "<h1>" + body.title + "</h1><div id='bo'>" + body.main_txt +"</div>";
            }
        }
    });
}

function remove(){
    console.log(firebase.database().ref('board/'+document.getElementById('num').value));
    firebase.database().ref('board/'+document.getElementById('num').value).remove();
}

firebase.database().ref('board').on('value', function (snapshot) {
    const postData = Object.entries(snapshot.val());
    let tableContent = document.querySelector(".content")
    tableContent.innerHTML = "";
    for(let i = 0; i < postData.length;i++)
    {
        const[key,body] = postData[i];
        tableContent.innerHTML += "<tr><td>" + body.today + "</td> <td class='tit'>" +
            body.title+"</td> <td>" + body.username + "</td><td>"+ "<a id='del'>x</a>" + "</td></tr>"
    }
});