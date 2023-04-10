$(document).ready(onReady);

function onReady () {

 getCalculationHistory();

  $('#plus-button').on('click', handleButtonClick);
  $('#minus-button').on('click', handleButtonClick);
  $('#times-button').on('click', handleButtonClick);
  $('#divide-button').on('click', handleButtonClick);
  $('#equals-button').on('click', handleButtonClick);
  $('#clear-button').on('click', handleClearButtonClick);

  
 

 
}
