radio.onReceivedNumber(function (receivedNumber) {
    patata = receivedNumber
})
input.onButtonPressed(Button.AB, function () {
    patata = randint(10, 20)
})
input.onGesture(Gesture.Shake, function () {
    if (patata > 0) {
        radio.sendNumber(patata)
        patata = -1
    }
})
let patata = 0
patata = -1
radio.setGroup(1)
basic.forever(function () {
    if (patata == 0) {
        basic.showIcon(IconNames.Skull)
    }
    if (patata == 0) {
        basic.clearScreen()
    }
    if (patata == 0) {
        basic.showIcon(IconNames.Chessboard)
        patata += -1
    }
})
