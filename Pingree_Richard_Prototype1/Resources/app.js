var mainWin = Ti.UI.createWindow({
	backgroundcolor: "#3C7502"
	
});

var navWin = Ti.UI.iOS.createNavigationWindow({
	window: mainWin
});

navWin.open();
