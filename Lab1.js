var arrNum = [1, 5, 10, 50, 100, 500, 1000, 5000, 10000, 50000, 100000, 500000, 1000000];
var arr = [];
for(let val of arrNum)	{
	console.log(val);
	fillInRandomInt(val);
	var ms = 0;
	arrJoin();
	arrReverse();
	arrSort();
}




function arrSort() {
	console.time('Сортировка');
	arr.sort();
	console.timeEnd('Сортировка');
}

function arrJoin() {
	console.time('Объединение');
	arr.join();
	console.timeEnd('Объединение');
}

function arrReverse() {
	console.time('Реверс');
	arr.reverse();
	ms += console.timeEnd('Реверс');
}

function fillInRandomInt(val) {
	for(var i = 0; i < val; i++) arr[i] = Math.floor(Math.random() * Math.floor(100));
}

var arrLength = [10, 5000, 100000];
var dataset = ['Худший', 'Нормальный', 'Лучший'];
var value = "word";
for (let length of arrLength) {
	console.log(length);
	for (let setType of dataset) Indexer(setType,length);
	for (let setType of dataset) Filterer(setType,length); 
}

function Filterer(setType,length) {
	var filterArr = [];
	var k = 0;
	FillingInArray(setType,length);
	
	console.time(`Своя фильтрация. ${setType} набор`);
	for (var i = 0; i < length; i++) if (arr[i] !== value) {
			filterArr[k] = arr[i];
			k++;
	}
	console.timeEnd(`Своя фильтрация. ${setType} набор`);
	//console.log(filterArr);
	
	console.time(`Готовая фильтрация. ${setType} набор`);
	filterArr = arr.filter(Cond);
	console.timeEnd(`Готовая фильтрация. ${setType} набор`);
	//console.log(filterArr);
	function Cond(val) { 
		var rez = false; 
		if (val !== value) rez = true; 
		return rez;
	}
	console.log();
}
function Indexer(setType,length) {
	FillingInArray(setType,length);
	
	console.time(`Свой поиск элемента. ${setType} набор`);
	for (var i = 0; i < length; i++) if (arr[i] === value) break;
	console.timeEnd(`Свой поиск элемента. ${setType} набор`);
	
	console.time(`Готовый поиск элемента. ${setType} набор`);
	arr.indexOf(value);
	console.timeEnd(`Готовый поиск элемента. ${setType} набор`);
	console.log();
}
function FillingInArray(setType,length) {
	var numberOfDesiredValue = 0;
	switch(setType) {
		case 'Лучший': 
			numberOfDesiredValue = 0; 
			break;
		case 'Нормальный': 
			numberOfDesiredValue = length / 2 - 1;  
			break;
		case 'Худший': 
			numberOfDesiredValue = length-1; 
			break; 
	}
	for (var i = 0; i < length; i++) {
		if (i === numberOfDesiredValue) arr[i] = "word"; 
		else arr[i] = Math.floor(Math.random() * Math.floor(100));
	}
}
