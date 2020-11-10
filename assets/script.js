$("#currentDay").text(moment().format('dddd MMMM Do YYYY'))

let hour = parseInt(moment().format("HH"))

for (let i = 0; i < 25; i++) {
    if (i > hour) {
        $("#" + i).addClass("future")
    } else if (i < hour) {
        $("#" + i).addClass("past")
    } else if (i === hour) {
        $("#" + i).addClass("present")
    }
}


