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
    
    //pushes operator to storedNum array
    $('#add, #subtract, #multiply, #divide, #numDecimal').click(function(e) {
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
        } else if (this.id === 'numDecimal') {
            operator = '.'
            storedNum.push(operator)
        }
        console.log(`num = ${num}`)
        console.log(`storedNum = ${storedNum}`)

    });

    //runs all equations in storedNum array but not according to PEMDAS
    $('#equalsButton').click(function(e) {
        e.preventDefault(e);
        
        input1.val(eval(storedNum.join('')))
    })

    // clears all data
    $('#clearButton').click(function(e) {
        e.preventDefault(e);

        input1.val('0');
        storedNum = [];
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