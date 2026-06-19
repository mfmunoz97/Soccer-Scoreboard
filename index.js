let homeScoreEl = document.getElementById("home-score-counter")

let guestScoreEl = document.getElementById("guest-score-counter")

let homeScore = 0

function addHome(score) {
    homeScore += score
    homeScoreEl.textContent = homeScore
}


let guestScore = 0 

function addGuest(score) {
    guestScore += score
    guestScoreEl.textContent = guestScore
}

// function add2guest() {
//     guestScore += 2
//     guestScoreEl.textContent= guestScore
// }

// function add3guest() {
//     guestScore += 3
//     guestScoreEl.textContent = guestScore
// }

function reset() {
    guestScore = 0
    guestScoreEl.textContent = guestScore
    homeScore = 0
    homeScoreEl.textContent = homeScore
    }