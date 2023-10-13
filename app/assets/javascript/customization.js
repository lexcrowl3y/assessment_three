// JS customizations 


document.addEventListener("DOMContentLoaded", theDomHasLoaded, false);

function theDomHasLoaded() {
	// banner functionality
	document.querySelector(".banner_close").addEventListener("click", function () {
	  this.closest(".banner").style.display = "none";
	});

	// Create fake links functionality
	// Only run code if on support.html
	if (!document.querySelector('.contact_help') == null || !document.querySelector('.contact_help') == "") {
		//  create an array object
		var items = document.getElementsByClassName("contact_help");
		// define var & set to function call 
		var fake_links = function() {
			alert("Check the footer for real links to places, this is just a fake ...");
		};
		// iterate each item in items array adding an event listener to each of the class objects, execute function on click
		for (var i = 0; i < items.length; i++) {
		    items[i].addEventListener('click', fake_links, false);
		}
	}
	

	// Slider functionality
	const slider = document.querySelector('.slider'); 
	const slides = slider.querySelectorAll('li'); 
	  
	// Store the total number of images 
	const slideCount = slides.length; 
	let activeSlide = 0; 

	console.log(slides);

	// set the first image to display on page load
	slides[activeSlide].classList.add('active');
	  
	// To change the images dynamically every  
	// 5 Secs, use SetInterval() method 
	setInterval(() => { 
	    slides[activeSlide].classList.remove('active'); 
	    activeSlide++; 
	    if (activeSlide === slideCount) { 
	        activeSlide = 0; 
	    } 
	    slides[activeSlide].classList.add('active'); 
	}, 5000);

	// Password functionality
	var pass_input = document.getElementById("psw");
	var letter = document.getElementById("letter");
	var capital = document.getElementById("capital");
	var number = document.getElementById("number");
	var length = document.getElementById("length");

	if (!pass_input == null || !pass_input == "") {
		// When the user clicks on the password field, hide primary_aside_content & show the password assistant
		pass_input.onfocus = function() {
			document.getElementById('primary_aside_content').style.display = "none";
		  	document.getElementById('message').style.display = "block";
		  	document.getElementById('add').style.display = "block";
		}

		// When the user clicks outside of the password field, hide the password assistant & show primary aside content div
		pass_input.onblur = function() {
		  document.getElementById("message").style.display = "none";
		   document.getElementById('add').style.display = "none";
		  document.getElementById('primary_aside_content').style.display = "block";
		}

		// When the user starts to type something inside the password field
		pass_input.onkeyup = function() {
		  // Validate lowercase letters
		  var lowerCaseLetters = /[a-z]/g;
		  if(pass_input.value.match(lowerCaseLetters)) { 
		    letter.classList.remove("invalid");
		    letter.classList.add("valid");
		  } else {
		    letter.classList.remove("valid");
		    letter.classList.add("invalid");
		}

		// Validate capital letters
		var upperCaseLetters = /[A-Z]/g;
		if(pass_input.value.match(upperCaseLetters)) { 
			capital.classList.remove("invalid");
		    capital.classList.add("valid");
		} else {
		    capital.classList.remove("valid");
		    capital.classList.add("invalid");
		}

		// Validate numbers
		var numbers = /[0-9]/g;
		if(pass_input.value.match(numbers)) { 
		    number.classList.remove("invalid");
		    number.classList.add("valid");
		} else {
		    number.classList.remove("valid");
		    number.classList.add("invalid");
		}

		// Validate length
		if(pass_input.value.length >= 8) {
		    length.classList.remove("invalid");
		    length.classList.add("valid");
		} else {
		    length.classList.remove("valid");
		    length.classList.add("invalid");
		  }
		}
	}	
}

function signup() {
	var fname = document.querySelector('#fname').value;
	var lname = document.querySelector('#lname').value;
	var age = document.querySelector('#age').value;
	var email = document.querySelector('#email').value;
	var email_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!email.match(email_format)) {
    	alert("invalid email address, please try again");
    	return false;
    }
	var check_value = document.querySelector('#phone').value;
	if (check_value == null || check_value == "") {
		phNum = document.querySelector('#phone').value = '< number not provided >';
	} else {
		phNum = document.querySelector('#phone').value;
	}
	var pass = document.querySelector('#psw').value;
	alert(`First Name: ${fname}\n Last Name: ${lname}\n Age: ${age}\n Email: ${email}\n Phone: ${phNum}\n Pass: ${pass}\n  Please close this dialog to complete membership process`);
	// console.log(fname);
	displayBanner();	
}

function displayBanner() {
	var fname = document.querySelector('#fname').value;
	var lname = document.querySelector('#lname').value;
	document.querySelector('#user_name').innerHTML = `${fname} ${lname}`
	document.querySelector('.banner').style.display = 'block';
	formToMedia();
}

function formToMedia() {
	document.querySelector('.forms').style.display = 'none';
	document.getElementById('embed').setAttribute('src', 'https://www.youtube.com/embed/hT94urc-MVw?autoplay=1');
	document.querySelector('#media').style.display = 'block'; 
	buttonTricks();
}

function buttonTricks() {
 	document.getElementById('signupbtn').style.display = 'none';
 	document.getElementById('signoutbtn').style.display = 'block';
 	userStatus();
}

function userStatus() {
	var fname = document.querySelector('#fname').value;
	var lname = document.querySelector('#lname').value;
	document.querySelector('#ndata').innerHTML = `${fname} ${lname}`;
	document.querySelector('#team_welcome').style.display = 'none';
	document.querySelector('#user_status').style.display = 'block';
}


