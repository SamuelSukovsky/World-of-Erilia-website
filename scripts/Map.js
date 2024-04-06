
	// CSWD  CA2 (2022) GD1b - Samuel Sukovsky

const landMasses = 														// set landMasses data
[
//  [x, y, acronym 1, acronym 2, zoom scale, focus colour, [focus rgba], unfocus colour, [unfocus rgba], "continent name"],
	[0, 0, "", "", 40, "#000000", [0, 0, 0, 0], "#000000",[0, 0, 0, 0], "Empty"],
	[2200, 7900, "Ln", "Ltn", 18, "#4477cf", [68, 119, 207, 255], "#D0D0D0",[208, 208, 208, 255], "Lutena"],
	[3500, 180, "Tn", "Tnn", 8, "#F1FDA5", [240, 253, 165, 255], "#D1D1D1",[209, 209, 209, 255], "Tainarn"],
	[0, 0, "Zr", "Zzr", 25, "#8DCD85", [141, 205, 133, 255], "#D2D2D2",[210, 210, 210, 255], "Zadzar"],
];
const lands = 															// set lands data
[
//  ["image file", x, y, zoom x, zoom y, zoom scale, focus colour, [focus rgba], unfocus colour, [unfocus rgba], "state name", "acronym", "continent id"],
	["https://i.imgur.com/j1smzFl.png", 8450, 2700, 5000, 2200, 12, "#F28DA5", [242, 141, 165, 255], "#F2ADC5", [242, 173, 197, 255], "Alneia", "Ana", 1],
	["https://i.imgur.com/oHif7RI.png", 8885, 3095, 7200, 2250, 6, "#20AFE3", [32, 175, 227, 255], "#60CFD3", [96, 207, 211, 255], "Arinia", "Aia", 1],
	["https://i.imgur.com/fgUWsrl.png", 5290, 2272, 3500, 1450, 5, "#FABB84", [250, 187, 132, 255], "#FADBC4", [250, 219, 196, 255], "Auria", "Aua", 1],
	["https://i.imgur.com/lRFwicE.png", 5260, 3410, 3522, 2600, 5, "#27E8E6", [39, 232, 230, 255], "#87E8E6", [135, 232, 230, 255], "Baletia", "Bia", 1],
	["https://i.imgur.com/4A03LSE.png", 10500, 2380, 8500, 1750, 6, "#F6FF7F", [246, 255, 127, 255], "#F0F5AF", [240, 245, 175, 255], "Berminia", "Bin", 1],
	["https://i.imgur.com/8ZL9Jb8.png", 10175, 2675, 8000, 2050, 6, "#8CEB59", [140, 235, 89, 255], "#BCEB99", [188, 235, 153, 255], "Bornum", "Bum", 1],
	["https://i.imgur.com/P2PxotJ.png", 0, 0, 0, 0, 21, "#D2ECD2", [0, 0, 0, 255], "#D2E2D2", [0, 0, 0, 255], "Zadzar", "pain", 3],
	["https://i.imgur.com/m7g9IED.png", 5235, 925, 0, -2500, 15, "#F2A349", [242, 163, 73, 255], "#F2C3A9", [242, 195, 169, 255], "Boule", "Bol", 1],
	["https://i.imgur.com/bwfEgtY.png", 5380, 5925, 8500, 5750, 6, "#F2A349", [242, 163, 73, 255], "#F2C3A9", [242, 195, 169, 255], "Boule", "Bol", 3],
	["https://i.imgur.com/66b7Lxr.png", 5220, 1660, 2000, 1050, 11, "#C56DF5", [197, 109, 245, 255], "#C5ADF5", [197, 173, 245, 255], "Citri", "Cri", 1],
	["https://i.imgur.com/jNq5GKe.png", 3240, 205, -1600, 50, 17.5, "#69E44B", [105, 228, 75, 255], "#99E48B", [153, 228, 139, 255], "Darmont", "Dnt", 1],
	["https://i.imgur.com/WXDwMBm.png", 8433, 2205, 7000, 1800, 5, "#FAEE84", [250, 238, 132, 255], "#FAEEA4", [250, 238, 164, 255], "Erania", "Eia", 1],
	["https://i.imgur.com/Szf9HZs.png", 7965, 3200, 6600, 2750, 4, "#55DE66", [85, 222, 102, 255], "#95DEA6", [149, 222, 166, 255], "Hinland", "Hnd", 1],
	["https://i.imgur.com/eo0rSMC.png", 10500, 2275, 8800, 1450, 4, "#8D8DF5", [141, 141, 245, 255], "#ADADF5", [173, 173, 245, 255], "Newich", "Nich", 1],
	["https://i.imgur.com/tljgYZg.png", 3333, 2657, 425, 1925, 8, "#FFC369", [255, 195, 105, 255], "#FFD3A9", [255, 211, 169, 255], "Santia", "Sia", 1],
	["https://i.imgur.com/63okGym.png", 4260, 375, 2750, 150, 5, "#FFED69", [255, 237, 105, 255], "#FFF0A9", [255, 240, 169, 255], "Trogia", "Trg", 1],
	["https://i.imgur.com/GDGBzaH.png", 9500, 2645, 8400, 2250, 4, "#A58DF5", [165, 141, 245, 255], "#C5BDF5", [197, 189, 245, 255], "Yeondong", "Yng", 1],
];
const img = [];															// create array for image objects
for (var i = 0; i < lands.length; i++)									// for each i in lands:
{
	img[i] = new Image();													// create new Image inside img in slot i
	img[i].crossOrigin = "anonymous";										// set crossOrigin for the Image to anonymous to appease CORS
	img[i].src = lands[i][0];												// set the Image source to the corresponding link from lands
}
var cLand, cLandMass, cType												// initialize variables		sessionStorage.setItem("var", value);		sessionStorage.getItem("var"); - saves as String
function startup()														// function startup	- is run on body load
{
	try																		// try:
	{
		cType = sessionStorage.getItem("type");									// get "type" varriable data from session storage
	}
	catch																	// catch:
	{
		cType = "gb";															// set cType to global
	}
	console.log(cType);
	
	try 																	// try:
	{
		cLandMass = parseInt(sessionStorage.getItem("mass"));					// read "mass" variable data from session storage
																				// open cLandMass continent
		openContinent(landMasses[cLandMass][2], landMasses[cLandMass][3], landMasses[cLandMass][9]);
	}
	catch																	// on catch:
	{
		cLandMass = 0;															// set current landmass to 0
																				// open cLandMass continent
		openContinent(landMasses[cLandMass][2], landMasses[cLandMass][3], landMasses[cLandMass][9]);
	}

	try																		// try:
	{
		cLand = parseInt(sessionStorage.getItem("land"));						// read "land" variable data from session storage
		if (cType != "st")														// if the cType is not state:
		{
			cLand = document.getElementById("intentionalERROR");					//crash code
		}
		clickMap('load', lands[cLand][7])										// clickMap with 'load' as event, and focus rgba of the cLand land
	}
	catch																	// catch:
	{
		clickMap('load', landMasses[cLandMass][6])								// clickMap with 'load' as event, and focus rgba of the cLandMass landMass
	}
	console.log(cLand);
}

