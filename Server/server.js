let equations = require('./Modules/calculator_data.js');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

// GET route
app.get('/calculations', (req, res) => {
  console.log('GET /calculations request received!');
  res.send(equations);
})

// POST route
app.post('/calculations', (req, res) => {
  console.log('POST /calculations request received');
  let newEquationAsStrings = req.body;

  validateInputData(newEquationAsStrings);
  // newEquation looks like: { numberOne: '7', opperation: '+', numberTwo: '6' }
  let equation = calculateEquationWithAnswer(newEquationAsStrings);
  // equation looks like: { numberOne: 9, opperation: '*', numberTwo: 4, answer: 36 }

  equations.push(equation);
  console.log('updated equations:', equations);
  res.sendStatus(200);
})



function calculateEquationWithAnswer(newEquationAsStrings) {
  let answer;

  let numberOne = Number(newEquationAsStrings.numberOne);
  let numberTwo = Number(newEquationAsStrings.numberTwo);

  switch (newEquationAsStrings.opperation) {
    case '+':
      answer = numberOne + numberTwo;
      break;
    case '-':
      answer = numberOne - numberTwo;
      break;
    case '*':
      answer = numberOne * numberTwo;
      break;
    case '/':
      answer = numberOne / numberTwo;
      break;
  }

  console.log('answer:', answer);

  let equation = {
    numberOne: numberOne,
    opperation: newEquationAsStrings.opperation,
    numberTwo: numberTwo,
    answer: answer
  }

  console.log('equation inside calculateEquationWithAnswer:', equation);
  return equation
}

app.listen(5000, function() {
    console.log('you started the server! it is running on port 5000.');
  });

