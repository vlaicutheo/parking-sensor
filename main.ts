let distance = 0
input.onButtonPressed(Button.A, function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 30)
    while (true) {
        while (distance > 60 && distance <= 100) {
            basic.pause(1000)
            music.playTone(988, music.beat(BeatFraction.Whole))
        }
        while (distance > 30 && distance <= 60) {
            basic.pause(500)
            music.playTone(988, music.beat(BeatFraction.Whole))
        }
        while (distance > 10 && distance <= 30) {
            basic.pause(200)
            music.playTone(988, music.beat(BeatFraction.Whole))
        }
        while (distance <= 10) {
            basic.pause(200)
            maqueen.motorStop(maqueen.Motors.All)
        }
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    maqueen.motorStop(maqueen.Motors.All)
})
basic.forever(function () {
    distance = maqueen.Ultrasonic(PingUnit.Centimeters)
    basic.pause(100)
})
