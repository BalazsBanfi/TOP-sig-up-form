const password1 = document.querySelector('#password1');
const password2 = document.querySelector('#password2');
const pwnot = document.querySelector('#pwnot');

let pass1 = "";
let pass2 = "";

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
    if (a === b) {
        pwnot.innerHTML = "*Password match";    
    }
    else {
        pwnot.innerHTML = "*Password do not match";
    }
}