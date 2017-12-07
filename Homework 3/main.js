

var inputKey = document.getElementById('input_key'),
    inputVal = document.getElementById('input_value');

var result = document.getElementById('new');


var arr = ["1", "2", "3", "4", "5"];

function getValByIndexAndVal () {
    var k = inputKey.value, v = getInputValue(inputVal);

    console.log(k, v)

    if(k  && arr[k]) {

        return show(arr[k])

    } else {

        var searchIndex = arr.indexOf(v);

        if(searchIndex !== -1) {
            return show(arr[searchIndex]);
        }
    }

    return show('now found in Array' + arr)
}


function getInputKey() {
    return inputKey.value || arr.length;
}

function getInputValue(input) {
    return input.value
}

function arrPushFromInput() {
    arr.splice(+getInputKey(), 0, getInputValue(inputVal));

    return show(arr);
}

function addValOnEnd(){
    arr.push(getInputValue(inputVal));

    return show(arr);
}

function arrPopBtn() {
    arr.pop();
    show(arr);
}

function arrShiftBtn() {
    arr.shift();
    show(arr)
}

function show(val) {
    console.log(val);
    result.innerHTML = val ;
}

