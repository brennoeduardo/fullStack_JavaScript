var email = document.getElementById("email");
var password = document.getElementById("password");

email.addEventListener('focus', ()=>{
    email.style.borderColor = "#66bdc0"
})

email.addEventListener('blur', ()=>{
    email.style.borderColor = "#ccc"
})

password.addEventListener('focus', ()=>{
    password.style.borderColor = "#66bdc0"
})

password.addEventListener('blur', ()=>{
    password.style.borderColor = "#ccc"
})