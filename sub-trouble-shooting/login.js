
function hidebox(){
    let box_up = document.querySelector('.main_sign_up');
    let box_in = document.querySelector('.main_sign_in');
    box_in.style.display = 'none';
    box_up.style.display = 'none';
}

function show_sign_up(){
    let three_btn = document.querySelector('.func');
    let show_sign_up = document.querySelector('.main_sign_up');
    show_sign_up.style.display = 'block';
    three_btn.style.display = "none";
}
function signUp(){
    let show_sign_up = document.querySelector('.main_sign_up');
    let three_btn = document.querySelector('.func');
    let id = document.querySelector('#id').value;
    let pw = document.querySelector('#pw').value;

    firebase.auth().createUserWithEmailAndPassword(id,pw).then(cred =>{
        alert("o");
        location.href = "trouble.html"
        three_btn.style.display = "block"
        show_sign_up.style.display = 'none';
    }).catch(function (error){
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
    })
}

function show_sign_in(){
    let three_btn = document.querySelector('.func');
    let show_sign_up = document.querySelector('.main_sign_in');
    show_sign_up.style.display = 'block';
    three_btn.style.display = "none";
}

function login(){
    let show_sign_up = document.querySelector('.main_sign_in');
    let three_btn = document.querySelector('.func');
    let id = document.querySelector('#id_in').value;
    let pw = document.querySelector('#pw_in').value;
    firebase.auth().signInWithEmailAndPassword(id, pw).then(cred => {
        alert("o");
        three_btn.style.display = "block"
        show_sign_up.style.display = 'none';
        location.href = "trouble.html";
    }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
    });
}