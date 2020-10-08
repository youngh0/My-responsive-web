
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

function login(){
    let id = document.querySelector('#email_in').value;
    let pw = document.querySelector('#pw_in').value;
    firebase.auth().signInWithEmailAndPassword(id, pw).then(cred => {
        alert("o");
        location.href = "trouble.html";
    }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
    });
}