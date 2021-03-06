
var stock = {
		"games": [
			{"title": "Title: Lego Batman", 
			"esrbRating": "ESRB Rating: E 10+ - Everyone 10 & up",
			"esrbDesc": "ESRB Description: Cartoon Violence",
			"genre": "Genre: Action-Adventure",
			"developer": "Developer: Traveller's Tale/TT Fusion",
			"publisher": "Publisher: Warner Bros. Interactive Entertainment",
			"system": "System(s): Cloud(OnLive), Mac OS X, Microsoft Windows, Mobile Phones, Nintendo DS, Playstation 2, Playstation 3, PSP, Wii, Xbox 360",
			"modes": "Modes: Single and Co-op",
			"co-op": "Co-op: Yes",
			"players": "Number of Players: 1-2",
			"photo": "photo/Lego_Batman.jpg"},
			
			{"title": "Title: Mortal Kombat vs. DC Universe", 
			"esrbRating": "ESRB Rating: T - Teen",
			"esrbDesc": "ESRB Description: Blood, Suggestive Theme, Violence",
			"genre": "Genre: Fighting",
			"developer": "Developer: Warner Bros. Interactive Entertainment",
			"publisher": "Publisher: Midway Games",
			"system": "System(s): Playstation 3, Xbox 360",
			"modes": "Modes: Single and Multiplayer",
			"co-op": "Co-op: N/A",
			"players": "Number of Players: 1-2",
			"photo": "photo/20Mortal_Kombat_vs._DC_Universe_Coverart.png"},
			
			{"title": "Title: The Elder Scroll V: Skyrim", 
			"esrbrating": "ESRB Rating: M -Mature",
			"esrbDesc": "ESRB: Description: Blood and Gore, Intense Violence, Sexual Theme, Use of Alcohol",
			"genre": "Genre: Action Role-Playing",
			"developer": "Developer: Bethesda Game Studios",
			"publisher": "Publisher: Bethesda Softworks",
			"system": "System(s): Microsoft Windows, Playstation 3, Xbox 360",
			"modes": "Modes: Single",
			"co-op": "Co-op: N/A",
			"players": "Number of Players: 1",
			"photo": "photo/Skyrim.jpg"},
			
			{"title": "Title: Bully", 
			"esrbrating": "ESRB Rating: T - Teen",
			"esrbDesc": "ESRB Description: Animated Blood, Crude Humor, Language, Sexual Theme, Use of Alcohol & Tobacco, Violence",
			"genre": "Genre: Action-Adventure",
			"developer": "Developer: Rockstar New England",
			"publisher": "Publisher: Rockstar Games",
			"system": "System(s): Microsoft Windows, Playstation 2, Wii, Xbox 360",
			"modes": "Modes: Single",
			"co-op": "Co-op: No",
			"players": "Number of Players: 1",
			"photo": "photo/Bully.jpg"},
				
			{"title": "Title: Left 4 Dead", 
			"esrbRating": "ESRB Rating: M - Mature",
			"esrbDesc": "ESRB Description: Blood and Gore, Intense Violence, Language",
			"genre": "Genre: First-Person Shooter/Survival Horror",
			"developer": "Developer: Valve Corporation",
			"publisher": "Publisher: Valve Corporation",
			"system": "System(s): Microsoft Windows, Xbox 360, OS X",
			"modes": "Modes: Single and Multiplayer",
			"co-op": "Co-op: Yes",
			"players": "Number of Players: 1-2, Multiplayer: 2-8",
			"photo": "photo/Left_4_Dead.jpg"},
			
			{"title": "Title: Dead Rising 2", 
			"esrbRating": "ESRB Rating: M - Mature",
			"esrbDesc": "ESRB Description: Blood and Gore, Use of Alcohol, Intense Violence, Language, Sexual Theme",
			"genre": "Genre: Survival Horror",
			"developer": "Developer: Blue Castle Games",
			"publisher": "Publisher: Capcom",
			"system": "System(s): Microsoft Windows, Playstation 3, Xbox 360",
			"modes": "Modes: Single and Multiplayer",
			"co-op": "Co-op: Yes(Online Only)",
			"players": "Number of Players: 1-2, Multiplayer: 2-4",
			"photo": "photo/550w_gaming_deadrising2_box.jpg"},
			
			{"title": "Title: Tiger Woods PGA Tour 14", 
			"esrbRating": "ESRB Rating: E - Everyone",
			"esrbDesc": "ESRB Description: Golf Simulation",
			"genre": "Genre: Sports",
			"developer": "Developer: EA Tiburon",
			"publisher": "Publisher: EA Sports",
			"system": "System(s): Playstation 3, Xbox 360",
			"modes": "Mode: Single and Multiplayer",
			"co-op": "Co-op: Yes",
			"players": "Number of Players: 1-4",
			"photo": "photo/tiger_woods_pga_tour_14.jpg"},
			
			{"title": "Title: Tom Clancy's: Splinter Cell Blacklist", 
			"esrbRating": "ESRB Rating: M - Mature",
			"esrbDesc": "ESRB Description: Blood and Gore, Drug Reference, Intense Violence, Strong Language",
			"genre": "Genre: Action-Adventure",
			"developer": "Developer: Ubisoft",
			"publisher": "Publisher: Ubisoft",
			"system": "System(s): Microsoft Windows, Playstation 3, Wii U, Xbox 360",
			"modes": "Mode: Single and Multiplayer",
			"co-op": "Co-op: Yes",
			"players": "Number of Players: 1-2, Multiplayer: 2-8",
			"photo": "photo/Splinter_Cell_Blacklist.jpg"},
			
			{"title": "Title: Lego Marvel Super Heroes", 
			"esrbRating": "ESRB Rating: E 10+ - Everone 10 & up",
			"esrbDesc": "ESRB Description: Cartoon Violence",
			"genre": "Genre: Action-Adventure",
			"developer": "Developer: TT Games",
			"publisher": "Publisher: Warner Bros. Interactive Entertainment",
			"system": "System(s): Microsoft Windows, Nintendo DS, Nintendo 3DS, Playstation 3, Playstation 4, Wii U, Xbox 360, Xbox One",
			"modes": "Modes: Single and Multiplayer",
			"co-op": "Co-op: Yes",
			"players": "Number of Players: 1-2",
			"photo": "photo/LEGO_Marvel_Super_Heroes_box_art.jpg"},
			
			{"title": "Title: Little Big Planet 2", 
			"esrbRating": "ESRB Rating: E - Everyone",
			"esrbDesc": "ESRB Description: Comic Mischief, Mild Cartoon Violence",
			"genre": "Genre: Puzzle",
			"developer": "Developer: Media Molecule",
			"publisher": "Publisher: Sony Computer Entertainment",
			"system": "System(s): Playstation 3",
			"modes": "Modes: Single and Multiplayer",
			"coop": "Co-op: Yes",
			"players": "Number of Players: 1-4",
			"photo": "photo/little_big_planet_2_boxart.jpg"},
		]		
};

