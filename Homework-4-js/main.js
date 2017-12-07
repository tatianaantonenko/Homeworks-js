var pTags = document.getElementsByTagName('p');

/*
* add shadow to image
* */

function addShadowOnImages() {

    var images = document.getElementsByTagName('img');

    convertToArray(images).forEach(function (val, index) {
        val.style.boxShadow = '5px 5px 5px rgba(0,0,0,0.5)';
    })
}

addShadowOnImages();


/**
 * add num of p
 * @type {NodeList}
 */

function addNumOfP() {
    convertToArray(pTags).forEach(function (val, index) {
        val.insertAdjacentHTML('afterbegin', '<span><b>' + index + '. :</b><span/>')
    })
}

addNumOfP();

/*
* math.pow
* */

function mathPow() {
    var num = document.getElementById('math_num').value || 1,
        pow = document.getElementById('math_pow').value || 1;

    alert(Math.pow(num, pow))

}

/**
 * signIn
 * @type {boolean}
 */

function signIn() {
    var auth = document.getElementById('auth');
    var age = auth.value || 0;


    alert(auth.value === '' ? 'Введите возраст' : age > 16 ? 'Добро пожаловать' : 'Вы еще молоды');

    auth.value = '';


}


var TAG_P_HIGHLIGHTED = false;

function toggleHighlightPTag() {


    convertToArray(pTags).forEach(function (value, key) {
        console.log(value)
        value.style.backgroundColor = TAG_P_HIGHLIGHTED ? '' : 'red';
    });

    TAG_P_HIGHLIGHTED = TAG_P_HIGHLIGHTED ? false : true;
}


function convertToArray(p) {
    return Array.from(p);
}


/*
* increment
* */

var increment = 0, incrementOutput = document.getElementById('incrementStdout');

function incrementBtn() {
    incrementOutput.innerHTML = ++increment;
}


/*
*
* search tag
*
* */


var searchTagInput = document.getElementById('highlightTag'), prevUnderlinedElement;

function searchTag() {
    var val = searchTagInput.value;

    searchTagInput.value = '';

    if (!val) {
        return searchTagInput.setAttribute('placeholder', 'incorrect tag, try again')
    }

    var searchedTag = document.getElementsByTagName(val);

    console.log(searchedTag);

    if (!searchedTag.length) {
        return searchTagInput.setAttribute('placeholder', 'incorrect tag, try again')
    }

    if (prevUnderlinedElement) {
        prevUnderlinedElement.forEach(function (val, index) {
            val.style.textDecoration = '';
        })
    }

    var elements = prevUnderlinedElement = convertToArray(searchedTag);

    elements.forEach(function (val, index) {
        val.style.textDecoration = 'underline'
    })

    searchTagInput.setAttribute('placeholder', 'Search tag, prev ' + val)
}


/*
*
* подсчет длины массива
* */


function lengthOfArray(arr) {
    arr = arr || 'Аргумент в виде массива не передан';

    if (typeof arr === 'string') {
        alert(arr);
    }

    return alert(arr.length);
}

lengthOfArray([1, 2, 3, 4, 5, 6, 7]);
lengthOfArray();


/*
*
* compute
* */


function compute() {
    var val = document.getElementById('compute').value, message;

    if (val >= 10) {
        message = 'Квадрат числа  ' + val + ' === ' + Math.pow(10, 2);

        alert(message);

        return message;
    }

    if (val <= 7) {
        message = 'число меньше 7';
        alert(message);
        return message
    }

    if (val == 8 || val == 9) {
        message = 'число ' + val;
        alert(message);
        return message
    }

    return false;
}


/*
* Угадайте число
* */

var MYSTERY = (Math.random() * 10).toFixed(0), attempt = 0;

function generateRandom() {
    MYSTERY = (Math.random() * 10).toFixed(0);
}

function attemptChange() {
    document.getElementById('game_attempt').innerHTML = '' + (3 - attempt );
}
attemptChange()

function guessANumber() {
    var input = document.getElementById('guessANumber'),
        val = input.value;


    ++attempt;

    attemptChange();

    if (val === MYSTERY) {
        generateRandom();
        attempt = 0;
        input.value = 'Ваш ход!';
        return alert('Вы угадали!!! Можете попробовать снова')
    }

    if (attempt >= 3) {
        input.value = 'Вы проиграли! лузер...';
        return alert('Вы проиграли, загаданное число ===' + MYSTERY )
    }

    if (val == '') {
        return alert('Вы не ввели число')
    }

    if (val > MYSTERY) {
        return alert('меньше')
    }

    if (val > MYSTERY) {
        return alert('больше')
    }


}