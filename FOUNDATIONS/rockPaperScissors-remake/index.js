//global here choices
const choices = {
   'goku' : { attack: 100, defence: 10, health: 350, image: "images/goku.png"},
   'pikachu': {attack: 350, defence: 10, health: 90, image: "images/pikachu.png"},
   'naruto': { attack: 110, defence: 80, health: 150, image: "images/naruto.png"},
}
// global words to use for combat log
const attacks = ["hit", "strike", "kick", "punch", "headbutt", "bash", "attack", "smite", "elbow", "knee"]

// initial typed text at page load
const initWelcomeText = () => {
    let welcomeText = document.getElementById("welcomeText")
    let i = 0
    const typeText = () => {
        let newText = "Welcome to the Duel."
        if (i < newText.length) {
            welcomeText.textContent += newText[i]
            i++;
            let speed = Math.floor(Math.random()*150) + 100;
            setTimeout(typeText, speed)
        }
    }
    typeText()
}

// timeout function
const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

// update welcome text after 5sec
const updateWelcomeText = async () => {
    let a = document.getElementById("welcomeText")
    a.textContent = 'are you aready'
    await sleep(500)
    a.textContent = 'to fight?'
    await sleep(250)
    a.textContent = 'to survive?'
    await sleep(250)
    a.textContent = 'to be humbled?'
    await sleep(500)
    a.textContent = 'by the power'
    await sleep(250)
    a.textContent = 'of Artificial?'
    await sleep(250)
    a.textContent = 'Intelligence?'
    await sleep(250)
    a.textContent = 'click'
    await sleep(500)
    a.textContent = 'play'
    await sleep(250)
    a.textContent = 'to'
    await sleep(250)
    a.textContent = 'find'
    await sleep(250)
    a.textContent = 'out!'
    await sleep(500)
    a.textContent = 'Press "Play" to start'
}


// scroll to the correct id on the DOM
const scroll = (id) => {
    var element = document.getElementById(id);
    element.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    });
}

//play again button
const playAgain = () => {
    scroll("fighterMenu")
    document.getElementById("combatLogList").textContent=''
}

// display the play button on the page load
const playButtonShow = () => {
    const playButton = document.getElementById("playButton")   
    playButton.classList.toggle("changed")
    playButton.addEventListener("click", () => scroll("fighterMenu"))
    const playAgainButton = document.getElementById("playAgain")
    playAgainButton.addEventListener("click", () => playAgain()) 
} 

// combat countdown
const initCombatText = async () => {
    let vs = document.getElementById("vs")
    vs.classList.toggle("changed")
    vs.textContent = '3'
    await sleep(1000)
    vs.textContent = '2'
    await sleep(1000)
    vs.textContent = '1'
    await sleep(1000)
    vs.textContent = 'GO'
    await sleep(1000)
    vs.textContent = 'VS'
    vs.setAttribute("id", "#vs")
}

// combat text log update
const combatUpdateText = (text) => {
    let combatLogList = document.getElementById("combatLogList")   
    let newLi = document.createElement("li")
    newLi.textContent = text
    combatLogList.appendChild(newLi)
}

// end text
const end = (text) => {
    let summary = document.getElementById("summary")
    summary.textContent = text
}