function openContinent(evt, con, cont)									// function openContinent:		(Taken and heavilly modified from https://www.w3schools.com/howto/howto_js_tabs.asp)
{
	// Declare all variables
	var i, continent, continentlinks;
	evt = document.getElementById(evt);
	// Get all elements with class="continent" and class="contBar" and hide them
	continent = [];
	continent[0] = document.getElementsByClassName("continent");
	continent[1] = document.getElementsByClassName("contBar");
	for (i = 0; i < continent[0].length; i++)
	{
		continent[0][i].style.display = "none";
		continent[1][i].style.display = "none";
	}
	// Get all elements with class="continentlinks" and remove the class "active"
	continentlinks = document.getElementsByClassName("continentlinksActive");
	for (i = 0; i < continentlinks.length; i++)
	{
		continentlinks[i].className = continentlinks[i].className.replace("Active", "");
	}
	// Show the current tab, and add an "active" class to the button that opened the tab
	if (cont != "Empty")
	{
		document.getElementById(cont).style.display = "block";
		document.getElementById(con).style.display = "block";
		evt.className += "Active";
	}
}
	
function openNation(evt, nat)											// function openNation:			(Taken and modified from https://www.w3schools.com/howto/howto_js_tabs.asp)
{
	// Declare all variables
	var i, j, nation, nationlinks;
	// Get all elements with class="nation" and hide them
	nation = document.getElementsByClassName("nation");
	for (i = 0; i < nation.length; i++)
	{
		nation[i].style.display = "none";
	}
	// Get all elements with class="nationlinks" and remove the class "active"
	nationlinks = document.getElementsByClassName("nationlinks");
	for (i = 0; i < nationlinks.length; i++)
	{
		nationlinks[i].className = nationlinks[i].className.replace(" active", "");
	}

	if (evt != "startup")
	{
		for (i = 0; i < nationlinks.length; i++)
		{
			j = nationlinks[i].textContent;
			if (j.includes(evt))
			{
				j = i;
				i = nationlinks.length;
			}
			console.log(i);
		}
		// Show the current tab, and add an "active" class to the button that opened the tab
		document.getElementById(nat).style.display = "block";
		nationlinks[j].className += " active";
	}
}
	
