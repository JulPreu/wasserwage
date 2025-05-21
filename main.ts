let neigung_x = 0
let neigung_y = 0
basic.forever(function () {
    neigung_x = input.rotation(Rotation.Pitch)
    neigung_y = input.rotation(Rotation.Roll)
    if (Math.abs(neigung_x) < 2 && Math.abs(neigung_y) < 2) {
        basic.setLedColors(0x00ff00, 0x00ff00, 0x00ff00)
    } else {
        basic.setLedColors(0xff0000, 0xff0000, 0xff0000)
    }
})
