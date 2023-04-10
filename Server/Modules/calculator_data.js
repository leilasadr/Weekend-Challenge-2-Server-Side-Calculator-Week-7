let calculationHistory = {
    num1: [],
    operation: [],
    num2: [],
    resNum: [],
}

let resNum = 0;

function getCalculationHistory () {
    const copyOfcalculationHistory = calculationHistory;
    return copyOfcalculationHistory;
}

function calculate(num1, operation, num2) {
    switch (operation) {
        case '+':
            resNum = num1 + num2 ;
            break;
        case '-':
            resNum = num1 - num2 ;
            break;
        case 'x':
            resNum = num1 * num2 ;
            break;
        case '/':
            resNum = num1 / num2 ;
            break;
    }
    
    // Creating a new calculation object with the details
    let newCalculation = {
        num1: num1,
        operation: operation,
        num2: num2,
        resNum: resNum
    };

    // Pushing the new calculation object into the corresponding arrays
    calculationHistory.num1.push(num1);
    calculationHistory.num2.push(num2);
    calculationHistory.operation.push(operation);
    calculationHistory.resNum.push(resNum);

    return resNum;

}



exports.getCalculationHistory = getCalculationHistory;
exports.calculate = calculate;



