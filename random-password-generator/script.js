const btnEl = document.querySelector(".btn");

const inputEl = document.getElementById("input")

const copyIconEl = document.querySelector(".img");

const alertContainerEl = document.querySelector(".alert-container")
btnEl.addEventListener("click", ()=>{ 
    createPassword()
});
copyIconEl.addEventListener("click", ()=> {
    if(inputEl.value) {
    copyPassword();
    alertContainerEl.classList.remove("active");
    alertContainerEl.innerText = inputEl.value + "copied"
    setTimeout(() => {
        alertContainerEl.classList.add("active");
    }, 2000);
}
});


function createPassword() {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ,.-=+'[]{}()@#$%^&*!?/\abcdefghijklmnopqrstuvwxyz"
    const passwordLength= 12;
    let password = "";

    for (let index = 0; index < passwordLength; index++) {
       const randomNum =Math.floor(Math.random() * chars.length);
       password += chars.substring(randomNum, randomNum + 1);
    }
   
     inputEl.value = password;
}

function copyPassword(){
    inputEl.select();
    inputEl.setSelectionRange(0,9999);
    navigator.clipboard.writeText (inputEl.value);
}
