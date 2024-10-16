let Artist = ""
let list = [
"Deco*27",
"HoYo-MiX",
"Kanaria",
"Ado",
"Cosmograph",
"Lappy"
]
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        Artist = list._pickRandom()
        basic.showString("" + (Artist))
        basic.pause(1000)
        basic.showString("" + (Artist))
        basic.showIcon(IconNames.Yes)
        basic.pause(5000)
        basic.clearScreen()
    }
})
