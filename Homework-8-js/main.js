$(document).ready(function () {
    var remove = [
        'http://',
        'https://',
        'www.',
        '.ua',
        '.de'
    ];

    var replace = {
        'o' : '0',
        'O' : '0',
        'l' : '1',
        'i' : '3',
        's' : '5'
    };



    function getRundomLatin() {

        var char = [
            'a',
            'b',
            'c',
            'd',
            'e',
            'f',
            'g',
            'x',
            'w',
            'l'
        ];


        var result = '';
        var rand = 0;

        for(var i = 0; 5 > i; i++){
            rand = parseInt((Math.random() * 10));
            result += char[rand];
        }

        return result;
    }

    $('#poluchitUrl').click(function () {
        var value = $('#url').val();

        for (var i = 0; remove.length > i; i++) {

            // разбивает по частям, отсеивая то что нужно удалить
            var val = value.split(remove[i]);

            // просто соединяем оставшееся от разбитого на части
            value = val.join('')

        }

        value = value.split('');
        for(var key in replace) {
            var repl = replace[key];

            for( i = 0; value.length > i; i++ ){
                if(value[i] === key){
                    value[i] = repl;
                }
            }
        }


        $('.result').text(value.join('') + getRundomLatin());
    })
})