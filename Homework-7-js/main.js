$(document).ready(function () {


    $('#zadacha1 #dobavit').click(function () {

        $('#zadacha1 #inputs').append('<input type="text" placeholder="text" />')

    });

    $('#zadacha1 #ubrat').click(function () {
        var inputs = $('#zadacha1 #inputs input[type=text]');

        if (inputs.length > 1) {
            $('#zadacha1 #inputs input[type=text]').last().remove()
        }

    });

    $('#sobrat').click(function () {

        var tip_sbora = $('#zadacha1 input[name=tip_sbora]:checked').val();

        var inputs = $(' #zadacha1 #inputs input[type=text]');

        var value = '';

        $('.error').each(function () {
            $(this).remove();
        });
        $('.error_style').each(function () {
            $(this).removeClass('error_style');
        })

        var status = true;

        inputs.each(function (input_num) {

            if ($(this).val() === '') {
                status = false;
                $(this).addClass('error_style');
                $(this).after('<div class="error"> заполните поле </div>')
            }

            if (tip_sbora == 1) {
                if (input_num % tip_sbora === 0) {
                    value += " " + $(this).val()
                }
            } else if (tip_sbora == 2) {
                if (input_num % tip_sbora === 0) {
                    value += " " + $(this).val()
                }
            } else if (tip_sbora == 0) {
                if (input_num % 2 !== 0) {
                    value += " " + $(this).val()
                    console.log(value);
                }
            }


        })


        $('#zadacha1 #textarea').val(value);
    });

    $('#zadacha2 #opcia_1').click(function () {

        $('#zadacha1 #vibrannaya_opcia').text('опция 1')
    })

    $('#zadacha2 #opcia_2').click(function () {

        $('#zadacha1 #vibrannaya_opcia').text('опция 2')
    })

    $('.spisok').on('click','p',function () {
         console.log($(this).hasClass('error'))
        if ($(this).hasClass('error')) {
            $(this).removeClass('error')
        } else {
            $(this).addClass('error')
        }
    });
    $('#dovit_v_spisok').click(function () {
        var value = $('#dobavit_element').val();

        $('.spisok').append('<p class="element">'+value+'</p>');
    })


    $('.img1').mouseenter(function () {
        $(this).parent().find('.text').show('fast')
    })


    $('.img1').mouseleave(function () {
        $(this).parent().find('.text').hide('slow')
    })


    $('.img2').mouseenter(function () {
        $(this).parent().find('.text').show('fast')
    })


    $('.img2').mouseleave(function () {
        $(this).parent().find('.text').hide('slow')
    })


    $('.img3').mouseenter(function () {
        $(this).parent().find('.text').show('fast')
    })


    $('.img3').mouseleave(function () {
        $(this).parent().find('.text').hide('slow')
    })


    $('.link').mouseenter(function () {
        var title = $(this).attr('title');
        var link = $(this).attr('href');
        var target = $(this).attr('target');

         console.log(target, title)
        if(target === undefined || title === undefined) {
            $('.show_link').text("Вы не заполнинили target или title у элемента").show();
        }else{
            $('.show_link').text(' title: ' + title + ' link: ' + link + ' target: ' + target).show();
        }

    });

    $('.link').mouseleave(function () {

        $('.show_link').text('').hide();
    })


    $('.img_link').mouseenter(function () {
        var src = $(this).attr('src');
        var alt = $(this).attr('alt');

        if(src === undefined || alt === undefined) {
            $('.show_link').text("Вы не заполнинили alt у элемента").show();
        }else{
            $('.show_link').text(' src: ' + src + ' alt: ' + alt ).show();
        }

    });

    $('.img_link').mouseleave(function () {

        $('.show_link').text('').hide();
    })

    $('.img_link').each(function () {
        var alt = $(this).attr('alt');

        if(alt === undefined) {
            $(this).addClass('error_style_img')
        }
    });



    var l = $('#zadacha_9 .heading');

    var allowHeading = {
        'H1' : 0,
        'H2' : 0,
        'H3' : 0,
        'H4' : 0,
        'H5' : 0,
        'H6' : 0
    }
    var i = 0;
    $('#zadacha_9 .heading').each(function () {
        var name = $(this).get(0).tagName;

        if(name && $(this).text() !== ''){
            i++;
            allowHeading[name] = allowHeading[name] + 1;
        }
        if(l.length - 1 === i) {
            for(var param in allowHeading) {
                if(allowHeading[param] === 0){
                    $('#zadacha_9 .count_error').text('Вы не добавили  ' + param + '  ')
                }
            }
        }
    });



    $('#zadacha_9 .count').text(' ' +
        'count H1 : ' + allowHeading['H1'] + ' ' +
        'count H2 : ' + allowHeading['H2'] + ' ' +
        'count H3 : ' + allowHeading['H3'] + ' ' +
        'count H4 : ' + allowHeading['H4'] + ' ' +
        'count H5 : ' + allowHeading['H5'] + ' ' +
        'count H6 : ' + allowHeading['H6'] );


    var meta = $('meta');


    var meta_types = {
        'title' : 0,
        'description' : 0,
        'keywords' : 0
    };

    meta.each(function () {
        var name = $(this).attr('name');

        for(var param in meta_types){
            if(name === param && $(this).attr('content') !== '') {
                meta_types[param]++
            }
        }

        for(var nameParam in meta_types){
            if(meta_types[nameParam] === 0) {
                $('#zadacha_10 .count_error').text('Вы не добавили  ' + nameParam + '  ')
            }
        }
    })


    $('#zadacha_10 .count').text(' ' +
        'meta title : ' + meta_types['title'] + ' ' +
        'meta description : ' + meta_types['description'] + ' ' +
        'meta keywords : ' + meta_types['keywords']
    );

});