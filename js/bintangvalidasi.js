$(document).ready(function() {
    $("#send").click(function() {
        var name = $("#name").val();
        var email = $("#email").val();
        var subject = $("#subject").val();
        var message = $("#message").val();
        var send = $("#send").val();

        //checking for blank fields
        if (name == '' || email == '' || subject == '' || message == '') {
            alert("Please fill all fields..!!!");
        } else {
            alert("Your e-mail message was sent successfully");
            $("#contactform").trigger('reset');
        }
    });
});