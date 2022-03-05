'use strict'

let ROWS = 6;
let COLUMNS = 4;
let SIZE = 80;
let canvas = document.getElementById('canvas');


function buildGrid(){

    canvas.style.width = `${COLUMNS * SIZE}px`;
    canvas.style.height = `${ROWS * SIZE + 160}px`;
    canvas.style.margin = '0 auto';
    canvas.style.marginTop = '100px';
    // canvas.style.border = '5px solid red'
    canvas.style.borderRadius = '15px';

    let output = document.createElement('div');

    output.style.height = `${SIZE}px`;
    output.style.width = `${COLUMNS * SIZE - 2}px`;
    output.style.textAlign = `right`;
    output.style.border = `1px solid black`;
    output.style.backgroundColor = `white`;
    output.style.borderTopLeftRadius = '10px';
    output.style.borderTopRightRadius = '10px';
    output.setAttribute('id', 'outputText')
    canvas.appendChild(output);

    
    let index = 0;
    for (let i = 0; i < ROWS; i++){
        for (let j = 0; j < COLUMNS; j++){        
            index++
            let btn = document.createElement('button');
            btn.style.width = `${SIZE}px`;
            btn.style.height = `${SIZE}px`;
            btn.setAttribute('id', `btn-element-${index}`)
            btn.setAttribute('onclick', 'buttonValues()')
            canvas.appendChild(btn);       
        }
    }
    
    let input = document.createElement('input');
    input.style.height = `${SIZE - 6}px`;
    input.style.width = `${SIZE * COLUMNS - 16}px`;
    input.style.textAlign = `right`;
    input.style.fontSize = `larger`;
    input.style.paddingRight = `10px`
    canvas.appendChild(input)

    let submitButton = document.createElement('button');
    submitButton.style.margin = `0 auto`;
    submitButton.style.height = `${SIZE}px`;
    submitButton.style.width = `${SIZE * COLUMNS}px`;
    submitButton.setAttribute = (`id`, `submitButton`);
    submitButton.appendChild(document.createTextNode('Calcular'));
    // let newtext = document.createTextNode('Calcular')
    canvas.appendChild(submitButton);
    
};

buildGrid();


let calcElements = [`%`, 'CE', 'C', 'ERASE', '1/x', 'x^2', '√',
                    '/', '7', '8', '9', '-', '4', '5', '6', '-', '1', '2', '3',
                    '+', '+/-', '0', '.', '=']

let textButton;

function setElements(array){
    let index = 0;
    array.forEach(element => {
        index++;
        textButton = document.getElementById(`btn-element-${index}`)
        textButton.appendChild(document.createTextNode(element))    
    });
};

setElements(calcElements);

function buttonValues(){
    let buttonText = document.get;
    
    
}


let buttonsArray = [];
let calculation = [];
