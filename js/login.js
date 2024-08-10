let email = document.querySelector('#email')
let password = document.querySelector('#password')
let btnLogin = document.querySelector('.btn-login')

// console.log(email, password, btnLogin)

btnLogin.addEventListener('click', function(e){
    e.preventDefault();
    if(email.value == localStorage.getItem('user email') && password.value == localStorage.getItem('user password') ){
        location.assign('/index.html')

    }else{
        alert('User Email Or Password Wrong')
    }
})