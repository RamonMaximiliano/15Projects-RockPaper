let choices = document.querySelectorAll("img")

let userPoints = 0
let aiPoints = 0

for (choice of choices) {
    choice.addEventListener("click", function clicked(item) {
        let userChoice = item.target.id
        let aiOptions = ["fists", "hands", "victory"]
        let aiChosed = Math.floor(Math.random() * 3)
        let aiChoice = aiOptions[aiChosed]
        document.getElementById("fists").classList.remove("computerClicked")
        document.getElementById("hands").classList.remove("computerClicked")
        document.getElementById("victory").classList.remove("computerClicked")

        document.getElementById("fists").classList.remove("userClicked")
        document.getElementById("hands").classList.remove("userClicked")
        document.getElementById("victory").classList.remove("userClicked")

        document.getElementById("fists").classList.remove("isTie")
        document.getElementById("hands").classList.remove("isTie")
        document.getElementById("victory").classList.remove("isTie")

        if (aiChoice == userChoice) {
            document.getElementById(userChoice).classList.add("isTie")
        } else {
            document.getElementById(aiChoice).classList.add("computerClicked")
            document.getElementById(userChoice).classList.add("userClicked")
        }

        if (userPoints == 10) {
            window.alert("The game is finished, the USER has won!!!")
        }
        else if (aiPoints == 10) {
            window.alert("The game is finished, the AI has won!!!")
        }
        else if (userChoice == aiChoice) {
            document.querySelector(".result").classList.remove("nobodyWins")
            document.querySelector(".result").classList.remove("userWins")
            document.querySelector(".result").classList.remove("aiWins")
            document.querySelector(".result").classList.add("nobodyWins")
            document.querySelector(".result").innerHTML = "It's a tie!"
        }
        else if (userChoice == "fists" && aiChoice == "hands") {
            aiPoints += 1
            document.querySelector(".result").classList.remove("nobodyWins")
            document.querySelector(".result").classList.remove("userWins")
            document.querySelector(".result").classList.remove("aiWins")
            document.querySelector(".result").classList.add("aiWins")
            document.querySelector(".result").innerHTML = "AI Wins!"
            document.querySelector(".computer-score").innerHTML = `Computer: ${aiPoints}`
        }
        else if (userChoice == "fists" && aiChoice == "victory") {
            userPoints += 1
            document.querySelector(".result").classList.remove("nobodyWins")
            document.querySelector(".result").classList.remove("userWins")
            document.querySelector(".result").classList.remove("aiWins")
            document.querySelector(".result").classList.add("userWins")
            document.querySelector(".result").innerHTML = "User Wins!"
            document.querySelector(".user-score").innerHTML = `User: ${userPoints}`
        }
        else if (userChoice == "hands" && aiChoice == "victory") {
            aiPoints += 1
            document.querySelector(".result").classList.remove("nobodyWins")
            document.querySelector(".result").classList.remove("userWins")
            document.querySelector(".result").classList.remove("aiWins")
            document.querySelector(".result").classList.add("aiWins")
            document.querySelector(".result").innerHTML = "AI Wins!"
            document.querySelector(".computer-score").innerHTML = `Computer: ${aiPoints}`
        }
        else if (userChoice == "hands" && aiChoice == "fists") {
            userPoints += 1
            document.querySelector(".result").classList.remove("nobodyWins")
            document.querySelector(".result").classList.remove("userWins")
            document.querySelector(".result").classList.remove("aiWins")
            document.querySelector(".result").classList.add("userWins")
            document.querySelector(".result").innerHTML = "User Wins!"
            document.querySelector(".user-score").innerHTML = `User: ${userPoints}`
        }
        else if (userChoice == "victory" && aiChoice == "hands") {
            userPoints += 1
            document.querySelector(".result").classList.remove("nobodyWins")
            document.querySelector(".result").classList.remove("userWins")
            document.querySelector(".result").classList.remove("aiWins")
            document.querySelector(".result").classList.add("userWins")
            document.querySelector(".result").innerHTML = "User Wins!"
            document.querySelector(".user-score").innerHTML = `User: ${userPoints}`
        }
        else if (userChoice == "victory" && aiChoice == "fists") {
            aiPoints += 1
            document.querySelector(".result").classList.remove("nobodyWins")
            document.querySelector(".result").classList.remove("userWins")
            document.querySelector(".result").classList.remove("aiWins")
            document.querySelector(".result").classList.add("aiWins")
            document.querySelector(".result").innerHTML = "AI Wins!"
            document.querySelector(".computer-score").innerHTML = `Computer: ${aiPoints}`
        }
    })
}

function restart() {
    window.location.reload()
}

