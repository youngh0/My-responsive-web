function signUp(){
    let id = document.querySelector('#id').value;
    let pw = document.querySelector('#pw').value;
    console.log(id,pw);
    firebase.auth().createUserWithEmailAndPassword(id,pw).then(cred =>{
        console.log(cred);
    });

}

function login(){

}
// 데티어 불러와서 보여주기
function show(wpahr){
    console.log("para");
    firebase.database().ref('board').once('value', function (snapshot) {
        let test_box = document.querySelector("#show_box");
        const postData = Object.entries(snapshot.val());
        for(let i = 0; i < postData.length;i++)
        {
            const[key,body] = postData[i];
            if(wpahr === body.title){
                test_box.innerHTML = "<h1>" + body.title + "</h1><div id='bo'>" + body.main_txt +"</div>";
                console.log("ok")
                return;
            }

        }
        alert("x");

    });
}
// show버튼으로 보여주기
function show_b(){
    console.log("none")
    firebase.database().ref('board').once('value', function (snapshot) {
        let test_box = document.querySelector("#show_box");
        const postData = Object.entries(snapshot.val());
        for(let i = 0; i < postData.length;i++)
        {
            const[key,body] = postData[i];
            if(document.getElementById('num').value === body.title){
                test_box.innerHTML = "<h1>" + body.title + "</h1><div id='bo'>" + body.main_txt +"</div>";
                console.log("ok")
                return;
            }

        }
        alert("x");

    });
}


function remove(){
    firebase.database().ref('board').once('value', function (snapshot) {
        let test_box = document.querySelector("#test");
        const postData = Object.entries(snapshot.val());
        for(let i = 0; i < postData.length;i++)
        {
            const[key,body] = postData[i];
            if(document.getElementById('num').value === body.title){
                firebase.database().ref('board/'+document.getElementById('num').value).remove();
                console.log("ok")
                alert("삭제 완료");
                return;
            }
        }
        alert("x");

    });

}

function remove_b(wpahr){
    firebase.database().ref('board').once('value', function (snapshot) {
        let test_box = document.querySelector("#test");
        const postData = Object.entries(snapshot.val());
        for(let i = 0; i < postData.length;i++)
        {
            const[key,body] = postData[i];
            if(wpahr === body.title){
                firebase.database().ref('board/'+wpahr).remove();
                console.log("ok")
                alert("삭제 완료");
                return;
            }
        }
        alert("x");

    });

}


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
        location.href = "trouble.html";
    });
}

function calling(){
    firebase.database().ref('board').once('value', function (snapshot) {
        let test_box = document.querySelector("#test");
        const postData = Object.entries(snapshot.val());
        for(let i = 0; i < postData.length;i++)
        {
            const[key,body] = postData[i];
            if(document.getElementById('title').value === body.title){
                document.getElementById('name').value = body.username;
                document.getElementById('main_txt').value = body.main_txt;
                console.log("ok")
                alert("ㅇ");
                return;
            }
        }
        alert("x");

    });

}

function update(){
    firebase.database().ref('board/' + document.getElementById('title').value).update({
        title:document.getElementById('title').value,
        username:document.getElementById('name').value,
        main_txt:document.getElementById('main_txt').value
    });
    alert("update");
    location.href = "trouble.html";
}



firebase.database().ref('board').on('value', function (snapshot) {
    const postData = Object.entries(snapshot.val());
    console.log(postData.length);
    let tableContent = document.querySelector(".content")
    tableContent.innerHTML = "";
    for(let i = 0; i < postData.length;i++)
    {
        const[key,body] = postData[i];
        console.log(body.title);
        tableContent.innerHTML += "<tr><td>" + body.today + "</td> <td><a onclick='show(id)'id='"+ body.title  + "'> " +
            body.title+"</a class='tit'></td> <td>" + body.username +"</td><td>"+ "<a onclick='remove_b(id)' id='"+body.title +"'>x</a></tr>"
    }
});