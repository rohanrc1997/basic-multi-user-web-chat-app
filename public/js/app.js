var socket = io();

socket.on('connect', function() {
    console.log("CONNECTED TO SOCKET SEREVR");
});

socket.on('message', function(message) {
    console.log("New Message: ");
    console.log(message.text);
});

var $form = jQuery('#message-form');

$form.on('submit', function() {
    event.preventDefault();
    var $msg = $form.find('input[name=message]');
    socket.emit('message', {
        text: $msg.val()
    });
    $msg.val('');

});
