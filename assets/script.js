//  Add's the current date to the header with id currentDay
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'))

//  allows me to use the hours in military time i a variable
let hour = parseInt(moment().format("HH"))

//  I used the for loop to access the id's with a value of 9-17  and used the same i variable to set the localStorage of the description areas using the same method of concatenating i to the id to complete it.
for (let i = 9; i < 18; i++) {
    if (i > hour) {
        $("#" + i).addClass("future")
    } else if (i < hour) {
        $("#" + i).addClass("past")
    } else {
        $("#" + i).addClass("present")
    }
    var localStore = localStorage.getItem("hour" + i)
    if (localStore !== null) {
        $("#text_" + i).val(localStore)
    }
}

// created a save function to acces the information written in the description field and for it to be saved in the localStorage.
$(".saveBtn").on("click", function () {
    var clicked = $(this).attr("data-timing")
    var text = $("#text_" + clicked).val()
    localStorage.setItem("hour" + clicked, text)
})