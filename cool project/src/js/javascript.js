var name = document.getElementById("nana")
var email = document.getElementById("email")
var password = document.getElementById("password")
var button = document.getElementById("submit")

button.addEventListener("click", function(){
    console.log(name.value)
    console.log(email.value)
    console.log(password.value)
})

