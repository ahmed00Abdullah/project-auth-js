let name = document.querySelector('#name')
let number = document.querySelector('#number')
let email = document.querySelector('#email')
let password = document.querySelector('#password')
let btnSign = document.querySelector('.btn-sign')



    btnSign.addEventListener('click' , function(e){
    e.preventDefault();
    let useName = name.value
    let userNumber = number.value
    let userEmail = email.value
    let userPassword = password.value
if(useName === '' || userNumber === '' || userEmail === '' || userPassword === '' ){
    alert(" كان نفسي بس معلش مش هينفع")

}else{
    localStorage.setItem('user name', useName)
    localStorage.setItem('user number', userNumber)
    localStorage.setItem('user email', userEmail)
    localStorage.setItem('user password', userPassword)

    location.assign("/login.html")
}
})



