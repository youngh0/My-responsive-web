let sign_in_menu = document.querySelector('#sign_in_menu');
let sign_up_menu = document.querySelector('#sign_up_menu');
let logout_box = document.querySelector('#log_out_menu');
let sign_up_box = document.querySelector('.main_sign_up');
let sign_in_box = document.querySelector('.main_sign_in');
let three_btn = document.querySelector('.func');

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        console.log(user)
        console.log('yes')
        sign_in_menu.style.display = "none";
        sign_up_menu.style.display = "none";
        logout_box.style.display = "block"

    } else {
        console.log("no")
        sign_in_menu.style.display = "block";
        sign_up_menu.style.display = "block";
        logout_box.style.display = "none"
    }
});

function check_regist_btn(){
    var user = firebase.auth().currentUser;
    if(user != null){
        console.log("yes")
        location.href = "write.html"
    }else{
        console.log("no")
        alert("회원만 이용할 수 있습니다.")
    }
}
function check_remove(id){
    var user = firebase.auth().currentUser;
    if(user != null){
        console.log("yes")
        remove_b(id)
    }else{
        console.log("no")
        alert("회원만 이용할 수 있습니다.")
    }
}
function check_delete_btn(){
    var user = firebase.auth().currentUser;
    if(user != null){
        console.log("yes")
        remove()
    }else{
        console.log("no")
        alert("회원만 이용할 수 있습니다.")
    }
}
function check_update_btn(){
    var user = firebase.auth().currentUser;
    if(user != null){
        console.log("yes")
        location.href = "write.html"
    }else{
        console.log("no")
        alert("회원만 이용할 수 있습니다.")
    }
}

function hidebox(){
    sign_up_box.style.display = 'none';
    sign_in_box.style.display = 'none';
    three_btn.style.display = "block";
}

function show_sign_up(){
    sign_up_box.style.display = 'block';
    three_btn.style.display = "none";
}
function signUp(){

    let id = document.querySelector('#id').value;
    let pw = document.querySelector('#pw').value;
    firebase.auth().createUserWithEmailAndPassword(id,pw).then(cred =>{
        alert("sign up");
        firebase.auth().signOut().then(function () {
            three_btn.style.display = "block"
            sign_up_box.style.display = 'none';
        });
    }).catch(function (error){
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
    })
}

function show_sign_in(){
    sign_in_box.style.display = 'block';
    three_btn.style.display = "none";
}
function log(){
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
        .then(function() {
            return login();
        })
        .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
        });
}

function login(){
    let id = document.querySelector('#id_in').value;
    let pw = document.querySelector('#pw_in').value;

    firebase.auth().signInWithEmailAndPassword(id, pw).then(function () {
        console.log("sign in")
        alert("o");
        three_btn.style.display = "block";
        sign_in_box.style.display = 'none';
        location.href = "trouble.html";
    })
        .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
        });
}
function logout(){
    firebase.auth().signOut().then(function () {
        alert("out");
    });
}

function clk_go_sign_up(){
    sign_up_box.style.display = 'block';
    sign_in_box.style.display = 'none';
}
function clk_go_sign_in(){
    sign_up_box.style.display = 'none';
    sign_in_box.style.display = 'block';
}
