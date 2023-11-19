/*
Project: Hero and XP Level
Author: Eduardo Nascimento
Date: 11/19/2023 
*/

//Using the readline-sync library to input user data
const readline = require('readline-sync')
let name = ""
let heroLevel = ""
console.log("***************************")
console.log("***** INPUT DATA HERO *****")
console.log("***************************")
//Enter hero's name, IF empty the message repeat
while (!name) {
    name = readline.question('Enter Heros name: ')
    if (!name){
        console.warn("Input valid name, please!")
    }              
}
//Enter hero's XP valeu    
let xp = readline.questionInt("Enter Heros XP value: ")
readline.promptLoop
//Print hero's data resume
console.log("\n******** HERO'S DATA SUMMARY ********")
console.log("name: " +name)
console.log("XP: " +xp)
//Set hero's XP Level
if (xp <= 1000){
    heroLevel = "Ferro"
    } else if (xp > 1000 && xp <= 2000){
        heroLevel = "Bronze"
        } else if (xp > 2000 && xp <= 5000){
            heroLevel = "Prata"
            } else if (xp > 5000 && xp <= 7000){
                heroLevel = "Ouro"
                } else if (xp > 7000 && xp <= 8000){
                    heroLevel = "Platina"
                    } else if (xp > 8000 && xp <= 9000){
                        heroLevel = "Ascendente"
                        } else if (xp > 9000 && xp <= 10000){
                            heroLevel = "Imortal"
                            } else {
                                heroLevel = "Radiante"
                                }     
console.log("The hero " +name+ " is at " +heroLevel+ " level!")
console.log("*************************************")
