$(document).ready(onReady);

function onReady () {
  $('#calculatorForm').on('click', '.opperation', updateCurrentCalculation);
  $('#equalsButton').on('click', sendToServer);
  $('#calculatorForm').on('click', '.clearButton', clearInputs);
  getCalculationHistory()
}
let currentCalculation;
console.log('starting currentCalculation:', currentCalculation);

  function updateCurrentCalculation(event) {
    event.preventDefault();
    currentCalculation = $(this).text();
    console.log('updated currentCalculation:', currentCalculation);
  }

  // Updating the DOM with this GET route
  function getCalculationHistory() {

    $.ajax({
      method: 'GET',
      url: '/calculations',
    }).then(
      function (response) {
        console.log('GET /calculations response:', response);
  
        updateDomWithEquationHistory(response);
      }
    ).catch(
      function (error) {
        console.log('GET /calculations error:', error);
      }
    )
  }

  function updateDomWithEquationHistory(equations) {
    // equations is an array of equation objects.
  
    let newestAnswer = equations[equations.length - 1].answer;
    $('#newestAnswer').text(`${newestAnswer}`);
  
    $('#calculationHistory').empty();
  
    for (let equation of equations) {
  
      let equationString = `
      ${equation.numberOne} 
      ${equation.opperation} 
      ${equation.numberTwo} = ${equation.answer}`;

      console.log('Render equationString:', equationString);
      $('#calculationHistory').append(`
      <li class="list-item">
        ${equationString}
      </li>`);
    }
  }
  // POST
  function sendToServer(event) {  
    event.preventDefault();
  
    let equation = {   // <- first attempt
      numberOne: 0,
      opperation: "",  // <- '+', '-', '*', '/'
      numberTwo: 0,
    }
  
    equation.numberOne = $('#num-1-input').val();
    equation.opperation = currentCalculation;
    equation.numberTwo = $('#num-2-input').val();
  
    console.log('equation', equation);
  
    $.ajax({
      method: 'POST',
      url: '/calculations',
      data: equation
      }).then( function (response) {
        console.log('POST /equation response:', response);
        getCalculationHistory()

      }).catch(
      function (error) {
        console.log('POST /equation error:', error);
      }
    )
  }

  function clearInputs (event) {
  event.preventDefault();
  console.log('Comlicated version');
  $('#num-1-input').val('');
  $('#num-2-input').val('');
  }