// for(n in stock){
	// for(var i = 0; i<stock.games.length; i++){
		// var listview = Ti.UI.createScrollView({
			// title: stock.games[i].title,
			// esrb: stock.games[i].esrbRating,
			// desc: stock.games[i].esrbDesc,
			// genre: stock.games[i].genre,
			// dev: stock.games[i].developer,
			// pub: stock.games[i].publisher,
			// sys: stock.games[i].system,
			// modes: stock.games[i].modes,
			// coop: stock.games[i].coop,
			// play: stock.games[i].players,
			// photo: stock.games[i].photo,
			// hasChild: true			
		// });
	// };
// 	
// };
// for(var i=0; i<stock.games.length; i++){
	// var listView = Ti.UI.createView({
		// backgroundColor: "#fff",
		// top: 0,
		// height: 100,
		// width: "100%"
	// });
// 	
// };
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
for(var i=0; i<stock.games.length; i++)
	var detailScrollView = Ti.UI.createScrollView({
		showVerticalScaleIndicator: true,
	});
	var detailImage = Ti.UI.createImageView({
		
	});
	
listView0.addEventListener("click", function(e){
	var detailWin = Ti.UI.createWindow({
		modal: true,
		backgroundColor:"#0f628b" 
	});
	detailWin.add();
	navWin.openWindow(detailWin), {animate: true};
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
