var countUp = [""];
var pingPong = function(number) {
  for (var i = 1; i <= number; i ++) {
    alert(countUp);
    countUp += number[i];
    console.log(countUp);
    if (i % 3 === 0) {
      return "ping";
    } else if (i % 5 === 0) {
      return "pong";
    } else if (i % 15 === 0) {
      return "pingpong";
    } else {
      return "Please enter a number.";
    }
  }
    console.log(pingPong);
    alert(2);
};

$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var output = pingPong(number);
    alert(3);
    $("#countUp").append(countUp);
      $("#output").text(output);
  });
});
