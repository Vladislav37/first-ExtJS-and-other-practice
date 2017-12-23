/*
var input = document.getElementsByClassName('input')[0],
	output = document.getElementsByClassName('output')[0],
	voc = {
		name: 'Sorax',
		title: 'JavaScript Tuts',
		resourse: 'YouTube'
	};
	
input.addEventListener('keyup', function(){
	output.innerHTML = this.value.replace(
		/\{\{(\w*)\}\}/g, function(match, value){
			return voc[value];
		}
	);
}, false);


var pattern = /\w+/g,
string = "onety, two , free", match;

while ( match = pattern.exec(string)){
	console.log(match[0] + "( Index : " + match.index + ")");
}
*/
///////////LOFTBLOG!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!///////////////////////

/*
(function() {
	
	var elems = document.getElementsByTagName("p"), //NodeList коллекция элементов<p>
		classElems = document.getElementsByClassName("par"), //вывел элементы с классом "par"
		idElems = document.getElementById("four"), //вывел элементы с id="four"
		elemSelector = document.querySelector("p"), //вывел первый элемент с тегом <p>
		elemSelectorAll = document. querySelectorAll("p"),// выводит все элементы с тегом <p> / Тег  document.getElementsByTagName работает быстрее
		elemInDiv = document. querySelectorAll("div p"), //ищем все параграфы <p> в блоках <div>
		idElemSelector = document. querySelectorAll("#four"); // ищет все элементы с id="four", но тег document.getElementById("four") работает быстрее
		
		
		//console.log(idElemSelector);  
		//console.log(idElems);
		//console.log(classElems);
	
	//console.log(elems);
	
	for( var i = 0 , len = elems.length; i < len; i++) { //вывели по отдельности каждый элемент
		//console.log( elems[i].tagName); //покажет свойство "имя тега" и сколько раз выводит
		//console.log( elems[i].parentNode); //покажет родительские теги
		//console.log( elems[i].previousSibling); // предыдущий родственник, пробелы тоже считаются как родственники и выводятся как #text
		//console.log( elems[i].nextSibling);//следующий родственник, пробелы тоже считаются как родственники и выводятся как #text
		//console.log( elems[i].nodeName); // отличие от tagName в том, что может работать еще с текстовыми узлами , а не только с узлами элементов
		console.log( elems[i].nodeType); // выводит цифру типа элмента 1 - узел элемента, 3 - текстовый узел
		
	}
	console.log(document.querySelector("div").childNodes); // выведет все дочерние узлы нашего тега <div> включая text
	console.log(document.querySelector("div").children); // выведет только дочерние элементы
	console.log(document.querySelector("div").lastChild); //выведет последний узел блока <div>
	console.log(document.querySelector("div").firstChild);//выведет первый узел блока <div>
	
	console.log(document.querySelector("div").innerHTML);// выводит содержимое нашего жлемента в формате стринг - строки
})();
*/




/*
(function(){
	
	var doc = document, //закэшировали домдерево и теперь программа будет обращаться не к дереву каждый раз а просто к переменной
		
		elem = doc.createElement("p"), //создали новый элемент <p>
		
		//content = document.createTextNode("loftblog"),//добавили в новый элемент текст
		
		wrappedP = doc.getElementById("wrapped");//нашли элемент с id="wrapped"
	
	//elem.removeChild(elem); //удалили наш созданный элемент
		
	elem.innerHTML = '<strong>loftblog</strong>';// добавляем в элемент <p>loftblog</p> тэг <strong></strong>
	
	//elem.appendChild(content); // вставляет текст в созданный элемент
	
	//elem.setAttribute('id','mrDinamic'); //добавляет элементу атрибут
	
	elem.id = 'mrDinamic';
	
	//wrappedP.parentNode.appendChild(elem); //находим родительский узел с помощью parentNode и вставляем сам элемент с помощью appendChild
	
	//console.log(elem);
	
	//wrappedP.parentNode.insertBefore( elem, wrappedP); // так же находит родительский узел и вставляет туда новый элемент , первый аргумент ЧТО вставляем, второй аргумент ПЕРЕД чем вставляем 
	
	wrappedP.parentNode.replaceChild(elem, wrappedP); //заменяем второй аргумент на первый
	
})();
*/



/* ИЗМЕНЕНИЕ СТИЛЕЙ 
( function() {
	var div = document.getElementById('test');
		style = div.style; // применяем свойство style для элемента div c индексом 0.
	
	
	
		//style.color = "red";
		//style.backgroundColor = "#fafafa";//очень долго выполяются эти свойства, их можно писать сразу в html в формате css в теге <style></style>
		//style.border = "1px solid blue";
		//style.padding = "3px";
		
		//div.className = " css-class  css-class-new ";
		
		//div.className = ""; // переименовываем на пустую строку и все стили убираются
		
		//div.className = div.className.replace(" css-class ","");
		
		div.classList.add('css-class');
		div.classList.add('css-class-new');
		div.classList.remove('css-class');
		div.classList.toggle('css-class');//"переключатель" если класс был добавлен , то он его удалит, а если был удален то добавит
		
	
	//console.log(div);
	
})();
*/



