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

// Text area for schedule
for (var hour = 9; hour < 18; hour++) {
  scheduledHours.push(moment({ hour }).format("h a"));
  $(".container").append(`<div class=' row time' data-time='${hour}'>
           <!--hour column-->
               <div class='col-sm col-md-2 hour'>
                 <p>${moment({ hour }).format("h a")}</p>
               </div>
            <!--scheduling column-->
               <div class='col-sm col-md-9 d-flex '>
                  <div class='input-group'>
                    <textarea class="form-control text-area"></textarea>
                    <div class='input-group-append'>
                      <button class='save-button d-flex justify-center align-center'>
                      <i class="far fa-2x fa-save"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>`);
};
