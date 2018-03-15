$(document).ready(function() {
    let input1 = $('#view-window')
    let operator = '';
    var num = '';
    var storedNum = [];
    input1.val('0')

    $('#num1, #num2, #num3, #num4, #num5, #num6, #num7, #num8, #num9 ,#num0').click(function(e) {
        e.preventDefault(e);
        num = this.innerText;
        storedNum.push(num);
        input1.val(storedNum.join(''))
        console.log(`num = ${num}`)
        console.log(`storedNum = ${storedNum}`)

    })

    $('#add, #subtract, #multiply, #divide').click(function(e) {
        e.preventDefault(e)
        
        if (this.id === 'add') {
            operator = '+';
            storedNum.push(operator)
        } else if (this.id === 'subtract') {
            operator = '-'
            storedNum.push(operator)
        } else if (this.id === 'multiply') {
            operator = '*'
            storedNum.push(operator)
        } else if (this.id === 'divide') {
            operator = '/'
            storedNum.push(operator)
        }
//         num = ''
        console.log(`num = ${num}`)
        console.log(`storedNum = ${storedNum}`)

    });

    $('#equalsButton').click(function(e) {
        e.preventDefault(e);
        
//         let currentNum = input1.val()
        input1.val(eval(storedNum.join('')))
//         input1.val(eval(`${storedNum} ${operator} ${currentNum}`))
//         storedNum = eval(`${storedNum} ${operator} ${currentNum}`)
//         console.log(currentNum)
//         console.log(`num = ${num}`)
//         console.log(`storedNum = ${storedNum}`)
    })

    
    

//     $('#numInputs').submit(function(e) {
//         e.preventDefault();
//         console.log(operator)
//         let value1 = Number(input1.val()); 
// //         let value2 = Number(input2.val());
//         //using eval to equate
// //         $('#result').val(eval(`${value1} ${operator} ${value2}`))
//         //using helper functions to equate
//         if (operator === '+') {
//             storedNum = add(val1, val2)
//             $('#result').val(add(value1, value2))
//         } else if (operator === '-') {
//             $('#result').val(sub(value1, value2))
//         } else if (operator === '*') {
//             $('#result').val(multiply(value1, value2))
//         } else if (operator === '/') {
//             $('#result').val(divide(value1, value2))
//         }
//     })

//     function add(num1, num2) {
//         return num1 + num2
//     }

//     function sub(num1, num2) {
//         return num1 - num2
//     }

//     function multiply(num1, num2) {
//         return num1 * num2
//     }

//     function divide(num1, num2) {
//         return num1 / num2
//     }
    



})