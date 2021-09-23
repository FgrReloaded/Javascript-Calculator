let screen = document.getElementById('field');
let buttons = document.querySelectorAll('button');
let screenText = '';
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonValue = e.target.innerText;
        if(buttonValue=='x'){
            buttonValue = '*';
            screenText += buttonValue;
            screen.value = screenText;
        }
        else if(buttonValue=='C'){
            screenText='';
            screen.value=screenText;
        }
        else if(buttonValue=='='){
            screen.value=eval(screenText);
        }
        else{
            screenText  += buttonValue;
            screen.value = screenText;
        }
    })
}