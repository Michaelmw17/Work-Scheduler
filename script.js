// Variables
var availableHours = {};
var scheduledHours = [];
var m = moment();
var newDay = moment().hour(0);
var currentTime = m.hour();

// Add clock to timeCurrent id
function clock() {
  var date = moment().format("YYYY Do MMMM, h:mm:ss a");
  $("#timeCurrent").html(date);
}
setInterval(clock, 1000);
