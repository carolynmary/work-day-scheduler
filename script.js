$(document).ready(function () {
    // add current day and date with moments to #currentDay
    $("#currentDay").text(moment().format('LLLL'));

    // read and display from local storage events already saved
    function getAllEvents() {
        // write the value in the .descrip field of the matching parent id/key
        $("#hour-09").children(".description").text(localStorage.getItem("hour-09"));
        $("#hour-10").children(".description").text(localStorage.getItem("hour-10"));
        $("#hour-11").children(".description").text(localStorage.getItem("hour-11"));
        $("#hour-12").children(".description").text(localStorage.getItem("hour-12"));
        $("#hour-13").children(".description").text(localStorage.getItem("hour-13"));
        $("#hour-14").children(".description").text(localStorage.getItem("hour-14"));
        $("#hour-15").children(".description").text(localStorage.getItem("hour-15"));
        $("#hour-16").children(".description").text(localStorage.getItem("hour-16"));
        $("#hour-17").children(".description").text(localStorage.getItem("hour-17"));
    };
    getAllEvents();

    // save user's input to local storage
    $(".saveBtn").click(function () {
        var usersEvent = $(this).siblings(".description").val(); // identifies and saves the users input (value of .description)
        var timeSlot = $(this).parent().attr("id"); // identifies and saves the users time slot hour (#id of parent/container)
        localStorage.setItem(timeSlot, usersEvent); // save usersEvent and timeSlot to localStorage
    });

    // set the row background color according to current time
    function rowColor() {
        $(".time-block").each(function () {
            var currentHour = moment().format("HH"); // get the current hour (24h clock)
            var timeSlot = $(this).attr("id").slice(-2); // get last 2 indexes from #id 
            if (timeSlot < currentHour) {
                $(this).children("textarea").addClass("past");
            }
            else if (timeSlot === currentHour) {
                $(this).children("textarea").addClass("present");
            }
            else if (timeSlot > currentHour) {
                $(this).children("textarea").addClass("future");
            }
        });
        setInterval(rowColor, 60000) // auto run every minute 
    };
    rowColor();
});