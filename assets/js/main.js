function showPopup(message) {
    alert(message)
}

function validateEmail(email) {
    return /^\S+@\S+\.\S+$/.test(email)
}

function handleFormSubmit(ev) {

    const e = $("#email").val()
    let m = []

    if (!validateEmail(e)) {
        m.push("Please enter a valid email")
        ev.preventDefault()
    }

    showPopup(
        m.length
            ? m.join("\n")
            : "OK"
    )
}

const distances = {
    "A-B": 4400,
    "A-C": 7400,
    "A-D": 7700,
    "A-E": 5900,
    "A-F": 10400,
    "A-G": 6700,

    "B-C": 6000,
    "B-D": 2400,
    "B-E": 3900,
    "B-F": 5900,
    "B-G": 10000,

    "C-D": 5800,
    "C-E": 10300,
    "C-F": 6800,
    "C-G": 8400,

    "D-E": 4200,
    "D-F": 4300,
    "D-G": 9300,

    "E-F": 4600,
    "E-G": 5900,

    "F-G": 5300
}

function getDistance(a, b) {

    const key = [a, b]
        .sort()
        .join("-")

    return distances[key] ?? "Unknown"
}

function handleDistanceCheck() {

    const a = $("#pointA").val()
    const b = $("#pointB").val()

    if (a === b) {
        showPopup("Choose two different locations")
        return
    }

    showPopup(
        "Distance: " +
        getDistance(a, b) +
        " mi"
    )
}

function pageDown() {
    showPopup("Service temporarily down")
}

function info(t) {
    showPopup(t)
}

function nav(items) {
    showPopup(items.join("\n"))
}

$(function () {

    $("#myForm").on(
        "submit",
        handleFormSubmit
    )

    $("#distanceBtn").on(
        "click",
        handleDistanceCheck
    )

    $("#infoBtn").on(
      "click", function () {
      info($(this).data("message"))
    })

    $("#navBtn").on("click", function () {
        nav($(this).data("items"))
    })

})