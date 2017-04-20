var stringText = [];
var total = 0;
var sum = 0;


$('#submit').on('click', startAdd);
$('#reset').on('click', clearForm);

// add text that is inputed//
function startAdd () {
  var addData = $("#textInput").val();
  if ($.isNumeric(addData)){
    total ++;
    sum += parseFloat(addData);
    updateNumbers();
  }
  else {
      stringText.push(addData);
      updateText(addData);
  }
  $('#textInput').val('');

  event.preventDefault();

}

//update numbers entered and display stats//
function updateNumbers () {
  var average = sum/total;
  if(isNaN(average)) {
    average = 0;
  }
  $('#count').text(total);
  $('#average').text(average);
  $('#sum').text(sum);
}

//update strings entered and display stats//
function updateText(addData) {
  var text = addData.toLowerCase().split(" ");
  
  $('#conCat').text(stringText.join(' '));
  $('#stringsTotal').text(stringText.length);
}

//clear numbers and strings stats//
function clearForm() {
  stringText = [];
  total = 0;
  sum = 0;
  $('#conCat').text("");
  $('#stringsTotal').text(stringText.length);

  updateNumbers();
  updateText();
}
