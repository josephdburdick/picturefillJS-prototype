$w = $(window);

$(function(){
	$(window).resize(function(){
		setTimeout(function(){
			$('#res').text($w.width());
		}, 500);
	});
	$('#res').text($w.width());
})