function drawMap(evt, scale, posx, posy, zoomType, focus)				// function drawMap:			(Inspired by https://www.w3schools.com/tags/canvas_drawimage.asp)
{
	var x, y, i;															// set up variables
	var c = document.getElementById("map");									// get map canvas element
	var p = document.getElementById("content");								// get content element
	c.width = p.offsetWidth - 2;											// set width of canvas to the inner width of content
	c.height = p.offsetWidth * 0.5;											// set height of canvas to half the inner width of content
	var ctx = c.getContext("2d");											// get context 2d of map canvas
	
	c.addEventListener('click', clickMap);									// add on click listener to map canvas
	
	for (i = 0; i < lands.length; i++)										// for i in lands:
	{
		// taken and modified from https://stackoverflow.com/questions/45706829/change-color-image-in-canvas
		var canvas = document.createElement('canvas');							// create temporary canvas
		canvas.width = img[i].width;											// set width of temporary canvas to the width of current image
		canvas.height = img[i].height;											// set height of temporary canvas to the height of current image
		
		var context = canvas.getContext("2d");									// get context of temporary canvas
		context.drawImage(img[i], 0, 0, img[i].width, img[i].height);			// draw the current image into the temporary canvas
	
		context.globalCompositeOperation = "source-in";							// set global composite operation to source-in (will overlay already painted pixels with a color)
		
																				// lands[i] = ["image source", x, y, zoom x, zoom y, zoom scale, focus colour, [focus rgba], unfocus colour, [unfocus rgba], "state name", "acronym", "continent id"],
		
		if (zoomType == "ct")													// if the focus is on a continent:
		{
			if (focus == lands[i][12])												// if the image being drawn is from the focused on continent:
			{
				context.fillStyle = lands[i][8];										// set overlay color to the unfocus colour of the land being drawn
			}
			else																	// else:
			{
				context.fillStyle = landMasses[lands[i][12]][7];						// set overlay color to the unfocus colour of the continent the land being drawn is in
			}
		}
		else if (zoomType == "gb")												// else if the focus is on the world as a whole:
		{
			context.fillStyle = landMasses[lands[i][12]][5];						// set overlay color to the focus colour of the continent the land being drawn is in
		}
		else if (zoomType == "st")												// else if the focus is on a single state:
		{
			if (focus == i || focus == (i - 1) && lands[i][10] == lands[i - 1][10])	// if focus is on the state being drawn:
			{
				context.fillStyle = lands[i][6];										// set overlay color to the focus colour of the land being drawn
			}
			else																	// else:
			{
				context.fillStyle = lands[i][8];										// set overlay color to the unfocus colour of the land being drawn
			}
		}
		context.fillRect(0, 0, canvas.width, canvas.height);					// fill the temporary canvas with overlay color	(resulting in image with changed colour)
	
		x = (landMasses[lands[i][12]][0] + lands[i][1] - posx) / scale;			// set x coordinate to (x position of the states continent + x position of the state relative to continent - posx) / scale
		y = (landMasses[lands[i][12]][1] + lands[i][2] - posy) / scale;			// set y coordinate to (y position of the states continent + y position of the state relative to continent - posy) / scale
																				// draw the state image from temporary canvas with coordinates x, y, width = original width / scale, height = original height / scale
		ctx.drawImage(canvas, x, y, (img[i].width / scale), (img[i].height / scale));
	}			
}
	
