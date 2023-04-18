$(document).ready(onReady);

function onReady () {
  // $('#plus-button').on('click', handleButtonClick);
  // $('#minus-button').on('click', handleButtonClick);
  // $('#times-button').on('click', handleButtonClick);
  // $('#divide-button').on('click', handleButtonClick);
  $('#calculatorForm').on('click', '.opperation', updateCurrentCalculation);
  $('#equalsButton').on('click', sendToServer);

  getCalculationHistory()
}
let currentCalculation;
console.log('starting currentCalculation:', currentCalculation);

  function updateCurrentCalculation(event) {
    event.preventDefault();
    currentCalculation = $(this).text();
    console.log('updated currentCalculation:', currentCalculation);

    // calculate(operation);
  }

  // function handleClearButtonClick() {
  //   resetCalculationHistory(handleCalculationHistoryReset);
  //   $('#output-field').empty();
  // }

  // function handleCalculationHistoryReset() {
  //   getCalculationHistory();
  // }
  
  // function getCalculationHistory() {
  //   $.ajax({
  //     method: 'GET',
  //     url: '/calculations'
  //   }).then(displayCalculationHistory)
  // }

  // function displayCalculationHistory(calculationHistory) {
  //   // clearing the list
  //   $('#calculation-history').empty();
  //   // looping through each calculation and add a list item to the list
  //   for (let i = 0; i < calculationHistory.num1.length; i++) {
  //     let num1 = calculationHistory.num1[i];
  //     let num2 = calculationHistory.num2[i];
  //     let operation = calculationHistory.operation[i];
  //     let resNum = calculationHistory.resNum[i];
  //     $('#calculation-history').append(`
  //       <li>
  //         ${num1} ${operation} ${num2} = ${resNum}
  //       </li>
  //     `);
  //   }
  // }
 
  // function calculate(operation) {
  //   let num1 = $('#num-1-input').val();
  //   let num2 = $('#num-2-input').val();
  //   $.ajax({
  //     method: 'POST',
  //     url: '/calculations',
  //     data: {
  //       num1: num1,
  //       num2: num2,
  //       operation: operation,
  //       resNum: resNum
  //     }
  //   }).then(function(response) {
  //     // displaying the result in the output field
  //     $('#output-field').text(response.resNum);
  //     // updating the calculation history
  //     getCalculationHistory();
  //   })
  // }
