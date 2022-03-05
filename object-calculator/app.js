'use strict'

let a = 'a';

let ROWS = 6;
let COLS = 4;
let SIZE = 80;
let canvas = document.getElementById('canvas');

let calcElements = [``, `%`, 'CE', 'C', 'ERASE', '1/x', 'x^2', '√',
                    '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3',
                    '+', '+/-', '0', '.', '=']

let operation = {
    'firstOperand' : '',
    'secondOperand': null,
    'operator' : null,
    'displayValue' : '0',
};

function createGrid(){
    
    canvas.style.height = `${SIZE * 7}px`;
    canvas.style.width = `${ SIZE * COLS}px`;
    canvas.style.backgroundColor = `purple`;
    canvas.style.margin = `0 auto`;
    canvas.style.marginTop = `13%`;
    canvas.style.border = `2px solid red`;
    
    let result = document.createElement(`div`);
    
    result.style.height = `${SIZE}px`;
    result.style.width = `${COLS * SIZE}px`;
    result.style.backgroundColor = `white`;
    result.style.boxSizing = `border-box`;
    result.style.textAlign = `right`;
    result.style.fontSize = `x-large`;
    result.style.padding = `15px`;

    result.setAttribute(`id`, `operationOutput`);
    canvas.appendChild(result)

    let index = 0;
    let textButton;

    for (let i = 0; i < ROWS; i++){
        for (let j = 0; j < COLS; j++){
            index++;

            let btn = document.createElement('button');
            btn.style.height = `${SIZE}px`;
            btn.style.width = `${SIZE}px`;
            btn.setAttribute(`id`, `btn-${index}`)
            btn.setAttribute(`onclick`, `inputElement(this.textContent)`)


            canvas.appendChild(btn);

            textButton = document.getElementById(`btn-${index}`)
            textButton.appendChild(document.createTextNode(`${calcElements[index]}`))

        };
    };

};

createGrid();

function inputElement(value){
    
    let result = document.getElementById('operationOutput');
    
    switch(value){
        
        case 'ERASE' : 
        
        operation.firstOperand = operation.firstOperand.slice(`${value}`);
        // let stringContent = result.textContent;
        // result.appendChild(stringContent.slice(0, -1));
        // console.log(stringContent);
        // String(result.appendChild(document.textContent.slice(0, -1)));
        // console.log(typeof(String(result)));
        break
        
        case '=' :


        break

        case '+' :
        case '-' :
        case '/' :
        case '*' :
        
        operation.operator = `${value}`;
  
        default :

        result.appendChild(document.createTextNode(`${value}`))
        console.log(result.textContent);
        

        // console.log('c');

    }
    console.log(operation);
}



