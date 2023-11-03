var timeDisplayEl = $("#currentDay");
var textareaEl = $("textarea");

var tasks = [];

$(function () {
  init();

  function displayTime() {
    var rightNow = dayjs().format("dddd, MMMM D");
    timeDisplayEl.text(rightNow);
  }
  displayTime();

  function changeColor() {
    // select all textareas, compare id of textarea to current hour  and add class based on comparison

    // gets current hour
    var currentHour = dayjs().hour();

    textareaEl.each(function () {
      var scheduledTime = parseInt($(this).attr("id"));

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

  $(".saveBtn").click(function (e) {
    // when save button is clicked, grab id from parent div and use as key in Local storage, take user input and save to local storage
    e.preventDefault();

    var userInput = $(this).siblings(".description").val();
    // console.log(userInput)

    var key = $(this).parent().attr("id");
    // console.log(key)

    tasks.push({ key, userInput });

    localStorage.setItem("event", JSON.stringify(tasks));
  });

  function init() {
    storedTasks = JSON.parse(localStorage.getItem("event"));

    if (storedTasks !== null) {
      tasks = storedTasks;

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

// *** not working
// function init() {
//   storedTasks = JSON.parse(localStorage.getItem('event'))
// if (storedTasks !== null) {
//   tasks = storedTasks

// }

// console.log(tasks)

// }

// ***** good one

// $('.saveBtn').click(function(){
//   // when save button is clicked, grab id from parent div and use as key in Local storage, take user input and save to local storage

//   var key = $(this).parent().attr('id')
//   console.log(key)

//   var userInput = $(this).siblings('.input').val();

//   localStorage.setItem(key, userInput)
// })

// $("#hour-9 .input").val(localStorage.getItem("hour-9"));
// $("#hour-10 .input").val(localStorage.getItem("hour-10"));

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
