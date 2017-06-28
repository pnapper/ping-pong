var calcResult = function(i) {
  if (i % 15 === 0) {
    return "pingpong";
  } else if (i % 5 === 0) {
    return "pong";
  } else if (i % 3 === 0) {
    return "ping";
  } else {
    return i;
  }
}

var pingPong = function(number) {
  for (var i = 1; i <= number; i ++) {
    //console.log(calcResult(i));
    $("#countUp").append(calcResult(i) + "<br>");
  }
}

$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    pingPong(number);
  });
});
