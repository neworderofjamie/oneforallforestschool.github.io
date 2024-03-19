$(function() {
    $("#contactForm :input").change(function() {
        var name = $("#contactForm #name").val();
        var email = $("#contactForm #email").val();
        var phone = $("#contactForm #phone").val();
        var message = $("#contactForm #message").val();
        
        var str = "mailto:oneforallforestschool@outlook.com?subject=enquiry&body=";
        str += "Name: " + name + "%0D";
        str += "Email: " + email + "%0D";
        if(phone.length > 0) {
            str += "Phone: " + phone + "%0D";
        }
        str += "%0D%0D" + message;
        $("#contactForm").attr("action", str);
    });
    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },

        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});
