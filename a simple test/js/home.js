var num = $(".carousel-item").length;
var previous = 0;
var current = 0;

var playvideo = false;

$(document).ready(function(){
	//dropdown menu for mobile
	$("#services-menu").hover(function(){
		$("#service-menu .services-dropdown").toggle();
	});

	//imgs carousel
    $(".carousel .carousel-index li").click(function(){
        var i = $(this).val();

        if(i+1 > num) return;

        $(".carousel-item").eq(previous).fadeOut(1500);
        $(".carousel-item").eq(i).fadeIn(1500);

        $(this).toggleClass("on");
        $(this).siblings().removeClass("on");

        current = i;
        previous = current;
    }); 

    var timer = setInterval(autoShowImage, 3000);

    $(".carousel .carousel-index, .carousel .carousel-item").hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(autoShowImage, 3000);
    });

    //back to top
    $(".back-button").click(function(){ 
        if ($('html').scrollTop()) {
            $('html').animate({ scrollTop: 0 }, 1000); 
        }  

        $('body').animate({ scrollTop: 0 }, 1000);     
    }); 

    //video play control
    $(window).scroll(function(){
    	if(playvideo){
    		$(window).unbind('scroll');
    	}

    	if( $(document).scrollTop() + $(window).height() >= $("#detail").offset().top ){
    		playvideo = true;
    		$('.how-video video').trigger('play');
    	}
    });

    //modal
    $(".get-started-modal-button").click(function(){
		$("#get-started-modal").show();
	});

	$("#close-button").click(function(){
		$("#get-started-modal").hide();
	});

	$("#submit-button").click(function(){
		$("#form-wrap").hide();
		$("#after-submit").show();
		var countTime = 3;
		var countDownTimer = setInterval(function(){
			$("#count-number").html(--countTime);
			if (countTime == 0) {
				clearInterval(countDownTimer);
				$("#count-number").html(3);
				$("#form-wrap").toggle();
				$("#after-submit").toggle();
				$("#get-started-modal").hide();
			}
		}, 1000);
	});

});


function autoShowImage(){
    current = (current >= (num -1)) ? 0 : ++current;
    $(".carousel .carousel-index li").eq(current).trigger('click');
}