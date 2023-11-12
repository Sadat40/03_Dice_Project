var currentRound, totalRounds

function start(){
    document.querySelector(".start").addEventListener("click", function () {
         if (document.querySelector(".rounds").value  == "") { // if empty
            document.querySelector(".msg").textContent = "Please enter a number"
         }
    
         else {
            let val = Number(document.querySelector(".rounds").value)
            if (val%2===1){  // if odd
             document.querySelector(".msg").value = ""
             totalRounds = val
             document.getElementById("intial").style.display = "none"

         } else {
             document.querySelector(".msg").textContent = "Please enter an odd number";
         } 
    }}
    );
    }
    start()

document.querySelector(".roundsNum").textContent = totalRounds

document.querySelector(".home").addEventListener("click", function() {
    window.location.replace("start.html")
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function compareRolls() {
    if (roll1 !== undefined && roll2 !== undefined) {
        if (roll1 > roll2)
            document.querySelector(".first").textContent = `Player 1 rolled ${roll1}, they go first!`;
        else if (roll2 > roll1)
            document.querySelector(".first").textContent = `Player 2 rolled ${roll2}, they go first!`;
        else
            document.querySelector(".first").textContent = "Both players rolled the same number, roll again";
    }
}

function goesFirst() {
    let roll1, roll2;

    document.querySelector(".roll1").addEventListener("click", function() {
        roll1 = getRandomInt(1, 6);
        document.querySelector(".player1").textContent = `Player 1 rolled: ${roll1}`;
        compareRolls();
    });

    document.querySelector(".roll2").addEventListener("click", function() {
        roll2 = getRandomInt(1, 6);
        document.querySelector(".player2").textContent = `Player 2 rolled: ${roll2}`;
        compareRolls();
    });

    function compareRolls() {
        if (roll1 !== undefined && roll2 !== undefined) {
            if (roll1 > roll2)
                document.querySelector(".first").textContent = `Player 1 rolled ${roll1}, they go first!`;
            else if (roll2 > roll1)
                document.querySelector(".first").textContent = `Player 2 rolled ${roll2}, they go first!`;
            else
                document.querySelector(".first").textContent = "Both players rolled the same number, roll again";
        }
    }
}

goesFirst();