// combat - text creation, health update, result
const combat = async(playerPick, pcPick) => {
    const pc = choices[`${pcPick}`]
    const player = choices[`${playerPick}`]
    let pcRemainingHealth = pc.health
    let playerRemainingHealth = player.health
    let summary = document.getElementById("summary")
    let end = document.getElementById("end")
    await sleep(3000)
    while (pcRemainingHealth>0 && playerRemainingHealth>0) {
        await sleep(1000)
        let playerDmg = Math.floor(Math.random()*player.attack) - Math.floor(Math.random()*pc.defence)
        let pcDmg = Math.floor(Math.random()*pc.attack) - Math.floor(Math.random()*player.defence)
        pcRemainingHealth = pcRemainingHealth - playerDmg
        playerRemainingHealth = playerRemainingHealth - pcDmg
        combatUpdateText(`You ${attacks[Math.floor(Math.random()*attacks.length)]} ${pcPick.charAt(0).toUpperCase()+pcPick.slice(1)} for ${playerDmg} damage.`)
        combatUpdateText(`${pcPick.charAt(0).toUpperCase()+pcPick.slice(1)} ${attacks[Math.floor(Math.random()*attacks.length)]}s you back for ${pcDmg} damage.`)
        document.getElementById("playerCombatHealth").textContent=playerRemainingHealth
        document.getElementById("pcCombatHealth").textContent=pcRemainingHealth
    }
    if (pcRemainingHealth>=0 && playerRemainingHealth<=0) {
        combatUpdateText(`You died`)
        await sleep(2000)
        scroll("end")
        summary.textContent = "You lost. Very sad."
        end.style.backgroundImage = "url('./images/lost.png')"
        end.style.backgroundSize = "5%"
        end.style.backgroundRepeat = "no-repeat"
        end.style.backgroundPosition = "center"
        return
    }
    if (pcRemainingHealth<=0 && playerRemainingHealth<=0) {
        combatUpdateText(`You both died`)
        await sleep(2000)
        scroll("end")
        summary.textContent = "It's a draw. Noone won."
        end.style.backgroundImage = "url('./images/lost.png')"
        end.style.backgroundSize = "5%"
        end.style.backgroundRepeat = "no-repeat"
        end.style.backgroundPosition = "center"
        return
    }
    if (pcRemainingHealth<=0 && playerRemainingHealth>=0) {
        combatUpdateText(`You won`)
        await sleep(2000)
        scroll("end")
        summary.textContent = "You won, nice!"
        end.style.backgroundImage = "url('./images/win.png')"
        end.style.backgroundSize = "5%"
        end.style.backgroundRepeat = "no-repeat"
        end.style.backgroundPosition = "center"
        return 
    }
}

// health bar init
const updateFightersHealth = (playerPick, pcPick) => {
    let playerCombatHealth = document.getElementById("playerCombatHealth")
    let pcCombatHealth = document.getElementById("pcCombatHealth")
    playerCombatHealth.textContent=choices[`${playerPick}`].health
    pcCombatHealth.textContent=choices[`${pcPick}`].health
}

// update fighter images
const updateFightersPic = (playerPick, pcPick) => {
    let playerCombatImg = document.getElementById("playerCombatImg")
    let pcCombatImg = document.getElementById("pcCombatImg")
    updateFightersHealth(playerPick, pcPick)
    playerCombatImg.src=choices[`${playerPick}`].image
    pcCombatImg.src=choices[`${pcPick}`].image
    initCombatText()
    combat(playerPick, pcPick)
}

// pc pick here
const getComputerChoice = () => {
    let pcPick = Object.keys(choices)[Math.floor(Math.random()*Object.keys(choices).length)]
    return pcPick
}
// player pick hero
const pickFighterImg = (pcPick) => {
    const fighterImgs = document.querySelectorAll(".fighterImg")
    fighterImgs.forEach(fighterImg => {
        fighterImg.addEventListener("click", async () => {
            fighterImg.setAttribute('style', 'border-color: red;')
            await sleep(500)
            scroll("combat")
            let playerPick = fighterImg.id
            await sleep(500)
            fighterImg.setAttribute('style', 'border-color: aqua;')
            updateFightersPic(playerPick, pcPick)
        })
    })
}

// main sequence script
const main = async() => {
    document.addEventListener("DOMContentLoaded", initWelcomeText()) // load initial text
    await sleep(5000) // wait for initial text to be loaded
    updateWelcomeText() // update with more text and
    await sleep(4500) // wait for more text to be updated
    playButtonShow() // play button reveal and scroll to fighters menu
    let pcPick = getComputerChoice()// pc random pick
    pickFighterImg(pcPick)// player pick and combat

}

//run main script
main()