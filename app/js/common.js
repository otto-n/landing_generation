$(function() {

	$('#checkin').Zebra_DatePicker({
		direction: true,
		format: 'd.m.Y',
		pair: $('#checkout'),
				locale: 'ru',
	});
	$('#checkout').Zebra_DatePicker({
		direction: 1,
		format: 'd.m.Y',
				locale: 'ru',
	});

	$('#input-numberphone').mask('8 (999) 999-99-99');

// Уход со страницы
	$(window).bind('beforeunload', function () {
		return "Are you sure you want to exit? Please complete sign up or the app will get deleted.";
	});

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

	$("button[data-alubk-ref='input-stepper-add-button']").on('click',function(){
		var sCount = $("#groupAdults").val();
		var maxValue = $("#groupAdults").prop("max");
		var textAdult = '1 взрослый';
		var iNextCount = parseInt(sCount) + 1;

// склоняем взависимости от кол-ва
		if(iNextCount == 1 || iNextCount == 21) {
			textAdult = iNextCount + ' взрослый';
		} else {
			textAdult = iNextCount + ' взрослых';
		}

// включаем отмотку назад
		if(parseInt(sCount) == 1) {
			$("button[data-alubk-ref='input-stepper-subtract-button']").prop('disabled',false);
		}

// если дошли доконца отключаем промотку вперед
		if(parseInt(sCount) == 29) {
			$("button[data-alubk-ref='input-stepper-add-button']").prop('disabled',true);
		}

		$("#guests__toggle > span:first").text(textAdult);
		$("span[data-alubk-ref='input-stepper-value']").text(iNextCount);
		$("#groupAdults").val( iNextCount.toString() );

	});

	$("button[data-alubk-ref='input-stepper-subtract-button']").on('click',function(){
		var sCount = $("#groupAdults").val();
		var iSubtractCount = parseInt(sCount) - 1;
		var textAdult = '1 взрослый';

		if(iSubtractCount == 1 || iSubtractCount == 21) {
			textAdult = iSubtractCount + ' взрослый';
		} else {
			textAdult = iSubtractCount + ' взрослых';
		}

		if(iSubtractCount == 1) {
			$("button[data-alubk-ref='input-stepper-subtract-button']").prop('disabled',true);
		}

		if(parseInt(sCount) == 30) {
			$("button[data-alubk-ref='input-stepper-add-button']").prop('disabled',false);
		}

		$("#guests__toggle > span:first").text(textAdult);

		$("span[data-alubk-ref='input-stepper-value']").text(iSubtractCount);
		$("#groupAdults").val( iSubtractCount.toString() );
	});

});
