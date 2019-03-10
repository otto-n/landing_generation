// Переменные и функции для слайдера на главной

// код для сладера закончился


$(function() {

	(function($){
		$.fn.tool = function( options ) {
			var settings = $.extend({
				blockTools: "#visibility",
				add: ".add",
				subtract: ".subtract",
				display: ".display",
				input: "input",
				ageChildrens: '#ageChildrens',
				postFix: {toggleDisplayChildrens: ["ребенок","ребенка","ребенка","ребенка","детей","детей","детей","детей","детей","детей","детей","детей","детей","детей","детей","детей","детей","детей","детей","детей","ребенок","ребенка","ребенка","ребенка","детей","детей","детей","детей","детей","детей"],
					toggleDisplayRooms: ["номер","номера","номера","номера","номеров","номеров","номеров","номеров","номеров","номеров","номеров","номеров","номеров","номеров","номеров","номеров","номеров","номеров","номеров","номеров","номер","номера","номера","номера","номеров","номеров","номеров","номеров","номеров","номеров"],
					toggleDisplayAdults: ["взрослый","взрослых","взрослых","взрослых","взрослых","взрослых","взрослых","взрослых","взрослых","взрослых","взрослых","взрослых","взрослых","взрослых","взрослых","взрослых","взрослых","взрослых","взрослых","взрослых","взрослый","взрослых","взрослых","взрослых","взрослых","взрослых","взрослых","взрослых","взрослых","взрослых"]},
				preFix: {toggleDisplayChildrens: "&nbsp;·&nbsp;",
					toggleDisplayRooms: "&nbsp;·&nbsp;"},
			}, options),

			min,max,valueInput,counter,target,textDisplay,preFix,postFix,

			ageChildrens = function(){
			},

			main = function(selector, typeOperation) {

				var currentCount,

				// Извлекаем из инпута данные для работы с ними дальше
				min   = parseInt($(selector).siblings(settings.input).prop('min')),
				max   = parseInt($(selector).siblings(settings.input).prop('max')),
				valueInput = parseInt($(selector).siblings(settings.input).val()),
				counter = valueInput,
				idInput = $(selector).siblings(settings.input).prop('id');

				// в зависимости от типа опреации прибавлем или
				// вычитаем еденицу для счетчика
				if ( typeOperation == "add" ) {
					counter++;
					currentCount = max;
				} else {
					counter--;
					currentCount = min;
				}

				// если текущее состояние счетчика
				// равна минимальной или максимальной
				// в зависимости от типа операции
				if ( counter == currentCount ) {
					// выключаем кнопку (для запрета работы счетчика в эту сторону)
					$(selector).prop("disabled", true);
				}

				$(selector).siblings((typeOperation == "add") ?
															settings.subtract : settings.add)
					.prop("disabled", false);

				// если счетчик не достиг предела
				if ( valueInput != currentCount ) {
					textDisplay = "";
					preFix      = "";
					postFix     = "";

					$(selector).siblings(settings.display).text(counter);
					$(selector).siblings(settings.input).val(counter);

					target = $(selector).data("target");
					$.each(settings.postFix, function(index, value) {
						// если в объекте найден postFix, записываем его в переменную
						if ( index == target ) {
							postFix = value[counter-1]?
							value[counter-1]:"";
						}

						$.each(settings.preFix, function(index, value) {
							// если в объекте найден Prefix записываем его в переменную
							if ( index == target ) {
								preFix = value?value:"";
							}
						});
					});

					if ( counter > 0 ) {
						textDisplay = preFix + "" + counter + " " + postFix;
					}
					$("#" + target).html(textDisplay);

					// ***  Добавляем поля для выбора возраста
					// ***  детей
					if ( idInput === 'inputChildrens' ) {
						if( typeOperation == "add" ) {
							var lengthSelect = $(settings.ageChildrens + ' > select').length;
							$(settings.ageChildrens).append("<select name='ageChild' class='select__ageChild' aria-label='Возраст ребенка " + (lengthSelect+1) + "' data-child-age='" + lengthSelect + "'>\
<option value='none' selected>Возраст на момент отъезда</option>\
<option value='0'>0 лет</option>\
<option value='1'>1 год</option>\
<option value='2'>2 года</option>\
<option value='3'>3 года</option>\
<option value='4'>4 года</option>\
<option value='5'>5 лет</option>\
<option value='6'>6 лет</option>\
<option value='7'>7 лет</option>\
<option value='8'>8 лет</option>\
<option value='9'>9 лет</option>\
<option value='10'>10 лет</option>\
<option value='11'>11 лет</option>\
<option value='12'>12 лет</option>\
<option value='13'>13 лет</option>\
<option value='14'>14 лет</option>\
<option value='15'>15 лет</option>\
<option value='16'>16 лет</option>\
<option value='17'>17 лет</option>\
								</select>");
						} else if ( typeOperation == "subtract" ) {
							$(settings.ageChildrens + ' > select:last-child').remove();
						}
					}
				}
			}; // конец main function

			// Не обрататываем событие если кликнули на открытой форме
			$(settings.blockTools).click(function(e){
				e.stopPropagation();
			});

			// обработали событие клик по ссылке
			$(this).click(function(e){
				e.stopPropagation();
				$(settings.blockTools).removeClass("hidden");
			});

			// обрабатываем событие по клику на +
			$(settings.blockTools).find(settings.add).click(function(e) {
				e.preventDefault();
				main(this, "add");
			});

			// обрабатываем событие по клику на -
			$(settings.blockTools).find(settings.subtract).click(function(e) {
				e.preventDefault();
				main(this, "subtract");
			});

			$(document).click(function(){
				$(settings.blockTools).addClass("hidden");
			});
		}

	})(jQuery);

	$(window).on('load',function() {
		setTimeout(function() {
			$('.preloader').fadeOut('slow', function() {});
		}, 2000);
	});

	$('#checkin').Zebra_DatePicker({
			direction: true,
			format: 'd.m.Y',
			pair: $('#checkout'),
	months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
			days: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
			show_select_today: 'Сегодня',
			lang_clear_date: 'Сбросить дату',
			default_position: 'above',
			offset: [-257, -5],
	});

	$('#checkout').Zebra_DatePicker({
		direction: 1,
		format: 'd.m.Y',
months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Авгус	т', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
		days: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
		show_select_today: 'Сегодня',
			lang_clear_date: 'Сбросить дату',
			default_position: 'above',
			offset: [-257, -5],
	});

	$('#input-numberphone').mask('8 (999) 999-99-99');

// Уход со страницы
	// $(window).bind('beforeunload', function () {
	// 	return "Are you sure you want to exit? Please complete sign up or the app will get deleted.";
	// });


	$("#guests").tool( {
		blockTools: "#optionsRequest",
		add: ".add-counter",
		subtract: ".subtract-counter",
		display: ".display-counter",
		input: "input"
	} );

	$( "#sendSearchTopForm" ).on( "click", function( event ) {
		console.log( $("#topSearch").serialize() );
		event.preventDefault();
	});

	// Слайдер на главной
		var slidesRooms = $("#sliderRooms").children(".slide"),
			currentIndex, newStyleTop, newStyleLeft, newStyleOpaticy, newStyleHeight, index, value, backgroundImage;

		$.each(slidesRooms, function(index, value) {
			if( $(this).hasClass("current") ) {
				currentIndex = index;
			}

			for (var i = 0; i < slidesRooms.length; i++) {
				if( currentIndex == i ) {
					newStyleLeft = 20;
					newStyleOpaticy = "1";
					newStyleHeight = "80%";
					newStyleTop = "5%";
				} else if ( i < currentIndex ) {
					newStyleLeft = -((currentIndex-i) * 70 - 20);
					newStyleOpaticy = "0.5";
					newStyleHeight = "70%";
					newStyleTop = "10%";
				} else if ( i > currentIndex ) {
					newStyleLeft = ((i - currentIndex) * 70 + 20);
					newStyleOpaticy = "0.5";
					newStyleHeight = "70%";
					newStyleTop = "10%";
				}

				$(slidesRooms[i]).css("left", newStyleLeft + "%");
				$(slidesRooms[i]).css("opacity", newStyleOpaticy);
				$(slidesRooms[i]).css("height", newStyleHeight);
				$(slidesRooms[i]).css("top", newStyleTop);
			}

			backgroundImage = $(slidesRooms[currentIndex]).data("backgroundImage");
			$("#categoryRooms").css("background-image", "url('" + backgroundImage + "')");
		});

		// Кликаем назад
		$("#prevSliderRooms").on("click", function() {
			sliderRooms("prev");
		});

		// Кликаем вперед
		$("#nextSliderRooms").on("click", function() {
			sliderRooms("next");
		});

		function sliderRooms(typeAction) {

			var slides = $("#sliderRooms").children(".slide"),
				index, value, currentIndex, newStyleTop, newStyleLeft, newStyleOpaticy, newStyleHeight, backgroundImage;


			$.each(slides, function(index, value){
				// если при переборе всех элементов нашли активный
				// (текущий), то проверяем не первый ли это
				// элемент
				if($(value).hasClass("current")) {
					// если элемент не первый выбираем текущим
					// элементом предыдущий. И переставляем классы CSS

					// Если первый или последний элемент, то прекращаем
					// работу функции
					if( (typeAction === "next" && index != (slides.length-1)) || (typeAction === "prev" && index!=0) ) {
						// иначе прибавляем или вычетаем следующий индекс
						// в зависимости от типа операции
						currentIndex = (typeAction=="prev") ? (index-1) : (index+1);

						// перебираем весь массив элеметов, начиная с
						// самого первого
						for (var i = 0; i < slides.length; i++) {
							// если наткнулись на аткивный элемент
							// присваем характерные для него стили в переменную
							if(currentIndex == i) {
								newStyleLeft = 20;
								newStyleOpaticy = "1";
								newStyleHeight = "80%";
								newStyleTop = "5%";
							// если это элемент слева, значит опеделяем
							// для него стили и здаписываем в переменную
							} else if( i < currentIndex ) {
								newStyleLeft = -((currentIndex-i) * 70 - 20);
								newStyleOpaticy = "0.5";
								newStyleHeight = "70%";
								newStyleTop = "10%";
							// если элемент справа - аналогично
							} else if( i > currentIndex ) {
								newStyleLeft = ((i - currentIndex) * 70 + 20);
								newStyleOpaticy = "0.5";
								newStyleHeight = "70%";
								newStyleTop = "10%";
							}

							// отображаем стили из переменных
							$(slides[i]).css("left", newStyleLeft + "%");
							$(slides[i]).css("opacity", newStyleOpaticy);
							$(slides[i]).css("height", newStyleHeight);
							$(slides[i]).css("top", newStyleTop);

						}

						backgroundImage = $(slides[currentIndex]).data("backgroundImage");
						$("#categoryRooms").css("background-image", "url('" + backgroundImage + "')");

					}
				}
			});

			$(slides[(typeAction==="prev")?currentIndex+1:currentIndex-1]).removeClass("current");
			$(slides[currentIndex]).addClass("current");
		}
	// код для слайдера закончился
});
