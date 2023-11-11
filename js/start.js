document.querySelector(".start").addEventListener("click", function () {
     if (document.querySelector(".rounds").value  == "") { // if empty
        document.querySelector(".msg").textContent = "Please enter a number"
     }

     else {
        let val = Number(document.querySelector(".rounds").value)
        if (val%2===1){
         // If it's a valid number and an odd number, then continue to the game page
         document.querySelector(".msg").value = ""
         window.location.replace("game.html");
     } else {
         // Handle the case where the content is not a valid odd number
         document.querySelector(".msg").textContent = "Please enter an odd number";
     } 
}}
);