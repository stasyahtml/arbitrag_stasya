$(document).ready(function(){  

	var input_filt = $(".filters input.input_filt");
	var input_filt2 = $(".filters input.input_filt2");
	
	input_filt.focus(function() {
		$(".filt_men1").css('display','block');
	});
	input_filt2.focus(function() {
		$(".filt_men2").css('display','block');
	});
	
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".filt_men1"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.hide(); // скрываем его
		}
	});
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".filt_men2"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.hide(); // скрываем его
		}
	});


//////////////////////////////////////////////////////////

	var roll = $(".projects .filt span:nth-child(2)");
	roll.click(function () {
        $("form.form1").slideToggle(1500,function(){
      });
    });

     var rollUPmain1 = $(".main .left .buttons .sorting_buttons button:first-child");
    rollUPmain1.click(function () {
        $(".main_describ").slideDown(1500,function(){
      });
    });

    var rollUPmain2 = $(".main .left .buttons .sorting_buttons button:nth-child(2)");
	rollUPmain2.click(function () {
        $(".main_describ").slideUp(1500,function(){
      });
    });

//////////////////////////////////////////////////////////  
   



});

