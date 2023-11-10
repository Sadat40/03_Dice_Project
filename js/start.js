document.querySelector(".start").addEventListener("click", function () {
     if (document.querySelector(".rounds").textContent  == "") { // if empty
        document.querySelector(".msg").textContent = "Please enter an odd number"
     }

     else {
        let val = Number(document.querySelector(".start").value)
        if (val % 2 == 1) // if odd, then continue to game page
            window.location.replace("game.html")
     }
     
}
);