var firebaseConfig = {
    apiKey: "AIzaSyCdm4yhjEv2bGVp4d8d8SqtyWTpf7gwds0",
    authDomain: "my-info-web.firebaseapp.com",
    databaseURL: "https://my-info-web.firebaseio.com",
    projectId: "my-info-web",
    storageBucket: "my-info-web.appspot.com",
    messagingSenderId: "451708761343",
    appId: "1:451708761343:web:91d8d889069d3fee3cc8ca"
};
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
function regist(){
    let day = new Date();
    let today = day.getFullYear() + "/" + (day.getMonth()+1) + "/" + day.getDate();

    firebase.database().ref('board').once('value', function (snapshot) {
        const postData = Object.entries(snapshot.val());
        console.log(postData.length);
        for(let i = 0; i < postData.length;i++)
        {
            const[key,body] = postData[i];
            console.log(body.title);
            if(document.getElementById('title').value === body.title){
                alert("이미 있어연");
                document.getElementById('name').value = "";
                document.getElementById('title').value = "";
                document.getElementById('main_txt').value = "";
                return ;
            }
        }
        firebase.database().ref('board/' + document.getElementById('title').value).set({
            username:document.getElementById('name').value,
            title:document.getElementById('title').value,
            main_txt:document.getElementById('main_txt').value,
            today,
        })
        alert("ok");
        document.getElementById('name').value = "";
        document.getElementById('title').value = "";
        document.getElementById('main_txt').value = "";
    });
}

function calling(){
    firebase.database().ref('board/' + document.getElementById('title').value).on('value',function (snapshot){
        document.getElementById('name').value = snapshot.val().username;
        document.getElementById('main_txt').value = snapshot.val().main_txt;
    });
}

function update(){
    firebase.database().ref('board/' + document.getElementById('title').value).update({
        title:document.getElementById('title').value,
        username:document.getElementById('name').value,
        main_txt:document.getElementById('main_txt').value
    })
}