// Text array
var input = [];

// Display date and time
$("#currentDay").append(moment().format("dddd, MMMM Do, YYYY - h:mm a"));

// Store text to local storage
function storedText() {
    $(".saveBtn").on("click", function() {
        
        var data = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
    
        // save in localStorage
        localStorage.setItem(time, data);
      });

        // Get localStorage
        for (var i =1; i < 10; i++){

        $("#hour"+ i +" .description").val(localStorage.getItem("hour"+ i));
        
      }
}

// Set text area color
var textColor = function() {
    // Compare current time to the time of the row 
    for (i = 1; i < 10; i++){
        var rowHour = $("#hour" + i).find("h6").html();
        var hour = moment(rowHour, "HHA").format("HH");
        var now = moment().format("HH");
        var areaColor = $("#hour" + i).find("textarea");

    // Conditional statements to color the rows
    if (now === hour) {
        areaColor.removeClass("past future");
        areaColor.addClass("present");
    } else if (now - hour > 0) {
        areaColor.removeClass("future present");
        areaColor.addClass("past");
    } else if (now - hour < 0){
        areaColor.removeClass("past present");
        areaColor.addClass("future");
    }
}
};

// Check task statuses every 5 minutes
setInterval(function() {
    textColor();
}, 60000);

storedText();
textColor();