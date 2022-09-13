import string from "./css";


let str = string

const player = {
    n:0,
    time:0,
    timer: undefined,
    domElements: {
        domText: document.querySelector('#text'),
        html: document.querySelector('#style')
    },
    buttons: {
        '#btnPlay': 'play',
        '#btnPause': 'pause',
        '#btnFast': 'fast',
        '#btnSlow': 'slow'
    },
    eventsBind: () => {
        for (let i in player.buttons) {
            if (player.buttons.hasOwnProperty(i)) {
                let value = player.buttons[i]
                document.querySelector(i).onclick = player[value]
            }
        }
    }
    ,
    init: () => {
        player.play()
        player.eventsBind()
    },
    run: () => {
        player.n += 1
        if (player.n > str.length) {
            window.clearInterval(player.timer)
        }
        player.domElements.domText.innerText = str.substring(0, player.n)
        player.domElements.html.innerHTML = str.substring(0, player.n)
        player.domElements.domText.scrollTop = player.domElements.domText.scrollHeight
    },
    play: () => {
        player.pause()
        player.timer= setInterval(player.run, player.time)
    },
    pause: () => {
        clearInterval(player.timer)
    },
    slow: () => {
        player.pause()
        player.time=50
        player.play()
    },
    fast: () => {
        player.pause()
        player.time=0
        player.play()
    }
}


player.init()



