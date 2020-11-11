$("#currentDay").text(moment().format('dddd MMMM Do YYYY'))

let hour = parseInt(moment().format("HH"))

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

for (let i = 9; i < 18; i++) {
    var textInput = $("#text_" + i)
}

$(".saveBtn").on("click", function () {
    var clicked = $(this).attr("data-timing")
    var text = $("#text_" + clicked).val()
    localStorage.setItem("hour" + clicked, text)
})