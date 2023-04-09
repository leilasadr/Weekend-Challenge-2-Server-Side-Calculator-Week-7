let calculationS = require('./Modules/calculator_data.js');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

let numberToCalculate = calculationS.calculate();
console.log('numberToCalculate:', numberToCalculate);

app.get('/calculations', (req, res) => {
    let calculationHistory = calculationS.getCalculationHistory();
    console.log('GET/calculations');
    res.send(calculationHistory);
})

app.listen(5000, function() {
    console.log('you started the server! it is running on port 5000.');
  });

