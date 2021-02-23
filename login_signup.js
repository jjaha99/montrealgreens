const signUpButton = document.getElementById('signUp');
	const signInButton = document.getElementById('signIn');
	const container = document.getElementById('container');

	signUpButton.addEventListener('click', () => {
		container.classList.add("right-panel-active");
	});

	signInButton.addEventListener('click', () => {
		container.classList.remove("right-panel-active");
	});



	
    var fullname = document.getElementById("nameId").value;
    var address = document.getElementById("addressId").value;
    var postalcode = document.getElementById("postalCodeId").value;
    var country = document.getElementById("countryId").value;
    var email = document.getElementById("emailId").value;
    var password = document.getElementById("passwordId").value;
    var confirmpassword = document.getElementById("confirmpasswordId").value;
    var isNotEqual = password !== confirmpassword ? true : false;
	var psdId = document.getElementById("passwordId");
	var letter = document.getElementById("letter");
	var capital = document.getElementById("capital");
	var number = document.getElementById("number");
	var length = document.getElementById("length");



	// When the user clicks on the password field, show the message box
	psdId.onfocus = function() {
		document.getElementById("message").style.display = "block";
  	}
  
  	// When the user clicks outside of the password field, hide the message box
  	psdId.onblur = function() {
		document.getElementById("message").style.display = "none";
  	}

	  // When the user starts to type something inside the password field
	  psdId.onkeyup = function() {
		// Validate lowercase letters
		var lowerCaseLetters = /[a-z]/g;
		if(psdId.value.match(lowerCaseLetters)) {
		letter.classList.remove("invalid");
		letter.classList.add("valid");
		} else {
		letter.classList.remove("valid");
		letter.classList.add("invalid");
	}
	
		// Validate capital letters
		var upperCaseLetters = /[A-Z]/g;
		if(psdId.value.match(upperCaseLetters)) {
		capital.classList.remove("invalid");
		capital.classList.add("valid");
		} else {
		capital.classList.remove("valid");
		capital.classList.add("invalid");
		}
	
		// Validate numbers
		var numbers = /[0-9]/g;
		if(psdId.value.match(numbers)) {
		number.classList.remove("invalid");
		number.classList.add("valid");
		} else {
		number.classList.remove("valid");
		number.classList.add("invalid");
		}
	
		// Validate length
		if(psdId.value.length >= 8) {
		length.classList.remove("invalid");
		length.classList.add("valid");
		} else {
		length.classList.remove("valid");
		length.classList.add("invalid");
		}
  }


  // Sign up validation 
  function signUp(){
	fullname = document.getElementById("nameId").value;
    address = document.getElementById("addressId").value;
    postalcode = document.getElementById("postalCodeId").value;
    country = document.getElementById("countryId").value;
    email = document.getElementById("emailId").value;
    password = document.getElementById("passwordId").value;
    confirmpassword = document.getElementById("confirmpasswordId").value;
    isNotEqual = password !== confirmpassword ? true : false;
	if(isNotEqual){
        alert("You're password and confirm password are not the same. Please put the same password.");
    }
  }