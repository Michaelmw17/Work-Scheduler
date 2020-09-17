// Variables
var hoursAvailable = {};
var scheduledHours = [];
var m = moment();
var newDay = moment().hour(0);
var currentTime = m.hour();

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Add clock to timeCurrent id
function clock() {
  var date = moment().format("YYYY Do MMMM, h:mm:ss a");
  $("#timeCurrent").html(date);
}
setInterval(clock, 1000);

// Text area for schedule
for (var hour = 9; hour < 18; hour++) {
  scheduledHours.push(moment({ hour }).format("h  a"));
  $(".container").append(`<div class='row time-block' data-time='${hour}'>
         <!--hour column-->
             <div id='col' class='col-sm col-md-2 hour'>
               <p>${moment({ hour }).format("h  a")}</p>
             </div>
          <!--scheduling column-->
             <div class='col-sm col-md-10 d-flex description'>
                <div class='input-group'>
                  <textarea id="textSpace"class="form-control text-area"></textarea>
                  <div class='input-group-append'>
                    <button class='save-button d-flex justify-center align-center'>
                      <i class='far fa-save fa-2x save-icon'></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>`);
}

//Check the time to determine future, present or past.
$.each($(".time-block"), function (index, value) {
  let dateHour = $(value).attr("data-time");
  if (Number(dateHour) === m.hour()) {
    $(this).find("textarea").addClass("present");
  } else if (Number(dateHour) < m.hour()) {
    $(this).find("textarea").addClass("past").attr("disabled", "disabled");
    $(this).find(".save-button").addClass("disabled").attr("disabled", true);
  } else {
    $(this).find("textarea").addClass("future");
  }
});

console.log(currentTime);

if (currentTime >= 0 && currentTime < 9) {
  localStorage.clear();
}

//Check for local-storage to set value to the object and clearing if currentTime is between 12am and 9am
if (localStorage.getItem("hoursAvailable")) {
  hoursAvailable = JSON.parse(localStorage.getItem("hoursAvailable"));
} else {
  hoursAvailable = {
    9: {
      time: "9",
      value: "",
    },
    10: {
      time: "10",
      value: "",
    },
    11: {
      time: "11",
      value: "",
    },
    12: {
      time: "12",
      value: "",
    },
    13: {
      time: "13",
      value: "",
    },
    14: {
      time: "14",
      value: "",
    },
    15: {
      time: "15",
      value: "",
    },
    16: {
      time: "16",
      value: "",
    },
    17: {
      time: "17",
      value: "",
    },
  };
}

// Set value of hoursAvailable to equal the user input for each row

$(".time-block").each(function () {
  $(this)
    .find(".text-area")
    .val(hoursAvailable[$(this).attr("data-time")].value);
});

//save value to local storage on click
$(".save-button").on("click", function (event) {
  event.preventDefault();

  //set hoursAvailable time attribute
  var timeValue = $(this).closest(".time-block").attr("data-time");

  //set hoursAvailable value attribute
  var textValue = $(this).closest(".time-block").find(".text-area").val();
  hoursAvailable[timeValue].value = textValue;

  //save user input in each object to local storage
  localStorage.setItem("hoursAvailable", JSON.stringify(hoursAvailable));
});