/*
//анимация и таймеры!!!!!!!!!!!!!!!!!!
(function(){
	
	var delay = 50;
		i = 0;
		startTimer = function(pixels) {
		//console.log('функция сработала');
			var elem = document.getElementById('circle'),
				bottom = elem.offsetTop;//отступ от верха документа
				//console.log(bottom);
			if(((pixels > 0 && bottom > 250) || (pixels < 0 && bottom < 50))  {
				clearInterval(timer)
				timer = setInterval(function(){
					startTimer(pixels * -1);
				}, delay);
			
			}
			
			//if( i < 10) {
				//console.log('функция ' +(i+1)+ ' сработала');
				//setTimeout(startTimer, delay);
				
				//elem.style.top = bottom + pixels + 'px'; //прибавляем к верхнему отступу по 20пкс с задержкой 10 млс
			//} else {
				//clearInterval(timer);
			//}
			elem.style.top = bottom + pixels + 'px';
			i++;
		};

		//var timer = setTimeout(startTimer, delay);
		var timer = setInterval(function(){
			startTimer(20);
		}, delay);
		
		
	
	
})();
*/


//СОБЫТИЯ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/*
(function() {
	
	//var el = document.getElementById('box');
	
	//el.onclick = function() { //вешаем обработчик события
	//	this.style.backgroundColor = "yellow";
	//};
	
	var buttons = document.getElementsByTagName('button');
	
	for (var i = 0 , len = buttons.length; i < len; i++) {
		
		buttons[i].onclick = function() {
			if (this.id === 'day' ) {
				document.body.className = 'day'; //ecли id элемента на который мы кликаем равен 'day' то используются свойства класса 'day'
			} else if (this.id === 'night' ) { 
				document.body.className = 'night';//ecли id элемента на который мы кликаем равен 'night' то используются свойства класса 'night'
			}
		};
	};	
})();
*/


//	СТАНДАРТНРАЯ МОДЕЛЬ СОБЫТИЙ
/*
(function() {
	var buttons = document.getElementsByTagName('button');
	
	var changeColor = function(e){
		//console.log(e.type);// выдаст название события
		//console.log(e.target);//выдает инициатора события
		//console.log(e.currentTarget);//выдает элемент на котором висит обработчик события (лучше чем this)
		//console.log( this) ; // выдает то на чем висит обработчик
		
		e.preventDefault(); //отключает то что работает по умолчанию, в нашем случае мы не будем переходить на ссылку yandex
		
		if (this.id === 'day' ) {
			document.body.className = 'day'; 
		} else if (this.id === 'night' ) { 
			document.body.className = 'night';
		}
	};
	
	var sayHi = function() {
		alert('Privet!');
	};
		
	for (var i = 0 , len = buttons.length; i < len; i++) {
		
		var html = document.getElementsByTagName('html')[0],
			yandex = document.getElementById('yandex');
		
		//html.addEventListener('click', changeColor, false);
		yandex.addEventListener('click', changeColor, false);
		buttons[i].addEventListener('click', sayHi, false);
		
		buttons[i].removeEventListener('click', sayHi, false);
		
		
	};
})();
*/




/*
//КРОСС - БРАУЗЕРНЫЕ СОБЫТИЯ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

(function() {
	var buttons = document.getElementsByTagName('button');
	
	var changeColor = function(e){
		eventsObj.preventDefault(e);		 
		
		var elem = eventsObj.getTarget(e);
		
		if (elem.id === 'day' ) {
			document.body.className = 'day'; 
		} else if (elem.id === 'night' ) { 
			document.body.className = 'night';
		}
	};
	
			
	for (var i = 0 , len = buttons.length; i < len; i++) {
		
		buttons[i].attachEvent('onclick', changeColor);
		
		eventsObj.addEvent(buttons[i], 'click' , changeColor);// ссылаемся на другой файл и вешаем событие для кроссбраузерности
		eventsObj.removeEvent(buttons[i], 'click' , changeColor);
		
		
	};
})();
*/


//ДЕЛЕГИРОВАНИЕ СОБЫТИЙ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

(function() {
	
	//var testFunc = function() {
		//alert('вы кликнули!');
	//};
	
	var changeColor = function(e){
		eventsObj.preventDefault(e);		 
		
		var elem = eventsObj.getTarget(e),
		
			colorData = elem.getAttribute('data-color');
			
			console.log( colorData );
			
		if( colorData ) {
			
			if(e.type ==='click'){
				document.body.className = "";// при нажатии сбрасывается на стандартный
			}else if (e.type ==='mouseover'){
				document.body.className = colorData; //при наведении окрашивается в цвет указанный в свойстве
			}
		}
	};
	
	eventsObj.addEvent(document, 'click', changeColor);
	eventsObj.addEvent(document, 'mouseover', changeColor);
	
})();





























