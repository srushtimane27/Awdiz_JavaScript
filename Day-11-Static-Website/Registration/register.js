function Register(event){
    event.preventDefault();

alert("Hi from register function")
console.log("hiii")

var name = document.getElementById("name").value;
console.log(name, "name")

var email = document.getElementById("email").value;
console.log(email, "email")

var password = document.getElementById("password").value;
console.log(password, "password")

if (!name || !email || !password){
    return alert("All fields are required")
}

var userData = { name: name, email: email, password: password}

localStorage.setItem("Users",JSON.stringify(userData))

alert("Resistration Successfully")

}