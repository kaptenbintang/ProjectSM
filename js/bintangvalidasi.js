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
        } else if (!validateEmail(email)) {
            alert("Your e-mail is invalid");
        } else {
            alert("Your e-mail message was sent successfully");
            $("#contactform").trigger('reset');
        }
    });
});

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}