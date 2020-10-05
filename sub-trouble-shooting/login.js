

function signUp(){
    // const signupForm = document.querySelector('#sign_up');
    // signupForm.addEventListener('submit', (e)=>{
    //     e.preventDefault();
    //
    //
    // })
    // console.log("finish")
    let id = document.querySelector('#id').value;
    let pw = document.querySelector('#pw').value;

    firebase.auth().createUserWithEmailAndPassword(id,pw).then(cred =>{
        alert("o");
        location.href = "trouble.html"
    }).catch(function (error){
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
    })
}

function login(){

}