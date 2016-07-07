// JavaScript Document

 $(document).ready(function() {
	 "use strict";
	 
	 // Select сортировка/город
//	$('.select_city').customSelect();
	
	// Back to top
	// hide #back-top first
	$("#back_top").hide();
	
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 200) {
				$('#back_top').fadeIn();
			} else {
				$('#back_top').fadeOut();
			}
		});

		// scroll body to 0px on click
		// Top Scroll
		$('#back_top').on('click', function() {
			$('html,body').stop().animate({scrollTop: 0}, 1000);
		});
	});
	
	// Меню для мобильной версии
	$('.menu_burger').on('click', function(){
		if ($(this).hasClass('open')) {
			$(this).removeClass('open');
			$('.header_search, .header_bottom').slideDown();
			
		} else {
			$(this).addClass('open');
			$('.header_search, .header_bottom').slideUp(500);	
		}	
	});
	
	// Разделитель списка событий
	//$('.full_collection .event_item:nth-child(2n+1)').after('<div class=\"event_item_separator\"></div>');
	
	//=== ПОИСК
	// Close all filters
	function close_filters() {
		$('.search_options_section_default').each(function() {
			$(this).removeClass('open');
			$(this).siblings('.search_options_section_list').slideUp(500);
		});		
	}
	
	// Раскрытие списка
	$('.search_options_section_default').on('click', function(){
		if ($(this).hasClass('open')) {
			$(this).removeClass('open');
			$(this).siblings('.search_options_section_list').slideUp(500);
		} else {
			close_filters();
			$(this).addClass('open');
			$(this).siblings('.search_options_section_list').slideDown();
		}	
	});
	
	// Выбор пункта из списка
	$('.search_options_section_list_line').on('click', function(){	
		if ($(this).hasClass('selected')) {
			$(this).removeClass('selected');
			$(this).parent().siblings('.search_options_section_default').removeClass('chosed');
			$(this).parent().parent().find('.filter_title').show();	
			$(this).parent().parent().find('.filter_choice').text('');
			$(this).parent().parent().find('.filter_choice').hide();
		} else {
			$(this).siblings().removeClass('selected');
			$(this).addClass('selected');
			$(this).parent().siblings('.search_options_section_default').addClass('chosed');
			$(this).parent().parent().find('.filter_title').hide();
			$(this).parent().parent().find('.filter_choice').text($(this).text());
			$(this).parent().parent().find('.filter_choice').show();	
		}				
		/*$(this).parent().parent().find('.search_options_section_default').removeClass('open');*/
		/*$(this).parent('.search_options_section_list').slideUp();*/
	});
	
	// Обрабатываем выбор даты	
	$(".main_calendar").on("change",function(){
		$(this).parent().siblings('.search_options_section_default').addClass('chosed');
		$(this).parent().parent().find('.filter_title').hide();
		$(this).parent().parent().find('.filter_choice').text($(this).val());
		$(this).parent().parent().find('.filter_choice').show();	 
    });
	// Обрабатываем выбор даты	в мобильном режиме
	$(".filter_date").on("change",function(){
		if ($(this).val() === '') {
			$(this).parent().parent().siblings('.search_options_section_default').removeClass('chosed');
			$(this).parent().parent().parent().find('.filter_title').show();
			$(this).parent().parent().parent().find('.filter_choice').text('');
			$(this).parent().parent().parent().find('.filter_choice').hide();	
		} else {
			$(this).parent().parent().siblings('.search_options_section_default').addClass('chosed');
			$(this).parent().parent().parent().find('.filter_title').hide();
			$(this).parent().parent().parent().find('.filter_choice').text($(this).val());
			$(this).parent().parent().parent().find('.filter_choice').show();	
		}	 
    });
	//=== END: ПОИСК
	
	// Сворачивание области описания события
	//var clps_height = Math.floor($('.expand_content').height() * 0.4);
	$('.collapse_content').readmore({
	  speed: 500,
	  collapsedHeight: 0,
	  moreLink: '<a href="#" class="collapse_btn down"><span>Всё расписание</span></a>',
	  lessLink: '<a href="#" class="collapse_btn up"><span>Всё расписание</span></a>'
	});	
	
	// Сворачивание области описания события
	$('.card_text_collapse').readmore({
	  speed: 800,
	  collapsedHeight: 106,
	  moreLink: '<a href="#" class="collapse_btn down"><span>Читать дальше</span></a>',
	  lessLink: '<a href="#" class="collapse_btn up"><span>Читать дальше</span></a>'
	});	
	
	//=== DaptaIMG
	// Срединный отступ для картинок событий
	function recalc_pic() {
		$('.event_item_picture img').each(function() {
            var pic_height, pic_parent_height, height_diff = 0;
			pic_height = $(this).height();
			pic_parent_height = $(this).closest('.event_item_picture').height();	
			if (pic_height >= pic_parent_height) {
				height_diff = Math.abs(pic_height - pic_parent_height);
				$(this).css({'marginTop': -1 * height_diff/2});
			}
			if (pic_height < pic_parent_height) {
				height_diff = Math.abs(pic_height - pic_parent_height);
				$(this).css({'marginTop': 0});
			}
        });	
	}
	
	// ожидание подгрузки изображений, чтобы вычислить их конечную height
	var event_img = $('.event_item_picture img');
	event_img.on('load', function(){
	 	recalc_pic();
	});
	
	// Срединный отступ для картинок событий
	function selection_pic() {
		$('.selection_item_pic img').each(function() {
            var pic_height, pic_parent_height, height_diff = 0;
			pic_height = $(this).height();
			pic_parent_height = $(this).closest('.selection_item_pic').height();	
			if (pic_height >= pic_parent_height) {
				height_diff = Math.abs(pic_height - pic_parent_height);
				$(this).css({'marginTop': -1 * height_diff/2});
			}
        });	
	}
	
	// ожидание подгрузки изображений, чтобы вычислить их конечную height
	var selection_img = $('.selection_item_pic img');
	selection_img.on('load', function(){
	 	selection_pic();
	});

	// обработка события resize
	$(window).on('resize', function() {
		recalc_pic();
		selection_pic();
	});
	//=== end: DaptaIMG
	 
	// Main menu mobile tap
	$( '#nav li:has(ul)' ).doubleTapToGo();
	
	// Слайдер статей
	$('.article_slider').slick({
		accessibility: true,
		infinite: true,
		arrows: true,
		dots: false,
		speed: 1000,
		variableWidth: false,
		waitForAnimate: true,	
		lazyLoad: 'progressive',
		slidesToScroll: 1,
		// the magic
		responsive: [{	
		  breakpoint: 4096,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 1,
			infinite: true
		  }
		
		}, {	
		  breakpoint: 1339,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true
		  }
		}]
	});
	
	// Слайдер карточки
	$('.card_slider').slick({
		accessibility: true,
		infinite: true,
		arrows: true,
		dots: true,
		speed: 1000,
		variableWidth: false,
		waitForAnimate: true,	
		lazyLoad: 'progressive',
		slidesToShow: 1,
		slidesToScroll: 1,
		// the magic
		responsive: [{		
		  breakpoint: 1339,
		  settings: {
			dots: false
		  }
		}]
	});
	
	// Календарь
	$.datepicker.regional.rus = {
		closeText: 'Закрыть',
		prevText: '&#x3c;Пред',
		nextText: 'След&#x3e;',
		currentText: 'Сегодня',
		monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
		'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
		monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
		'Июл','Авг','Сен','Окт','Ноя','Дек'],
		dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
		dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
		dayNamesMin: ['вс','пн','вт','ср','ст','пт','сб'],
		weekHeader: 'Не',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional.rus);
	$( ".main_calendar" ).datepicker();
	
 });//end ready 
 
 
 
