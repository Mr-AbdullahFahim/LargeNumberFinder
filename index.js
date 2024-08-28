const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const button = document.getElementById('button');
const container = document.getElementById('container');

let fieldEmpty=0;
let number1Large=0;
let number2Large=0;

function findLargeNumber(){
    if(number1.value=="" || number2.value==""){
        checkContainersAndRemove();
        container.insertAdjacentHTML('beforeend', `<div id="wrong">Either two field can not be empty</div>`);
        fieldEmpty=1;
    }
    else{
        if(parseInt(number1.value)>parseInt(number2.value)){
            container.insertAdjacentHTML('beforeend', `<div id="num1Large">${number1.value} is the large number.</div>`);
            checkContainersAndRemove();
            number1Large=1;
        }
        else{
            container.insertAdjacentHTML('beforeend', `<div id="num2Large">${number2.value} is the large number.</div>`);
            checkContainersAndRemove();
            number2Large=1;
        }
    }
}

function checkContainersAndRemove(){
    const num1Large = document.getElementById('num1Large');
    const num2Large = document.getElementById('num2Large');
    const wrong = document.getElementById('wrong');
    if(fieldEmpty==1){
        wrong.remove();
        fieldEmpty=0;
    }
    else if(number1Large==1){
        num1Large.remove();
        number1Large=0;
    }
    else if(number2Large==1){
        num2Large.remove();
        number2Large=0;
    }
}