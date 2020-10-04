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

var nameV, titleV, main_txtV;

function ready(){
    nameV = document.getElementById('name').value;
    titleV = document.getElementById('title').value;
    main_txtV = document.getElementById('main_txt').value;
}


function regist(){
    let day = new Date();
    let today = day.getFullYear() + "/" + (day.getMonth()+1) + "/" + day.getDate();
    ready();

    firebase.database().ref('board/' + titleV).set({
        username:nameV,
        title:titleV,
        main_txt:main_txtV,
        today,
    })
    alert("ok");
}

function calling(){
    console.log(firebase.database().ref('board/' + titleV))
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