// Strongly inspired by https://stackoverflow.com/questions/6735470/get-pixel-color-from-canvas-on-mousemove
function clickMap(evt, dat)												// function clickMap:
{
	var i, target;															// declare variables
	var c = document.getElementById("map");									// get map canvas
	var ctx = c.getContext("2d");											// get map canvas context 2d
	if (evt != 'load')														// if the map was clicked (not on load):
	{
		var rgba = ctx.getImageData(evt.offsetX, evt.offsetY, 1, 1).data;		// rgba = data of the canvas pixel the mouse is hovering
	}
	else																	// else:
	{
		var rgba = dat;													// set rgba to dat
	}
	console.log(evt.offsetX + " " + evt.offsetY);							// log x y coordinates clicked on (for development purposes)
	console.log(rgba);														// log the rgba data of the pixel clicked on (for development purposes)
	
	target = -1;															// set target to -1
	for (i = 0; i < landMasses.length; i++)									// for i in landMasses:
	{
																				// landMasses[i / target] = [x, y, acronym 1, acronym 2, zoom scale, focus colour, [focus rgba], unfocus colour, [unfocus rgba], "continent name"],
																				// if the rgba data of the pixel clicked belongs to a continent:
		if ((landMasses[i][6][0] == rgba[0] && landMasses[i][6][1] == rgba[1] && landMasses[i][6][2] == rgba[2] && landMasses[i][6][3] == rgba[3]) || (landMasses[i][8][0] == rgba[0] && landMasses[i][8][1] == rgba[1] && landMasses[i][8][2] == rgba[2] && landMasses[i][8][3] == rgba[3]))
		{
			target = i;																// set target to i
			var zoomType = "ct";													// set zoomType to continent
			if (target == 0)														// if target is 0 (empty space was clicked)
			{
				zoomType = "gb";														// set zoomType to global instead
			}
																					// drawMap with corresponding continents zoom scale, x position as posx, y position as posy, zoomType as zoomType, and target as focus
			drawMap('click', landMasses[target][4], landMasses[target][0], landMasses[target][1], zoomType, target);
																					// openContinent with acronym 1 as evt, acronym 2 as con, and continent name as cont
			openContinent(landMasses[target][2], landMasses[target][3], landMasses[target][9]);
			openNation("startup", landMasses[target][9]);							// openNation as empty (close nation tab)
			sessionStorage.setItem("mass", target);									// store target in "mass" variable in session storage
			sessionStorage.setItem("type", zoomType);								// store zoomType in "type" variable in session storage
			i = landMasses.length;													// set i to landMasses length (end loop)
		}
	}
	
	if (target == -1)														// if target is -1 (a state was clicked, rather than a continent in general)
	{
		for (i = 0; i < lands.length; i++)										// for i in lands:
		{
																					// lands[i / target] = ["image file", x, y, zoom x, zoom y, zoom scale, focus colour, [focus rgba], unfocus colour, [unfocus rgba], "state name", "acronym", "continent id"],
																					// if the rgba data of the pixel clicked belongs to a state:
			if ((lands[i][7][0] == rgba[0] && lands[i][7][1] == rgba[1] && lands[i][7][2] == rgba[2] && lands[i][7][3] == rgba[3]) || (lands[i][9][0] == rgba[0] && lands[i][9][1] == rgba[1] && lands[i][9][2] == rgba[2] && lands[i][9][3] == rgba[3]))
			{
				target = i;																// set target to i
																						// drawMap with corresponding states zoom scale, (x position + x position of continent) as posx, (y position + y position of continent) as posy, zoomType as state, and target as focus
				drawMap('click', lands[target][5], (lands[target][3] + landMasses[lands[target][12]][0]), (lands[target][4] + landMasses[lands[target][12]][1]), "st", target);
				openNation(lands[target][11], lands[target][10]);						// openNation with acronym as evt, and state name as nat
				sessionStorage.setItem("land", target);									// store target in "land" variable in session storage
				sessionStorage.setItem("type", "st");									// store "st" in "type" variable in session storage
				i = lands.length;														// set i to lands length (end loop)
			}
		}
	}
}