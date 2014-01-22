	var listScrollView = Ti.UI.createScrollView({
		showVerticalScaleIndicator: true,
	});
// Line 1	
	var listView0 = Ti.UI.createView({
		backgroundColor: "#fff",
		top: 0,
		height: 100,
		width: "100%"
		
	});
	var listPhotoView0 = Ti.UI.createView({
		backgroundColor: "#fff",
		top: 0,
		left: 0,
		width: 70,
		height: 100
	});
	var listLabel0 = Ti.UI.createLabel({
		text: "Lego Batman",
		font: {fontSize: 15, fontFamily: "Times New Roman"},
		left: listPhotoView0.width + 5
	});
	var photoView0 = Ti.UI.createImageView({
		image: "photos/Lego_Batman.jpg",
		height: listPhotoView0.height,
	});
//Line 2
	var listView1 = Ti.UI.createView({
		backgroundColor: "#fff",
		top: listView0.height,
		height: 100,
		width: "100%"
		
	});
	var listLabel1 = Ti.UI.createLabel({
		text: "Mortal Kombat vs. DC Universe",
		font: {fontSize: 15, fontFamily: "Times New Roman"},
		left: listPhotoView0.width + 5
		
	});
	var listPhotoView1 = Ti.UI.createView({
		backgroundColor: "#fff",
		top: 0,
		left: 0,
		width: 70,
		height: 100
	});
	var photoView1 = Ti.UI.createImageView({
		image: "photos/20Mortal_Kombat_vs._DC_Universe_Coverart.png",
		height: listPhotoView1.height,
	});
// Line 3
	var listView2 = Ti.UI.createView({
		backgroundColor: "#fff",
		top: listView1.height * 2,
		height: 100,
		width: "100%"
		
	});
	var listLabel2 = Ti.UI.createLabel({
		text: "The Elder Scrolls V: Skyrim",
		font: {fontSize: 15, fontFamily: "Times New Roman"},
		left: listPhotoView0.width + 5
		
	});
	var listPhotoView2 = Ti.UI.createView({
		backgroundColor: "#fff",
		top: 0,
		left: 0,
		width: 70,
		height: 100
	});
	var photoView2 = Ti.UI.createImageView({
		image: "photos/Skyrim.jpg",
		height: listPhotoView2.height,
	});
// Line 4
	var listView3 = Ti.UI.createView({
		backgroundColor: "#fff",
		top: listView1.height * 3,
		height: 100,
		width: "100%"
		
	});
	var listLabel3 = Ti.UI.createLabel({
		text: "Bully",
		font: {fontSize: 15, fontFamily: "Times New Roman"},
		left: listPhotoView0.width + 5
		
	});
	var listPhotoView3 = Ti.UI.createView({
		backgroundColor: "#fff",
		top: 0,
		left: 0,
		width: 70,
		height: 100
	});
	var photoView3 = Ti.UI.createImageView({
		image: "photos/Bully.jpg",
		height: listPhotoView2.height,
	});
// Line 5
	var listView4 = Ti.UI.createView({
		backgroundColor: "#fff",
		top: listView1.height * 4,
		height: 100,
		width: "100%"
		
	});
	var listLabel4 = Ti.UI.createLabel({
		text: "Left 4 Dead",
		font: {fontSize: 15, fontFamily: "Times New Roman"},
		left: listPhotoView0.width + 5
		
	});
	var listPhotoView4 = Ti.UI.createView({
		backgroundColor: "#fff",
		top: 0,
		left: 0,
		width: 70,
		height: 100
	});
	var photoView4 = Ti.UI.createImageView({
		image: "photos/Left_4_Dead.jpg",
		height: listPhotoView2.height,
	});
// Line 6
	var listView5 = Ti.UI.createView({
		backgroundColor: "#fff",
		top: listView1.height * 5,
		height: 100,
		width: "100%"
		
	});
	var listLabel5 = Ti.UI.createLabel({
		text: "Dead Rising 2",
		font: {fontSize: 15, fontFamily: "Times New Roman"},
		left: listPhotoView0.width + 5
		
	});
	var listPhotoView5 = Ti.UI.createView({
		backgroundColor: "#fff",
		top: 0,
		left: 0,
		width: 70,
		height: 100
	});
	var photoView5 = Ti.UI.createImageView({
		image: "photos/550w_gaming_deadrising2_box.jpg",
		height: listPhotoView2.height,
	});
