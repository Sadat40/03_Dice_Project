document.querySelector(".home").addEventListener("click", function() {
    window.location.replace("start.html")
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


    document.querySelector(".roll1").addEventListener("click", function() {
    let roll = getRandomInt(1,6)
    document.querySelector(".player1").textContent = `Player 1 rolled: ${roll}`
})

document.querySelector(".roll2").addEventListener("click", function() {
    let roll = getRandomInt(1,6)
    document.querySelector(".player2").textContent = `Player 2 rolled: ${roll}`
})
