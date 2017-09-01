console.log("javascript running");

function startTime() {
  var h = 0;
  var m = 0;
  var s = 30;
  m = checkTime(m);
  s = checkTime(s);
  document.querySelector('.timer').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM loaded");
  startTime();
});
