

function clock (seconds) {
  var days = Math.floor(seconds / (60 * 60 * 24));
  var hours = Math.floor(seconds / (60 * 60)) % 24;
  var minutes = Math.floor(seconds / 60) % 60;
  var seconds = seconds % 60;

  return days + "d " +hours + "h " + minutes + "m " + seconds + "s "
}

console.log(clock(90000))


