// Задача первая
document.getElementById ('start1').onclick = f1;
function f1(){
	var a1=document.getElementById('year').value;
	a1 = parseInt(a1);
	var c1;
	if (a1>17) {
		c1=2017-a1;
		document.getElementById('age').innerHTML=c1;
	}
	if (a1<17) {
		c1=17-a1;
		document.getElementById('age').innerHTML=c1;
	}
}

// Задача вторая
document.getElementById ('start2').onclick = f2;
function f2(){
	var a2=document.getElementById('first').value;
	var b2=document.getElementById('second').value;
	a2 = parseInt(a2);
	b2 = parseInt(b2);
	if (a2>b2) {
		alert(a2);
	}
	else if(a2==b2) {
		alert('равны')
	}
	else{
		alert(b2);
	}
}

// Задача третья
document.getElementById ('start3').onclick = f3;
function f3(){
	console.log('work');
	var a3=document.getElementById('entrance').value;
	a3 = parseInt(a3);
	if (a3>=1 && a3<=20) {
		alert('подъезд №1');
	}
	else if(a3>=21 && a3<=48) {
		alert('подъезд №2')
	}
	else if(a3>=49 && a3<=90) {
		alert('подъезд №3')
	}
	else{
		alert('нет такой квартиры');
	}
}

// Задача четвертая
document.getElementById ('start4').onclick = f4;
function f4(){
	console.log('work');
	var c=document.getElementById('login').value;
	var e=document.getElementById('parol').value;
	if (c=='ivan' && e=='333'){
		alert('Добро пожаловать');
	}
	else if (c=='ssss' && e=='666'){
		alert('Добро пожаловать');
	}
	else if (c=='gibs' && e=='0000'){
		alert('Добро пожаловать');
	}
	else {
		alert('Ошибка входа');
	}
}

// Задача пятая
document.getElementById ('start5').onclick = f5;
function f5(){
	var x=document.getElementById('first5').value;
	var y=document.getElementById('second5').value;
	var z=document.getElementById('third5').value;
	
	var max;
	if (x>y) {
		max=y;
	}
	else {
		max=x;
	}
	if (z>max) {
		max=z;
	}
	alert('Максимальное из чисел ' + max);	
}

// Задачи 1.2

//Вывести четные числа от 0 до 101. 
var evenNumbers='';
for (var i=0; i<101; i=i+2) {
  evenNumbers +=' '+i;
}
document.getElementById('out11').innerHTML=evenNumbers;

//Вывести числа в следущей последовательности: 200 199 198 ... 0.
var numbers='';
for (var i=200; i>=0; i=i-1) {
  numbers +=' '+i;
}
document.getElementById('out12').innerHTML=numbers;


//Найти сумму чисел от 0 до 100 (включительно). (0+1+2+3+4+5).
var sum=0;
var sss='0';
for (var i=1; i<=100; i++) {
  sss+='+'+i;
  sum=sum+i;
}
document.getElementById('out13').innerHTML=sss+'<br>='+sum;


//Степень
function f14() {
  var n14 = document.getElementById('number').value;
  var stepen=document.getElementById('stepen').value;
  var number=1;
	for (var i=1; i<=stepen; i++) {
    number=number*n14;
  }
	document.getElementById('out14').innerHTML=n14+' в степени '+stepen+' = <b>'+number+'<b>';
}

// Таблица умножения
var p=document.getElementById ('table');
var j=7
for (var i=1;  i<=9; i=i+1){
	p.innerHTML+=j +'*' + i + '=' + (i*j)+ '<br>';
}

// Производное чисел
var p=document.getElementById ('six');
document.getElementById ('ok2').onclick = f6;
function f6(){
var sum=1;
for (var i=1; i<=50; i=i+1){  
   sum=sum*i; 
   p.innerHTML=sum;
  }
}

// Спецсимволы
var symbols='';
for (var i=1000; i<2000; i++) {
  symbols +='&#'+i+';'+' ';
}
document.getElementById('out7').innerHTML=symbols;




