$(document).ready(function(){

	var trigger = $('.header__navtrigger');
	var nav = $('.header__nav');

	trigger.on('click', function(){
		$(this).toggleClass('header__navtrigger--close');
		nav.toggleClass('header__nav--active');
		return false;
	})

	$('#phone').keyup(function() {
		var foo = $(this).val().split("-").join("");
		if (foo.length > 0) {
			foo = foo.match(new RegExp('.{1,3}', 'g')).join("-");
		}
		$(this).val(foo);
	});

	$(function(){
		var city = [
			"Tallinn",
			"Tartu",
			"Narva",
			"Pärnu",
			"Kohtla-Järve",
			"Viljandi",
			"Rakvere",
			"Maardu",
			"Sillamäe",
			"Kuressaare",
			"Valga",
			"Võru",
			"Haapsalu",
			"Jõhvi",
			"Keila",
			"Põlva",
			"Rapla",
			"Türi",
			"Paide",
			"Tapa",
			"Saue",
			"Elva",
			"Kehra",
			"Kiviõli",
			"Jõgeva",
			"Räpina",
			"Kärdla",
			"Põltsamaa",
			"Otepää",
			"Kilingi-Nõmme",
			"Sindi",
			"Paldiski",
			"Tamsalu",
			"Antsla",
			"Karksi-Nuia",
			"Kunda",
			"Püssi",
			"Narva-Jõesuu",
			"Tõrva",
			"Loksa",
			"Lihula",
			"Abja-Paluoja",
			"Võhma",
			"Mustvee",
			"Suure-Jaani",
			"Kallaste",
			"Mõisaküla"
		];
		$('#city').autocomplete({
			source: city
		});
	});

	var lang = $('.header__lang, .panel__lang');
	lang.on('click', function(){
		$('.lang').toggleClass('lang--active');
		return false;
	});

	var langClose = $('.lang__close');
	langClose.on('click', function(){
		$('.lang').addClass('lang--deactive');
		setTimeout(function(){
			$('.lang').removeClass('lang--active lang--deactive')
		}, 400);
		return false;
	});

});








