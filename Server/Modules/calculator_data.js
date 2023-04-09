let calculationHistory = {
    num1: 0,
    num2: 0,
    operation: '',
    resNum: 0,
}

function getCalculationHistory () {
    const copyOfcalculationHistory = calculationHistory;
    return copyOfcalculationHistory;
}

function calculate(operation, num1, num2) {
    switch (operation) {
        case '+':
            calculationHistory.resNum = num1 + num2 ;
            break;
        case '-':
            calculationHistory.resNum = num1 - num2 ;
            break;
        case 'x':
            calculationHistory.resNum = num1 * num2 ;
            break;
        case '/':
            calculationHistory.resNum = num1 / num2 ;
            break;
    }
}

function resetCalculationHistory () {
    calculationHistory = {
        num1: [],
        num2: [],
        operation: '',
        resNum: [],
    }
}

