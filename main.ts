led.setBrightness(63)
basic.showIcon(IconNames.SmallDiamond)
basic.pause(1000)
basic.clearScreen()
basic.forever(function () {
    if (input.lightLevel() <= 6) {
        basic.showIcon(IconNames.SmallDiamond)
        basic.pause(1000)
        basic.showIcon(IconNames.Diamond)
        basic.pause(2000)
    } else {
        basic.clearScreen()
    }
})
