
//<![CDATA[			
	function change_background_1(){
		document.getElementById("marquee").style.background = "url('images/chicago-business-img.jpg') no-repeat center center";
		document.getElementById("business").style.visibility = "visible";
		document.getElementById("business").style.color = "red";
		document.getElementById("culture-recreation").style.visibility = "hidden";
		document.getElementById("environment").style.visibility = "hidden";
		document.getElementById("housing-dev").style.visibility = "hidden";
		document.getElementById("soc-services").style.visibility = "hidden";
		document.getElementById("civic-services").style.visibility = "hidden";
		document.getElementById("education").style.visibility = "hidden";
		document.getElementById("health").style.visibility = "hidden";
	}
			
	function change_background_2(){
		document.getElementById("marquee").style.background = "url('images/chicago-culture-recreation-img.jpg') no-repeat center center";
		document.getElementById("culture-recreation").style.visibility = "visible";
		document.getElementById("culture-recreation").style.color = "red";
		document.getElementById("business").style.visibility = "hidden";
		document.getElementById("environment").style.visibility = "hidden";
		document.getElementById("housing-dev").style.visibility = "hidden";
		document.getElementById("soc-services").style.visibility = "hidden";
		document.getElementById("civic-services").style.visibility = "hidden";
		document.getElementById("education").style.visibility = "hidden";
		document.getElementById("health").style.visibility = "hidden";
	}
			
	function change_background_3(){
		document.getElementById("marquee").style.background = "url('images/chicago-environment-img.jpg') no-repeat center center";
		document.getElementById("environment").style.visibility = "visible";
		document.getElementById("environment").style.color = "red";
		document.getElementById("culture-recreation").style.visibility = "hidden";
		document.getElementById("business").style.visibility = "hidden";
		document.getElementById("housing-dev").style.visibility = "hidden";
		document.getElementById("soc-services").style.visibility = "hidden";
		document.getElementById("civic-services").style.visibility = "hidden";
		document.getElementById("education").style.visibility = "hidden";
		document.getElementById("health").style.visibility = "hidden";
	}
	
	function change_background_4(){
		document.getElementById("marquee").style.background = "url('images/chicago-housing-dev-img.jpg') no-repeat center center";
		document.getElementById("housing-dev").style.visibility = "visible";
		document.getElementById("housing-dev").style.color = "red";
		document.getElementById("culture-recreation").style.visibility = "hidden";
		document.getElementById("environment").style.visibility = "hidden";
		document.getElementById("business").style.visibility = "hidden";
		document.getElementById("soc-services").style.visibility = "hidden";
		document.getElementById("civic-services").style.visibility = "hidden";
		document.getElementById("education").style.visibility = "hidden";
		document.getElementById("health").style.visibility = "hidden";
	}
	
	function change_background_5(){
		document.getElementById("marquee").style.background = "url('images/chicago-social-services-img.jpg') no-repeat center center";
		document.getElementById("soc-services").style.visibility = "visible";
		document.getElementById("soc-services").style.color = "red";
		document.getElementById("culture-recreation").style.visibility = "hidden";
		document.getElementById("environment").style.visibility = "hidden";
		document.getElementById("housing-dev").style.visibility = "hidden";
		document.getElementById("business").style.visibility = "hidden";
		document.getElementById("civic-services").style.visibility = "hidden";
		document.getElementById("education").style.visibility = "hidden";
		document.getElementById("health").style.visibility = "hidden";
	}
			
	function change_background_6(){
		document.getElementById("marquee").style.background = "url('images/chicago-civic-services-img.jpg') no-repeat center center";
		document.getElementById("civic-services").style.visibility = "visible";
		document.getElementById("civic-services").style.color = "red";
		document.getElementById("culture-recreation").style.visibility = "hidden";
		document.getElementById("environment").style.visibility = "hidden";
		document.getElementById("housing-dev").style.visibility = "hidden";
		document.getElementById("soc-services").style.visibility = "hidden";
		document.getElementById("business").style.visibility = "hidden";
		document.getElementById("education").style.visibility = "hidden";
		document.getElementById("health").style.visibility = "hidden";
	}
			
	function change_background_7(){
		document.getElementById("marquee").style.background = "url('images/chicago-education-img.jpg') no-repeat center center";
		document.getElementById("education").style.visibility = "visible";
		document.getElementById("education").style.color = "red";
		document.getElementById("culture-recreation").style.visibility = "hidden";
		document.getElementById("environment").style.visibility = "hidden";
		document.getElementById("housing-dev").style.visibility = "hidden";
		document.getElementById("soc-services").style.visibility = "hidden";
		document.getElementById("civic-services").style.visibility = "hidden";
		document.getElementById("business").style.visibility = "hidden";
		document.getElementById("health").style.visibility = "hidden";
	}
	
	function change_background_8(){
		document.getElementById("marquee").style.transition="background 2s ease-in-out";
		document.getElementById("marquee").style.background = "url('images/chicago-health-img.jpg') no-repeat center center";
		document.getElementById("health").style.visibility = "visible";
		document.getElementById("health").style.color = "red";
		document.getElementById("culture-recreation").style.visibility = "hidden";
		document.getElementById("environment").style.visibility = "hidden";
		document.getElementById("housing-dev").style.visibility = "hidden";
		document.getElementById("soc-services").style.visibility = "hidden";
		document.getElementById("civic-services").style.visibility = "hidden";
		document.getElementById("education").style.visibility = "hidden";
		document.getElementById("business").style.visibility = "hidden";
	}
		
	$(document).ready(function(){
		$('#menu-mobile-ui').click(function(){
			if($('.white-nav-elt').is(':visible')) {
				$('.white-nav-elt').hide();
			} else {
				$('.white-nav-elt').show();
			}
		});
	});

//]