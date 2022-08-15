$(document).ready(function(){


	// Start of Header

	// Start of Nav


	$(".navbuttons").click(function(){
		$(".navbuttons").toggleClass("crossxs");
	});

	// for nav
	$(window).scroll(function(){

		let getscrolltop = $(this).scrollTop();
		// console.log(getscrolltop);

		if(getscrolltop >= 200){
			$(".navbar").addClass("navmenus");
		}else{
			$(".navbar").removeClass("navmenus");
		}

	});

	// End of Nav


	// End of Header

	// Start of About Us Section

	$(window).scroll(function(){

		let advimage = $(this).scrollTop();
		// console.log(advimagemove);

		if(advimage >= 200){
			$(".aboutusimg").addClass("advimagemove");
		}else{
			$('.aboutusimg').removeClass("advimagemove");
		} 


	});


	// End of About Us Section

	// Start Of Our Services Section


	$(".ourservices").click(function(){

		// for active item

		$(this).addClass("activeitems").siblings().removeClass("activeitems");


		// for filter

		let getattvalue = $(this).attr("data-filter");
		console.log(getattvalue);

		if(getattvalue === "all"){	
			$(".filters").show("slide",700);
		}else{
			$(".filters").hide();
			$(".filters").not("."+getattvalue).hide("slide",700);
			$(".filters").filter("."+getattvalue).show("slide",700);
		}


	});

	// For image overlay (or) lightbox2
	lightbox.option({
		showImageNumberLabel: true
	});


	// End Of Our Services Section


	// Start Of ADV Section

	$("#videos").click(function(){
		var getmodal = $(this).data("bs-target");
		var getvideosrc = $(this).data("video");
		var videourlwithauto = getvideosrc+"?autoplay=1";

		$(getmodal + " iframe").attr("src",videourlwithauto);

		$(getmodal + " button.btn-close").click(function(){
			$(getmodal+ " iframe").attr("src",getvideosrc);
		});

		$(getmodal).click("hidden.bs.modal",function(){
			$(getmodal+ " iframe").attr("src",getvideosrc);
		});
	});	

	// End Of ADV Section

	// Start Of Pricing Section

	$(window).scroll(function(){

		let getscrolltop = $(this).scrollTop();
		// console.log(getscrolltop);

		if(getscrolltop >= 3000){
			$(".cardones").addClass("movelefts");
			$(".cardtwos").addClass("movebottoms");
			$(".cardthrees").addClass("moverights");
		}else{
			$(".cardones").removeClass("movelefts");
			$(".cardtwos").removeClass("movebottoms");
			$(".cardthrees").removeClass("moverights");
		}


	});


	// End Of Pricing Section

	// Start Of Join Us Section
	$("#accordion").accordion();
	// End Of Join Us Section


	// Start Of Footer Section
	$("#getyear").text(new Date().getUTCFullYear());

	// End Of Footer Section

	// Start Of Progress-circle
	$(window).scroll(function(){
		var getprogress = $("#progresses");
		var getprogressval = $("#progressvalues");
		var getscrolltop = $(this).scrollTop();
		// console.log(getscrolltop);

		// By Jquery
		// var getscrollheight = $(document).height();
		// console.log(getscrollheight);
		// var geclientheight = $(window).height();
		// console.log(geclientheight);
		// var calcheight = getscrollheight - geclientheight;
		// var getfinalheight = Math.round(getscrolltop * 100 / calcheight);
		// console.log(getfinalheight);

		// By JavaScript
		var getscrollheight = document.documentElement.scrollHeight;
		// console.log(getscrollheight);
		var geclientheight = document.documentElement.clientHeight;
		// console.log(geclientheight);
		var calcheight = getscrollheight - geclientheight;
		var getfinalheight = Math.round(getscrolltop * 100 / calcheight);
		// console.log(getfinalheight);



		getprogressval.text(`${getfinalheight}%`);
		getprogress.css({
			"background":`conic-gradient(steelblue ${getfinalheight}%,#eee ${getfinalheight}%)`
		});

	});
	// End Of Progress-circle



});