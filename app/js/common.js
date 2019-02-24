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
					}, options);

					var min,max,valueInput,count,target,textDisplay,preFix,postFix;

					// Не обрататываем событие если кликнули на открвтой форме
					$(settings.blockTools).click(function(e){
						e.stopPropagation();
					});

					// обработали событие клик по ссылке
					$(this).click(function(e){
						e.stopPropagation();
						$(settings.blockTools).removeClass("hidden");

						// обрабатываем событие по клику на +
						$(settings.blockTools).find(settings.add).click(function() {

							min   = parseInt($(this).siblings(settings.input).prop('min'));
							max   = parseInt($(this).siblings(settings.input).prop('max'));
							valueInput = parseInt($(this).siblings(settings.input).prop('value'));
							count = valueInput;

							count += 1;

							if ( count == max ) {
								$(this).prop("disabled", true);
							}

							$(this).siblings(settings.subtract).prop("disabled", false);

							// если счетчик достиг предела
							if ( valueInput != max ) {
								textDisplay = "";
								preFix      = "";
								postFix     = "";

								$(this).siblings(settings.display).text(count);
								$(this).siblings(settings.input).val(count);

								target = $(this).data("target");
								$.each(settings.postFix, function(index, value) {
									// если в объекте найден postFix, записываем его в переменную
									if ( index == target ) {
										postFix = value[count-1]?
										value[count-1]:"";
									}

									$.each(settings.preFix, function(index, value) {
										// если в объекте найден Prefix записываем его в переменную
										if ( index == target ) {
											preFix = value?value:"";
										}
									});
								});

								textDisplay = preFix + "" + count + " " + postFix;

								$("#" + target).html(textDisplay);
							}
						});

						$(settings.blockTools).find(settings.subtract).click(function() {

							min   = parseInt($(this).siblings(settings.input).prop('min'));
							max   = parseInt($(this).siblings(settings.input).prop('max'));
							valueInput = parseInt($(this).siblings(settings.input).prop('value'));
							count = valueInput;

							count -= 1;

							if ( count == min ) {
								$(this).prop("disabled", true);
							}

							$(this).siblings(settings.add).prop("disabled", false);

							// если счетчик достиг предела
							if ( valueInput != min ) {
								textDisplay = "";
								preFix      = "";
								postFix     = "";

								textDisplay = "";
								$(this).siblings(settings.display).text(count);
								$(this).siblings(settings.input).val(count);

								target = $(this).data("target");
								$.each(settings.postFix, function(index, value) {
									// если в объекте найден postFix, записываем его в переменную
									if ( index == target ) {
										postFix = value[count-1]?
										value[count-1]:"";
									}

									$.each(settings.preFix, function(index, value) {
										// если в объекте найден Prefix записываем его в переменную
										if ( index == target ) {
											preFix = value?value:"";
										}
									});
								});

								if ( count > 0 ) {
									textDisplay = preFix + "" + count + " " + postFix;
								}
								
								$("#" + target).html(textDisplay);
							}
						});
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


});
