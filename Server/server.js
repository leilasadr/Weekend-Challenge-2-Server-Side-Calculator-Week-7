let equations = require('./Modules/calculator_data.js');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/calculations', (req, res) => {
  console.log('GET /calculations request received!');
  res.send(equations);
})

// app.post('/calculations', (req, res) => {
//     let num1 = Number(req.body.num1);
//     let num2 = Number(req.body.num2);
//     let operation = req.body.operation;
//     let resNum = calculate(num1, num2, operation);
    
//     // adding the calculation to the history
//     calculationS.addCalculation(num1, num2, operation, resNum);
    
//     console.log(`POST /calculations - ${num1} ${operation} ${num2} = ${resNum}`);
//     res.send({ resNum: resNum });
//   });

app.listen(5000, function() {
    console.log('you started the server! it is running on port 5000.');
  });

