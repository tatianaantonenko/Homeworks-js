var inputLength = document.getElementById('inputLength');
var inputLengtOutput = document.getElementById('inputLengtOutput');

function getInputLength(event) {
	inputLengtOutput.innerHTML = 'Input length : ' + inputLength.value.length;
}

/**
 *
 * images
 *
 */
var idImagesContainer = document.getElementById('imagesContainer')
 var imagesArr = [
 	'http://via.placeholder.com/350x148',
 	'http://via.placeholder.com/350x149',
 	'http://via.placeholder.com/350x150',
 	'http://via.placeholder.com/350x151',
 	'http://via.placeholder.com/350x152',
 ]

var imagesContainer = '';
for(var i = 0; imagesArr.length - 1 != i; i++) {
	imagesContainer += "<br /><img src="+imagesArr[i]+" >"
}

idImagesContainer.innerHTML = imagesContainer;


/**
 *
 * remove prefix
 *
 */
var idRemovePrefix = document.getElementById('removePrefix');

function removePrefix() {
	var text = idRemovePrefix.value;
	var pos;

	var httpPos = idRemovePrefix.value.indexOf('http');
	var httpsPos = idRemovePrefix.value.indexOf('https');

	if(httpPos !== -1) httpPos += 4;
	if(httpsPos !== -1) httpPos += 5;


	text = text.slice(( httpPos || httpsPos || 0 ))
	idRemovePrefix.value = text;
}


/**
 *
 * clearOutputSite
 *
 */

var idClearOutputSite = document.getElementById('clearOutputSite')
function clearOutputSite() {

	var startWith = 'site';

	var pos = idClearOutputSite.value.indexOf(startWith);

	idClearOutputSite.value = idClearOutputSite.value.slice(pos);

}


var idFirstName = document.getElementById('firstName'),
	idLastName = document.getElementById('lastName'),
	idEmail = document.getElementById('email'),
	idPassword = document.getElementById('password'),
	idFormError = document.getElementById('formError');

function checkForm() {
	
	var formElements = [idFirstName, idLastName, idEmail, idPassword];

	for(var i = 0; formElements.length != i; i++) {
		formElements[i].value =  formElements[i].value.trim()

		if(formElements[i].value.length === 0) {
			idFormError.innerHTML = 'все поля должны быть заполнены';
			return false;
		} 
	}

	var idDogCharPos = idEmail.value.indexOf('@');

	if(idDogCharPos === -1) {
		idFormError.innerHTML = 'Поле email должно содержать @';

		return false;
	}
	console.log(idPassword.value.length)
	if(idPassword.value.length < 5) {
		idFormError.innerHTML = 'Поле password должно иметь больше 5 символов';

		return false;
	}


	idFormError.innerHTML = 'Все парвильно';

}




/**
 *
 * symbols
 *
 */

 var symbolInput = document.getElementById('symbolInput');
var symbolOutput = document.getElementById('symbolOutput');

function getSymbolCode() {
	
	symbolOutput.innerHTML = symbolInput.value.charCodeAt(0);

}
