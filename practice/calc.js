let screen = document.getElementById('screen');
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.addEventListener('click', (e) => {
    switch(e.target.innerText){
        case 'C':
            screen.innerText = '';
            break;
        case '←':
            if(screen.innerText){
                screen.innerText = screen.innerText.slice(0, -1);
            }
            break;
        case '=':
            try{
                screen.innerText = eval(Screen.innerText);
            } catch{
                screen.innerText = 'PLEASE ENTER CORRECT INPUT!';
            }
            break;

            default:
                screen.innerText += e.target.innerText;
        }
    });
});