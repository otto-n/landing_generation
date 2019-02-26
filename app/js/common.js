$(function() {

	(function($){
		$.fn.tool = function( options ) {
			var settings = $.extend({
				blockTools: "#visibility",
				add: ".add",
				subtract: ".subtract",
				display: ".display",
				input: "input",
				disableButton: "cursor-default",
				enableButton: "cursor-pointer",
				postFix: {toggleDisplayChildrens: ["ребенок","ребенка","ребенка","ребенка","детей","детей","детей","детей","детей","детей","детей","детей","детей","детей","детей","детей","детей","детей","детей","детей","ребенок","ребенка","ребенка","ребенка","детей","детей","детей","детей","детей","детей"],
					toggleDisplayRooms: ["номер","номера","номера","номера","номеров","номеров","номеров","номеров","номеров","номеров","номеров","номеров","номеров","номеров","номеров","номеров","номеров","номеров","номеров","номеров","номер","номера","номера","номера","номеров","номеров","номеров","номеров","номеров","номеров"],
					toggleDisplayAdults: ["взрослый","взрослых","взрослых","взрослых","взрослых","взрослых","взрослых","взрослых","взрослых","взрослых","взрослых","взрослых","взрослых","взрослых","взрослых","взрослых","взрослых","взрослых","взрослых","взрослых","взрослый","взрослых","взрослых","взрослых","взрослых","взрослых","взрослых","взрослых","взрослых","взрослых"]},
				preFix: {toggleDisplayChildrens: "&nbsp;·&nbsp;",
					toggleDisplayRooms: "&nbsp;·&nbsp;"},
			}, options),

			min,max,valueInput,counter,target,textDisplay,preFix,postFix;

			var main = function(selector, typeOperation) {

			var currentCount;

			// Извлекаем из инпута данные для работы с ними дальше
			min   = parseInt($(selector).siblings(settings.input).prop('min'));
			max   = parseInt($(selector).siblings(settings.input).prop('max'));
			valueInput = parseInt($(selector).siblings(settings.input).val());
			counter = valueInput;

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

				$(selector).siblings(settings.subtract).prop("disabled", false);

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
			$(settings.blockTools).find(settings.add).click(function() {
				main(this, "add");
			});

			// обрабатываем событие по клику на -
			$(settings.blockTools).find(settings.subtract).click(function() {
				main(this, "subtract");
			});

			$(document).click(function(){
				$(settings.blockTools).addClass("hidden");
			});
		}
	})(jQuery);


	$('#checkin').Zebra_DatePicker({
		direction: true,
		format: 'd.m.Y',
		pair: $('#checkout'),
months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
		days: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
		show_select_today: 'Сегодня',
	});
	$('#checkout').Zebra_DatePicker({
		direction: 1,
		format: 'd.m.Y',
months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
		days: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
		show_select_today: 'Сегодня',
	});

	$('#input-numberphone').mask('8 (999) 999-99-99');

// Уход со страницы
	// $(window).bind('beforeunload', function () {
	// 	return "Are you sure you want to exit? Please complete sign up or the app will get deleted.";
	// });


	$('.owl-carousel').owlCarousel({
		items: 1,
		autoplay: true,
		lazyLoad: true,
		autoHeight: true,
		nav: false,
		autoplayHoverPause: false,
		checkVisible: false,
		rewind: true
	});


	$("#guests__toggle").tool( {
		blockTools: "#option-request",
		add: ".alubk-stepper__add-button",
		subtract: ".alubk-stepper__subtract-button",
		display: ".alubk-stepper__display",
		input: "input",
		disableButton: "cursor-default",
		enableButton: "cursor-pointer",
	} );

	$("#guests__toggle1").tool( {
		blockTools: "#option-request1",
		add: ".alubk-stepper__add-button",
		subtract: ".alubk-stepper__subtract-button",
		display: ".alubk-stepper__display",
		input: "input",
		disableButton: "cursor-default",
		enableButton: "cursor-pointer",
	} );


});
