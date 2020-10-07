basic.forever(function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P2))
    pins.servoWritePin(AnalogPin.P2, pins.map(
    0,
    0,
    180,
    180,
    4
    ))
    robotbit.Servo(robotbit.Servos.S3, pins.analogReadPin(AnalogPin.P2))
})