// Line 7
	var listView6 = Ti.UI.createView({
		backgroundColor: "#fff",
		top: listView1.height * 6,
		height: 100,
		width: "100%"
		
	});
	var listLabel6 = Ti.UI.createLabel({
		text: "Tiger Woods PGA Tour 14",
		font: {fontSize: 15, fontFamily: "Times New Roman"},
		left: listPhotoView0.width + 5
		
	});
	var listPhotoView6 = Ti.UI.createView({
		backgroundColor: "#fff",
		top: 0,
		left: 0,
		width: 70,
		height: 100
	});
	var photoView6 = Ti.UI.createImageView({
		image: "photos/tiger_woods_pga_tour_14.jpg",
		height: listPhotoView2.height,
	});
// Line 8
	var listView7 = Ti.UI.createView({
		backgroundColor: "#fff",
		top: listView1.height * 7,
		height: 100,
		width: "100%"
	});
	var listLabel7 = Ti.UI.createLabel({
		text: "Tom Clancy's Splinter Cell: Blacklist",
		font: {fontSize: 15, fontFamily: "Times New Roman"},
		left: listPhotoView0.width + 5
	});
	var listPhotoView7 = Ti.UI.createView({
		backgroundColor: "#fff",
		top: 0,
		left: 0,
		width: 70,
		height: 100
	});
	var photoView7 = Ti.UI.createImageView({
		image: "photos/Splinter_Cell_Blacklist.jpg",
		height: listPhotoView2.height,
	});
// Line 9	
	var listView8 = Ti.UI.createView({
		backgroundColor: "#fff",
		top: listView1.height * 8,
		height: 100,
		width: "100%"
	});
	var listLabel8 = Ti.UI.createLabel({
		text: "Lego Marvel Super Heroes",
		font: {fontSize: 15, fontFamily: "Times New Roman"},
		left: listPhotoView0.width + 5
	});
	var listPhotoView8 = Ti.UI.createView({
		backgroundColor: "#fff",
		top: 0,
		left: 0,
		width: 70,
		height: 100
	});
	var photoView8 = Ti.UI.createImageView({
		image: "photos/LEGO_Marvel_Super_Heroes_box_art.jpg",
		height: listPhotoView2.height,
	});
//Line 10
	var listView9 = Ti.UI.createView({
		backgroundColor: "#fff",
		top: listView1.height * 9,
		height: 100,
		width: "100%"
	});
	var listLabel9 = Ti.UI.createLabel({
		text: "Lego Marvel Super Heroes",
		font: {fontSize: 15, fontFamily: "Times New Roman"},
		left: listPhotoView0.width + 5
	});
	var listPhotoView9 = Ti.UI.createView({
		backgroundColor: "#fff",
		top: 0,
		left: 0,
		width: 70,
		height: 100
	});
	var photoView9 = Ti.UI.createImageView({
		image: "photos/little_big_planet_2_boxart.jpg",
		height: listPhotoView2.height,
	});
loginButton.addEventListener("click", function(e){
	var listWin = Ti.UI.createWindow({
		modal: true,
		backgroundColor: "#0f628b"
	});
	listWin.add(listScrollView);
	navWin.openWindow(listWin), {animate: true};
});

listScrollView.add(listView0,listView1,listView2, listView3, listView4, listView5, listView6, listView7, listView8, listView9);
listView0.add(listPhotoView0,listLabel0);
listPhotoView0.add(photoView0);
listView1.add(listPhotoView1, listLabel1);
listPhotoView1.add(photoView1);
listView2.add(listPhotoView2, listLabel2);
listPhotoView2.add(photoView2);
listView3.add(listPhotoView3, listLabel3);
listPhotoView3.add(photoView3);
listView4.add(listPhotoView4, listLabel4);
listPhotoView4.add(photoView4);
listView5.add(listPhotoView5, listLabel5);
listPhotoView5.add(photoView5);
listView6.add(listPhotoView6, listLabel6);
listPhotoView6.add(photoView6);
listView7.add(listPhotoView7, listLabel7);
listPhotoView7.add(photoView7);
listView8.add(listPhotoView8, listLabel8);
listPhotoView8.add(photoView8);
listView9.add(listPhotoView9, listLabel9);
listPhotoView9.add(photoView9);