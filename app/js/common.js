$(function() {

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

	$('#option-request').click(function(e) {
		e.stopPropagation();
	});

	$('#guests__toggle').click(function(e) {
		e.stopPropagation();
		$('#option-request').removeClass('hidden');
	});

	$(document).click(function(e) {
		$('#option-request').addClass('hidden');
	});

// Добавляем вычитаем кол-во взрослых

	$("#button__addAdults").on('click',function(){
		var sCountA = $("#inputAdults").val();
		var maxValueA = $("#inputAdults").prop("max");
		var textToggleA = '1 взрослый';
		var iNextCountA = parseInt(sCountA) + 1;

// склоняем взависимости от кол-ва
		if(iNextCountA == 1 || iNextCountA == 21) {
			textToggleA = iNextCountA + ' взрослый';
		} else {
			textToggleA = iNextCountA + ' взрослых';
		}

// включаем отмотку назад
		if(parseInt(sCountA) == 1) {
			$("#button__subtractAdults").prop('disabled',false);
		}

// если дошли доконца отключаем промотку вперед
		if(parseInt(sCountA) == 29) {
			$("#button__addAdults").prop('disabled',true);
		}

		$("#toggleDisplayAdults").text(textToggleA);
		$("#displayAdults").text(iNextCountA);
		$("#inputAdults").val( iNextCountA.toString() );

	});

	$("#button__subtractAdults").on('click',function(){
		var sCountA = $("#inputAdults").val();
		var iSubtractCountA = parseInt(sCountA) - 1;
		var textToggleA = '1 взрослый';

		if(iSubtractCountA == 1 || iSubtractCountA == 21) {
			textToggleA = iSubtractCountA + ' взрослый';
		} else {
			textToggleA = iSubtractCountA + ' взрослых';
		}

		if(iSubtractCountA == 1) {
			$("#button__subtractAdults").prop('disabled',true);
		}

		if(parseInt(sCountA) == 30) {
			$("#button__addAdults").prop('disabled',false);
		}

		$("#toggleDisplayAdults").text(textToggleA);
		$("#displayAdults").text(iSubtractCountA);
		$("#inputAdults").val( iSubtractCountA.toString() );
	});



// Добавляем вычитаем кол-во детей

	$("#button__addChildrens").on('click',function(){
		var sCountCh = $("#inputChildrens").val();
		var maxValueCh = $("#inputChildrens").prop("max");
		var textToggleCh = '0 детей';
		var iNextCountCh = (parseInt(sCountCh) + 1);

// склоняем взависимости от кол-ва
		if (sCountCh > 0 && sCountCh < 4) {
			textToggleCh = iNextCountCh + ' ребенка';
		} else if (sCountCh >= 4 && sCountCh <= parseInt(maxValueCh)) {
			textToggleCh = iNextCountCh + ' детей';
		} else {
			textToggleCh = iNextCountCh + ' ребенок';
		}

// включаем отмотку назад
		if(parseInt(sCountCh) == 0) {
			$("#button__subtractChildrens").prop('disabled', false);
		}

// если дошли доконца отключаем промотку вперед
		if(parseInt(sCountCh) == (parseInt(maxValueCh)-1)) {
			$("#button__addChildrens").prop('disabled', true);
		}

		$("#displayChildrens").text(iNextCountCh);
		$("#inputChildrens").val( iNextCountCh.toString() );
		$("#toggleDisplayChildrens").html("&nbsp;·&nbsp;<span data-children-count>"+textToggleCh+"</span>");

	});

	$("#button__subtractChildrens").on('click',function(){
		var sCountCh = $("#inputChildrens").val();
		var iSubtractCountCh = (parseInt(sCountCh) - 1);
		var maxValueCh = $("#inputChildrens").prop("max");
		var textToggleCh = '0 детей';

		if (sCountCh > 0 && sCountCh < 4) {
			textToggleCh = iSubtractCountCh + ' ребенка';
		} else if (sCountCh >= 4 && sCountCh <= parseInt(maxValueCh)) {
			textToggleCh = iSubtractCountCh + ' детей';
		} else {
			textToggleCh = iSubtractCountCh + ' ребенок';
		}

		if(iSubtractCountCh == 0) {
			$("#button__subtractChildrens").prop('disabled',true);
			$("#toggleDisplayChildrens").html("");
		} else {
			$("#toggleDisplayChildrens").html("&nbsp;·&nbsp;<span data-children-count>"+textToggleCh+"</span>");
		}

		if(parseInt(sCountCh) == parseInt(maxValueCh)) {
			$("#button__addChildrens").prop('disabled',false);
		}

		$("#displayChildrens").text(iSubtractCountCh);
		$("#inputChildrens").val( iSubtractCountCh.toString() );
	});

	// Добавляни или вычитаем колличество номеров

	$("#button__addRooms").on('click',function(){
		var sCountR = $("#inputRooms").val();
		var maxValueR = $("#inputRooms").prop("max");
		var textToggleR = '1 номер';
		var iNextCountR = (parseInt(sCountR) + 1);

// склоняем взависимости от кол-ва
		if ((sCountR >= 1 && sCountR < 4) || (sCountR >= 21 && sCountR < 24)) {
			textToggleR = iNextCountR + ' номера';
		} else if ((sCountR >= 4 && sCountR < 20) || (sCountR >= 24 && sCountR < 30) ) {
			textToggleR = iNextCountR + ' номеров';
		} else if (sCountR == 1 || sCountR == 20) {
			textToggleR = iNextCountR + ' номер';
		}

// включаем отмотку назад
		if(parseInt(sCountR) == 1) {
			$("#button__subtractRooms").prop('disabled', false);
		}

// если дошли доконца отключаем промотку вперед
		if(parseInt(sCountR) == (parseInt(maxValueR)-1)) {
			$("#button__addRooms").prop('disabled', true);
		}

		$("#displayRooms").text(iNextCountR);
		$("#inputRooms").val( iNextCountR.toString() );
		$("#toggleDisplayRooms > span").text(textToggleR);

	});

	$("#button__subtractRooms").on('click',function(){
		var sCountR = $("#inputRooms").val();
		var maxValueR = $("#inputRooms").prop("max");
		var iSubtractCountR = parseInt(sCountR) - 1;
		var textToggleR = '1 номер';

		if ((iSubtractCountR > 1 && iSubtractCountR < 5) || (iSubtractCountR > 21 && iSubtractCountR < 25)) {
			textToggleR = iSubtractCountR + ' номера';
		} else if ((iSubtractCountR >= 5 && iSubtractCountR < 21) || (iSubtractCountR >= 25 && iSubtractCountR <= 30) ) {
			textToggleR = iSubtractCountR + ' номеров';
		} else if (iSubtractCountR < 2 || iSubtractCountR == 21) {
			textToggleR = iSubtractCountR + ' номер';
		}

		if(iSubtractCountR == 1) {
			$("#button__subtractRooms").prop('disabled', true);
		}

		if(parseInt(sCountR) == parseInt(maxValueR)) {
			$("#button__addRooms").prop('disabled', false);
		}

		$("#toggleDisplayRooms > span").text(textToggleR);
		$("#displayRooms").text(iSubtractCountR);
		$("#inputRooms").val( iSubtractCountR.toString() );
	});


	$('.owl-carousel').owlCarousel({
		items: 1,
		autoplay: true,
		lazyLoad: true,
		autoWidth: false,
		nav: false,
		autoplayHoverPause: false,
		checkVisible: false,
		rewind: true
	});


});
