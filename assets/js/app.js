jQuery(document).ready(function ($) {

    $(window).on('load', function () {

        setTimeout( function(){  $('.lt-loader').css({
            'opacity': '0.5'
        })} , 2000);
         $('.lt-loader').delay(2000).fadeOut();
    })
    $('#ltForm').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.lt-section-2').offset().top
        }, 1000);
    })

    var form = $("#contact");
   /* form.validate({
        errorPlacement: function errorPlacement(error, element) { element.before(error); },
        rules: {
            confirm: {
                equalTo: "#password"
            }
        }
    });*/
    form.children("div").steps({
        headerTag: "h3",
        bodyTag: "section",
        transitionEffect: "slideLeft",
        onStepChanging: function (event, currentIndex, newIndex)
        {
            form.validate().settings.ignore = ":disabled,:hidden";
            $('.wizard-content_email').text($('#inputEmail').val());
            $('.wizard-content_name').text($('#inputName').val());
            var conceptName = $('#idpc_dropdown').find(":selected").text();
            $('.wizard-content_address').text(conceptName);
            return form.valid();

        },
        onFinishing: function (event, currentIndex)
        {
            form.validate().settings.ignore = ":disabled";


            return form.valid();
        },
        onFinished: function (event, currentIndex)
        {
            $('.wizard-final').children('p').hide();
            $(".wizard-final").append('<p>Thank you for you request!<br/>We will be in touch shortly.</p>');

        }
    });

    $('#postcode_lookup_field').setupPostcodeLookup({
        // Set your API key
        api_key: 'ak_jjaimvwtM1RUXLcZMWapMXCXXoGiM',
        // Pass in CSS selectors pointing to your input fields to pipe the results
        output_fields: {
            line_1: '#first_line',
            line_2: '#second_line',
            line_3: '#third_line',
            post_town: '#post_town',
            postcode: '#postcode'
        }
    });
})