
$('#otpravitZadacha1').click(function () {
    $.ajax({
        url: "/a1.php",
        method: 'POST',
        data: {
            num1 : 1,
            num2 : 2
        }
    }).done(function (data) {
        $('#otvet1').text(data)
    })
})



$('#otpravitZadacha2').click(function () {
    $.ajax({
        url: "/a2.php",
        method: 'POST',
        data: {
           year : '1989'
        }
    }).done(function (data) {
        $('#otvet2').text(data)
    })
})

$('#otpravitZadacha3').click(function () {

    $.post('/a3.php', {
        sex : $('#form1 input[name="sex"]:checked').val(),
        height : $('#form1 input[name="height"]').val()
    }).done(function (data) {
        $('#otvet3').text(data)
    })
})


$('#otpravitZadacha4').click(function () {

    $.post('/a3.php', {
        sex : $('#form2 input[name="sex"]:checked').val(),
        height : $('#form2 input[name="height"]').val()
    }).done(function (data) {
        $('#otvet4').text(data)
    })
})

$('#otpravitZadacha5').click(function () {

    $.post('/mail.php', {
        fio : $('#form3 input[name="fio"]').val(),
        email : $('#form3 input[name="email"]').val(),
        phone : $('#form3 input[name="phone"]').val()
    }).done(function (data) {
        $('#otvet5').text(data)
    })
})


$('#otpravitGood1').click(function () {
    $.ajax({
        url: "/goods.php",
        method: 'GET',
        data: {
            art : '1'
        }
    }).done(function (data) {


        var convert = JSON.parse(data);

        var str = ''

        for(var i in convert){
            var name = i;
            var value = convert[i];

            str= str + '<p>'+name + ' ' + value+'</p>'
        }

        $('#otvet6').html(str)
    })
})

$('#otpravitGood2').click(function () {
    $.ajax({
        url: "/goods.php",
        method: 'GET',
        data: {
            art : '2'
        }
    }).done(function (data) {
        var convert = JSON.parse(data);

        var str = ''

        for(var i in convert){
            var name = i;
            var value = convert[i];

            str= str + '<p>'+name + ' ' + value+'</p>'
        }

        $('#otvet7').html(str)
    })
})