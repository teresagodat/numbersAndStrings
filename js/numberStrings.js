var stringText = [];
var total = 0;
var sum = 0;


$('#submit').on('click', startAdd);
$('#reset').on('click', clearForm);


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

function updateNumbers () {
  var average = sum/total;
  if(isNaN(average)) {
    average = 0;
  }
  $('#count').text(total);
  $('#average').text(average);
  $('#sum').text(sum);
}

function updateText(addData) {
  var text = addData.toLowerCase().split(" ");
  
  $('#conCat').text(stringText.join(' '));
  $('#stringsTotal').text(stringText.length);
}

function clearForm() {
  stringText = [];
  total = 0;
  sum = 0;
  $('#conCat').text("");
  $('#stingsTotal').text(stringText.length);

  updateNumbers();
}
