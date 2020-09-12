
// Variables
var scheduledHours = [];
var availableHours = {};
var m = moment();
var newDay = moment().hour(0);
var currentTime = m.hour();

// Add clock to timeCurrent id
function clock() {
    var dateString = moment().format("MMMM Do YYYY, h:mm:ss a");
    $("#timeCurrent").html(dateString);
  }
  setInterval(clock, 1000);

