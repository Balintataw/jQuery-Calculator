$(document).ready(function() {
    let input1 = $('input[name=val1]')
    let input2 = $('input[name=val2]')
    let operator = '';
    $('#add, #subtract, #multiply, #divide').click(function(e) {
        e.preventDefault()
        if (this.id === 'add') {
            operator = '+'
        } else if (this.id === 'subtract') {
            operator = '-'
        } else if (this.id === 'multiply') {
            operator = '*'
        } else if (this.id === 'divide') {
            operator = '/'
        }
    });
    

    $('#numInputs').submit(function(e) {
        e.preventDefault();
        console.log(operator)
        let value1 = Number(input1.val()); 
        let value2 = Number(input2.val());
//         $('#result').val(eval(`${value1} ${operator} ${value2}`))
    })

    function add(num1, num2) {
        return num1 + num2
    }

    function sub(num1, num2) {
        return num1 - num2
    }

    function multiply(num1, num2) {
        return num1 * num2
    }

    function divide(num1, num2) {
        return num1 / num2
    }
    



})