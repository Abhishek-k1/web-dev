let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'C'){
            string = "";
            document.querySelector('input').value = string;
        }
        else{
        console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
        }
    })
})

const colors = [
    "gold", "pink", "purple", "red", "cream", "Green", "violet",
    "blue", "marron", "brown", "teal", "crimmson", "firebrick", 
    "seagreen","indigo", "magenta", "hotpink", "coral", "tomato",
    "salmon", "darkorange", "orangered", "limegreen", "springGreen", 
    "slateblue", "darkviolet", "khaki", "moccasin", "khaki", "thistle", 
    "tan", "mediumpurple", "springgreen", "darkcyan", "palegreen"
];

Array.from(buttons).forEach((button, index) => {
    const randomIndex = Math.floor(Math.random() * colors.length);
  button.style.backgroundColor = colors[randomIndex];
});


const inputBox = document.querySelector('input');
const randomInputColor = colors[Math.floor(Math.random() * colors.length)];
inputBox.style.backgroundColor = randomInputColor;
inputBox.style.color = "#000000"; 