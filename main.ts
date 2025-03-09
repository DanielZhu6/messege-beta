enum RadioMessage {
    message1 = 49434
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    message = game.askForString("Enter Message", 24)
    // Send message to all players
    radio.sendString(message)
})
radio.onReceivedString(function (receivedMessage) {
    Notification.notify("Notification!")
    // Show received message
    game.splash("Message: " + receivedMessage)
})
let message = ""
game.showLongText("Welcome to The Message Beta", DialogLayout.Bottom)
// All players must be in the same group
radio.setGroup(1)
