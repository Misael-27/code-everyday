'use strict'

let ROWS = 6;
let COLS = 4;
let SIZE = 80;
let canvas = document.getElementById('canvas');

let calcElements = [``, `%`, 'CE', 'C', 'ERASE', '1/x', 'x^2', '√',
                    '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3',
                    '+', '+/-', '0', '.', '=']

let operation = {
    'firstOperand' : '',
    'secondOperand': '',
    'operator' : null
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
    result.style.padding = `14px`;

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
            btn.style.padding = `2px`;
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
    let arrayOperation = [operation.firstOperand, operation.operator, operation.secondOperand];
    // console.log(arrayOperation);  
    let operator;
    
    switch(value){
        
        case 'ERASE' : 

        if (operation.operator == null || operation.secondOperand == ''){
            operation.firstOperand = operation.firstOperand.slice(0, -1);
            result.textContent = result.textContent.slice(0, -1);
            console.log(operation.firstOperand);
        }else{
            operation.secondOperand = operation.secondOperand.slice(0, -1);
            result.textContent = result.textContent.slice(0, -1);
            console.log(operation.secondOperand);
        }
        
        break

        case '=' :

        let final;

        final = eval(arrayOperation[0] + arrayOperation[1] + arrayOperation[2]);
        console.log(final);
        result.textContent = final;
        break
            
        case '+' :
        case '-' :
        case '/' :
        case '*' :
                        
        result.textContent = result.textContent + value;
        operation.operator = `${value}`;
        break

        case 'CE':
        case 'C':

        operation.firstOperand = '';
        operation.operator = '';
        operation.secondOperand = '';
        result.textContent = '';
        console.clear();
        break

        case 'x^2':
        
        let pwr;

        pwr = Number(operation.firstOperand) ** 2;
        result.textContent = pwr;
        console.log(typeof(pwr));
        break

        case '√':

        let sqr;

        sqr = Math.sqrt(Number(operation.firstOperand));
        result.textContent = sqr;

        default :

        if (operation.operator == null || operation.operator == ''){
            operation.firstOperand += value;
            console.log(operation.firstOperand);
            
        }else{
            operation.secondOperand += value;
            console.log(operation.secondOperand);
        }
        
        result.textContent += value;
    }
}