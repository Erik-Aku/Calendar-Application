var timeDisplayEl = $("#currentDay");
var textareaEl = $("textarea");

//Used to save key pairs in local storage
var tasks = [];

$(function () {
  //renders local storage on page load
  init();

  //Displays current day and time in header
  function displayTime() {
    var rightNow = dayjs().format("dddd, MMMM D");
    timeDisplayEl.text(rightNow);
  }

  displayTime();

  //Select all textareas, compare id of textarea to current hour and add class based on comparison
  function changeColor() {
    // gets current hour
    var currentHour = dayjs().hour();

    textareaEl.each(function () {
      var scheduledTime = parseInt($(this).attr("id"));

      //Color change base on current hour
      if (scheduledTime === currentHour) {
        $(this).addClass("present");
      } else if (scheduledTime < currentHour) {
        $(this).addClass("past");
      } else {
        $(this).addClass("future");
      }
    });
  }

  changeColor();

  //When save button is clicked, grab id from parent div and use as key in Local storage, take user input and save to local storage
  $(".saveBtn").click(function (e) {
    e.preventDefault();

    var userInput = $(this).siblings(".description").val();
    var key = $(this).parent().attr("id");

    tasks.push({ key, userInput });

    //Save to local storage
    localStorage.setItem("event", JSON.stringify(tasks));
  });

  //renders calender events on page load from local storage
  function init() {
    storedTasks = JSON.parse(localStorage.getItem("event"));

    if (storedTasks !== null) {
      tasks = storedTasks;

      //Loops through local storage, checks hour-x id of each object and displays the appropriate text to each calender section
      for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].key === "hour-9") {
          $("#hour-9 .description").text(tasks[i].userInput);
        }
        if (tasks[i].key === "hour-10") {
          $("#hour-10 .description").text(tasks[i].userInput);
        }
        if (tasks[i].key === "hour-11") {
          $("#hour-11 .description").text(tasks[i].userInput);
        }
        if (tasks[i].key === "hour-12") {
          $("#hour-12 .description").text(tasks[i].userInput);
        }
        if (tasks[i].key === "hour-1") {
          $("#hour-1 .description").text(tasks[i].userInput);
        }
        if (tasks[i].key === "hour-2") {
          $("#hour-2 .description").text(tasks[i].userInput);
        }
        if (tasks[i].key === "hour-3") {
          $("#hour-3 .description").text(tasks[i].userInput);
        }
        if (tasks[i].key === "hour-4") {
          $("#hour-4 .description").text(tasks[i].userInput);
        }
        if (tasks[i].key === "hour-5") {
          $("#hour-5 .description").text(tasks[i].userInput);
        }
      }
    }
  }
});
