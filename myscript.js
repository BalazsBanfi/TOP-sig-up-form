const password1 = document.querySelector('#password1');
const password2 = document.querySelector('#password2');
const pwnot = document.querySelector('#pwnot');
const btn = document.querySelector('#submit');


let pass1 = "";
let pass2 = "";
let color = "red";

password1.addEventListener('input', myFunction1);
password2.addEventListener('input',  myFunction2);



function myFunction1() {
    pass1 = this.value;
    compare(pass1, pass2);
}

function myFunction2() {
    pass2 = this.value;
    compare(pass1, pass2);
}


function compare(a, b) {
    if (a === b && a !== '') {
        pwnot.innerHTML = "*Password match";
        document.getElementById("pwnot").style.color = "green";
        document.getElementById("password1").style.border = "1px solid green";
        document.getElementById("password2").style.border = "1px solid green";
        document.getElementById("submit").style.cursor = "pointer";
    }
    else {
        pwnot.innerHTML = "*Password do not match";
        document.getElementById("pwnot").style.color = "red";
        document.getElementById("password1").style.border = "1px solid red";
        document.getElementById("password2").style.border = "1px solid red";
        document.getElementById("submit").style.cursor = "not-allowed";
    }
}