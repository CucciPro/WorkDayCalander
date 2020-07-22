// Text array
var input = [];

// Display date and time
$("#currentDay").append(moment().format("dddd, MMMM Do, YYYY - h:mm a"));

// Store text to local storage
function storedText() {
    
}

// Set text area color
var textColor = function() {
    // Compare current time to the time of the row 
    for (i = 1; i < 10; i++){
        var rowHour = $("#row" + i).find("h6").html();
        var hour = moment(rowHour, "HHA").format("HH");
        var now = moment().format("HH");
        var areaColor = $("#row" + i).find("textarea");

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
    else {
        $("#container").html(<div>"Nice weather we're having, huh?"</div>);    
    } 
}
};

// Check task statuses every 5 minutes
setInterval(function() {
    textColor();
}, 60000);

storedText();
textColor();