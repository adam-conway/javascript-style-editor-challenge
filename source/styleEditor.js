$(document).ready(function(){
});

function adjustElements () {
  event.preventDefault();
  data = $('form').serializeArray()
  $(data[0].value).css(data[1].value, data[2].value);
};
