var userNameTextField = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color: "#336699",
	width: 250,
	height: 30
});

var userNameLabel = Ti.UI.createLabel({
	text: "Create a User Name",
	font: {fontSize: 15, fontFamily: "Times New Roman"},
	top: 20,
	left: 35
});

var userInputHint = Ti.UI.createLabel({
	text: "Enter 6-8 characters. Example: jsmith",
	font: {fontSize: 13, fontFamily: "Times New Roman"},
	left: 35
});

var emailFieldLabel = Ti.UI.createLabel({
	text: "Enter Email Address",
	font: {fontSize: 15, fontFamily: "Times New Roman"},
	top: 15,
	left: 35
});

var emailTextField = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color: "#336699",
	width: 250,
	height: 30
});

var passLabelField = Ti.UI.createLabel({
	text: "Create Password",
	font: {fontSize: 15, fontFamily: "Times New Roman"},
	top: 15,
	left: 35
});

var passTextField = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color: "#336699",
	width: 250,
	heigth: 30
});

var passHintFieldLabel = Ti.UI.createLabel({
	text: "Enter min. 8 characters.",
	font: {fontSize: 13, fontFamily: "Times New Roman"},
	left: 35
});

var confirmPassFieldLabel = Ti.UI.createLabel({
	text: "Confirm Password.",
	font: {fontSize: 15, fontFamily: "Times New Roman"},
	top: 15,
	left: 35
});

var confirmPassTextField = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color: "#336699",
	width: 250,
	height: 30
});

var doneButton = Ti.UI.createButton({
	title: "Done",
	backgroundColor: "green",
	color: "#000",
	borderRadius: 5,
	top: 20,
	width: 250,
	height: 30
});

// var convertWin = Ti.UI.createWindow({
	// modal: true,
	// backgroundColor: "#0f628b"
// });

var usTextLabel = Ti.UI.createLabel({
	text: "Enter U.S. Dollars",
	font: {fontSize: 15, fontFamily: "Times New Roman"},
	top: 50,
	left: 10
});

var usTextField = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color: "#336699",
	value: "1",
	width: 125,
	height: 30,
	top: (usTextLabel.top + 20),
	left: 10
});

var usConvertButton = Ti.UI.createButton({
	title: "Convert to Pounds",
	backgroundColor: "#C0C0C0",
	color: "#000",
	font: {fontSize: 12},
	borderRadius: 5,
	top: usTextField.top,
	width: 125,
	height: 30,
	right: 10
});

var poundsTextLabel = Ti.UI.createLabel({
	text: "Enter British Pounds",
	font: {fontSize: 15, fontFamily: "Times New Roman"},
	top: (usTextField.top + usTextField.height) + 20,
	left: 10
});

var poundsTextField = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color: "#336699",
	value: "1.33",
	width: 125,
	height: 30,
	top: poundsTextLabel.top + 20,
	left: 10
});

var poundsConvertButton = Ti.UI.createButton({
	title: "Convert to Dollars",
	backgroundColor: "#C0C0C0",
	color: "#000",
	font: {fontSize: 12},
	borderRadius: 5,
	top: poundsTextField.top,
	width: 126,
	height: 30,
	right: 10
});

doneButton.addEventListener("click", function(e){
	//if (userNameTextField.value >= 6 && userNameTextField.value <= 8){
		//if (passTextField.value < 8 && passTextField.value == confirmPassTextField){
			var convertWin = Ti.UI.createWindow({
			modal: true,
			backgroundColor: "#0f628b"
			});
			
			convertWin.add(usTextLabel, usTextField, usConvertButton, poundsTextLabel, poundsTextField, poundsConvertButton);
			navWin.openWindow(convertWin), {animate: true};
		//}
		
	//}
	
});

signUpButton.addEventListener("click", function(e){
	
	var signUpWin = Ti.UI.createWindow({
		modal: true,
		backgroundColor: "#0f628b"
	});
	
	var signUpView = Ti.UI.createScrollView({
		showVerticalScaleIndicator: true,
		layout: "vertical"
	});

signUpView.add(userNameLabel, userNameTextField, userInputHint, emailFieldLabel, emailTextField, passLabelField, passTextField, passHintFieldLabel, confirmPassFieldLabel, confirmPassTextField, doneButton);
signUpWin.add(signUpView);
navWin.openWindow(signUpWin), {animate: true};
});


