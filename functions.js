
/**BEGIN TOGGLE FUNCTIONS**********************************************************************************************/
/*
*	Function toggles information boxes from hidden to visible after mouse over at the pins
*	Function toggles information boxes from visible to hidden after mouse out at the pins
*/
function toggleNameOfFlags(id){
	$('#' + id).toggleClass('hidden');
}

/*
*	Function toggles textbox with given index
*/
function toggleInformationtext(index){
	//toggle text with id = textId_ 'given index'
	$('#textId_'+index).toggleClass('hidden');
}
function toggleInformationtextdown(i){
    $('#text_'+i).toggleClass('hidden');
}

/*
*	Function toggles blurred Background
*/
function toggleBlurredBackground(sceneObjId, chaptername, currentSceneId){
	//get actual scene
	const scene = getSceneOfChapterById(chaptername, currentSceneId);
	//iterate over sceneObjects to get index of hovered element
	$.each(scene.sceneObjects, function(sceneObjectIndex, sceneObject){
		//check if sceneObject is hovered element
		if(sceneObjId == sceneObject.id){
			//iterate over blurredBackgroundPaths to get the blurred background from hovered element
			$.each(scene.blurredBackgroundPaths,function(blurredBackgroundIndex, blurredBackground){
				//check if index of blurred background hast same value of scene object
				if(sceneObjectIndex == blurredBackgroundIndex){
					//toggle blurredBackground
					$('#bB_'+blurredBackgroundIndex).toggleClass('hidden');
				}		
			});
		}	
	});
}	


/**END TOGGLE FUNCTIONS************************************************************************************************/
/**********************************************************************************************************************/
/**********************************************************************************************************************/
/**BEGIN ClEAR FUNCTIONS***********************************************************************************************/
/*
*	Function to clear section "content"
*/
function clearContent(){
	//clear all stuff from section content
	$('.content').empty();
}
/**END CLEAR FUNCTIONS*************************************************************************************************/
/**********************************************************************************************************************/
/**********************************************************************************************************************/
/**BEGIN GETTER FUNCTIONS**********************************************************************************************/
/*
*	Function returns the chapter object with the given chaptername
*/
function getChapterByName(chaptername){
	//grep() filters the chapter in Object 'chapters' by chaptername
	const chapter = $.grep(chapters, function(chapter){ 
		return chapter.name === chaptername; 
	});
	//returns an Array with the desired chapter object
	return chapter[0];
}

/*
*	Function returns the scene of chapter object with given chaptername and sceneid 
*/
function getSceneOfChapterById(chaptername, sceneid){
	//call getChapterByName to get chapter Object with given chaptername
	const chapter = getChapterByName(chaptername);
	//grep() filters the scene in in the returned object by sceneid
	const scene = $.grep(chapter.scenes, function(scene){ 
		return scene.id === sceneid; 
	});
	//returns an Array with the desired scene
	return scene[0];
}
/**END GETTER FUNCTIONS************************************************************************************************/
/**********************************************************************************************************************/
/**********************************************************************************************************************/
/**BEGIN SETTER FUNCTIONS**********************************************************************************************/
/*
*	Function set vertical position of images depending on windows height
*	On Screens lower than 1920x1080 there is white space below each image
*	Image is positioned vertically
*/
function setPositionOfImages(){
	//get all images that are displayed by searching for tag 'img'
	const images = $('img');
	//get Height value of Window
	const windowHeight = $(window).height(); 
	//iterate through images
	$.each(images, function(index, img){
		//get height of white space by subtracting the height of the image with the height of the window
		let height = windowHeight - img.height;
		//set top of image with the calculated height and divide by 2
		$(img).attr('style', 'top:' + height / 2.0 + 'px');
	});
}

/*
*	Function to set blurred Background if object is hovered
*/
function setBlurredBackGround(chaptername, currentSceneId){
	//get actual scene of actual chaptername
	const scene = getSceneOfChapterById(chaptername, currentSceneId);
	//iterate over all blurred Backgrounds
	$.each(scene.blurredBackgroundPaths, function(indexBackground, blurredBackground){
		//create blurred backround picture
		const picture = '<img id="bB_'+indexBackground+'" class="images hidden"  src="' + blurredBackground + '" style="top:0;">';
		//load pictures in content with hidden status
		$('.content').append(picture);
	});
}
/**END SETTER FUNCTIONS************************************************************************************************/
/**********************************************************************************************************************/
/**********************************************************************************************************************/
/**BEGIN CREATE FUNCTIONS**********************************************************************************************/
/*
*	Function creates information Icons and textboxes with content
*/
function createDropdownWithBoxAnsdIcon(chapter){
    
    $.each(chapter.dropdownText, function(i, dropdownText){
		//const dropdown = '<img id="icon_'+i+'" src="pictures/Icon/dropdown.png" onclick="toggleInformationtextdown('+i+')" aria-hidden="true";>';
        const dropdown = '<i id="icon_'+i+'" class="fas fa-angle-down fa-5x" onclick="toggleInformationtextdown('+i+')" aria-hidden="true"></i>';
        $('.content').append(dropdown);
        
        //set position of icon
		$('#icon_'+i).attr('style', 'top:' + dropdownText.iconPositionY + '; left:' + dropdownText.iconPositionX +';');
		
		//create the text position by subtracting the icon position with values 
		const informationIconPositionY = $('#icon_'+i).position().bottom - 40;
		const informationIconPositionX = $('#icon_'+i).position().left - 350;
		
        const dropdowntext = '<div id="text_'+i+'" class="dropdown hidden">' + dropdownText.droptext + '</div>';
        $('.content').append(dropdowntext);
        
        $('#text_'+i).attr('style', 'top:' + informationIconPositionY + 'px; left:' + informationIconPositionX + 'px;');
    });
}

function createInformationenBoxesAndIcons(chapter){
	//iterate over infoTexts in scene
	$.each(chapter.infoTexts, function(index, infoText){
		//create for each infoText in infoTexts an information icon which show or hide text after clicking
		const informationIcon = '<i id="iconId_'+index+'" class="fas fa-info-circle fa-4x" onclick="toggleInformationtext('+index+')" aria-hidden="true"></i>';
		$('.content').append(informationIcon);
		//set position of icon
		$('#iconId_'+index).attr('style', 'top:' + infoText.iconPositionY + '; left:' + infoText.iconPositionX +';');
		
		//create the text position by subtracting the icon position with values 
		const informationIconPositionY = $('#iconId_'+index).position().top - 110;
		const informationIconPositionX = $('#iconId_'+index).position().left + 90;
		
		//create div with text
		const informationText = '<div id="textId_'+index+'" class="informationTextInfoCircle hidden">' + infoText.text + '</div>'
		$('.content').append(informationText);
		//set position of text with the calculated values 
		$('#textId_'+index).attr('style', 'top:' + informationIconPositionY + 'px; left:' + informationIconPositionX + 'px;');
	});

}

function createIntroInformationenBoxesAndIcons(chapter){
	//iterate over infoTexts in scene
	$.each(chapter.infoTexts, function(index, infoText){
		//create for each infoText in infoTexts an information icon which show or hide text after clicking
		const informationIcon = '<i id="iconId_'+index+'" class="fas fa-map-marker-alt fa-3x" onclick="toggleInformationtext('+index+')" aria-hidden="true"></i>';
		$('.content').append(informationIcon);
		//set position of icon
		$('#iconId_'+index).attr('style', 'top:' + infoText.iconPositionY + '; left:' + infoText.iconPositionX +';');
		
		//create the text position by subtracting the icon position with values 
		const informationIconPositionY = $('#iconId_'+index).position().top - 85;
		const informationIconPositionX = $('#iconId_'+index).position().left + 80;
		
		//create div with text
		const informationText = '<div id="textId_'+index+'" class="informationText hidden">' + infoText.text + '</div>'
		$('.content').append(informationText);
		//set position of text with the calculated values 
		$('#textId_'+index).attr('style', 'top:' + informationIconPositionY + 'px; left:' + informationIconPositionX + 'px;');
	});
}


function createMapInformationAndIcons(chapter){
	//iterate over infoTexts in scene
	$.each(chapter.infoTexts, function(index, infoText){
		//create for each infoText in infoTexts an information icon which show or hide text after clicking
		const informationIcon = '<i id="iconId_'+index+'" class="fas fa-map-marker-alt fa-3x" onclick="openChapter('+infoText.name+');" onmouseover="toggleInformationtext('+index+')" onmouseout="toggleInformationtext('+index+')"aria-hidden="true"></i>';
		$('.content').append(informationIcon);
		//set position of icon
		$('#iconId_'+index).attr('style', 'top:' + infoText.iconPositionY + '; left:' + infoText.iconPositionX +';');
		
		//create the text position by subtracting the icon position with values 
		const informationIconPositionY = $('#iconId_'+index).position().top - 18;
		const informationIconPositionX = $('#iconId_'+index).position().left + 60;
		
		//create div with text
		const informationText = '<div id="textId_'+index+'" class="informationText hidden">' + infoText.text + '</div>'
		$('.content').append(informationText);
		//set position of text with the calculated values 
		$('#textId_'+index).attr('style', 'top:' + informationIconPositionY + 'px; left:' + informationIconPositionX + 'px;');
	});
}


/**END CREATE FUNCTIONS************************************************************************************************/
/**********************************************************************************************************************/
/**********************************************************************************************************************/
/**BEGIN RENDER FUNCTIONS**********************************************************************************************/
function renderMovie(chaptername){
    //get chapter Object, a next Button and the movie of chapter Object
	const chapter = getChapterByName(chaptername);
    const movie = '<video id="vd" src="' + chapter.movieObjekt +'" autoplay onended="startScene(&quot;' + chaptername + '&quot; , 0)">';
	//const nextButton = '<button class="startSceneBtn" type="button" onclick="startScene(&quot;' + chaptername + '&quot; , 0)">Weiter</button>';
	const nextButton = '<i class="fas fa-chevron-circle-right fa-4x nextSceneBtn nextBtnCorner" aria-hidden="true" onclick="startScene(&quot;' + chaptername + '&quot; , 0)"></i>';
   
    //load movie and next Button in section 'content'
    $('.content').append(movie);
    $('.content').append(nextButton);
}

/*
*	Function load the start screen of the chapter with the given chaptername,
*	create a next button and set vertical position of images
*/
function renderStartscreen(chaptername){
	//get chapter Object, the start screen of chapter Object and a next Button
	const chapter = getChapterByName(chaptername);
	const startscreen = '<img class="images" src="' + chapter.backgroundPath +'">';
	//const nextButton = '<button class="startSceneBtn" type="button" onclick="nextScene(&quot;' + chaptername + '&quot; , 0)">Weiter</button>';
	const nextButton = '<i class="fas fa-chevron-circle-right fa-4x nextSceneBtn nextBtnCorner" aria-hidden="true" onclick="nextScene(&quot;' + chaptername + '&quot; , 0)"></i>';
	
	//load start screen and next Button in section 'content' 
	$('.content').append(startscreen);
	$('.content').append(nextButton);
	
	//Set the vertical position of the image in section 'content 'if screen is lower than 1920x1080
	//can´t call setPositionofImages() because of the need of event 'load'
	$('.content img')[0].addEventListener('load', function() {
		const windowHeight = $(window).height(); 
		let height = windowHeight - this.height;
		$('.content img').attr('style', 'top:' + height / 2.0 + 'px');
	});
}

/*
*	Function load images of chapter with the given chaptername, create next Button, previous Button map Icon and information boxes
*	
*/
function renderScene(chaptername, currentSceneId){
	//load background image
	//get scene 
	const scene = getSceneOfChapterById(chaptername, currentSceneId);
	//create img tag with scene background
	const picture = '<img id="sceneBackground" class="images" src="' + scene.backgroundPath + '" style="z-index: 0;">';
	//load background in section 'content'
	$('.content').append(picture); 
    
    setBlurredBackGround(chaptername, currentSceneId);
    
	//render all scene objects of scene
	$.each(scene.sceneObjects, function(index, sceneObject){
		const id = sceneObject.id;
		const object = '<img class="images" id="'+ id +'" src="' + sceneObject.path + '" onmouseenter="toggleBlurredBackground(&quot;' + id + '&quot; , &quot;' + chaptername + '&quot; , ' + currentSceneId + ')" onmouseleave="toggleBlurredBackground(&quot;' + id + '&quot; , &quot;' + chaptername + '&quot; , ' + currentSceneId + ')"/>'; 
		//load objects in section 'content'
		$('.content').append(object);
	});

	//check if scene has attribute "positionNextButton" to create next Button
	if(scene.hasOwnProperty('positionNextButton')){
		let nextSceneId = currentSceneId + 1;
		//if scene has attribute "positionNextButton" create button, 
		//that call function nextScene 
		const nextButton = '<i class="fas fa-chevron-circle-right fa-4x nextSceneBtn" aria-hidden="true" onclick="nextScene(&quot;' + chaptername + '&quot; ,' + nextSceneId + ')"></i>';
		//load next Button in section 'content'
		$('.content').append(nextButton);

		//change position of next Button
		const positionNextLeft = scene.positionNextButton.positionX;
		const positionNextTop = scene.positionNextButton.positionY;
		$('.nextSceneBtn').attr('style', 'top:' + positionNextTop + '; left:' + positionNextLeft +';');
	}
	//check if there is an previous scene
	if(currentSceneId > 0){
		//set previous scene id
		let previousSceneId = currentSceneId - 1;
		//create previous Button and set Position wich opens previous scene
		const previousButton = '<i class="fas fa-chevron-circle-left fa-4x previousSceneBtn" aria-hidden="true" onclick="nextScene(&quot;' + chaptername + '&quot; ,' + previousSceneId + ')"></i>';		
		const positionPreviousLeft = scene.positionPreviousButton.positionX;
		const positionPreviousTop = scene.positionPreviousButton.positionY;
		//load previous Button in section 'content' and set position
		$('.content').append(previousButton);
		$('.previousSceneBtn').attr('style', 'top:' + positionPreviousTop + '; left:' + positionPreviousLeft +';');		
	}

	//Set the vertical position of the image in section 'content 'if screen is lower than 1920x1080
	//can´t call setPositionofImages() because of the need of event 'load'
	$('.content img')[0].addEventListener('load', function() {
		const windowHeight = $(window).height(); 
		let height = windowHeight - this.height;
		$('.content img').attr('style', 'top:' + height / 2.0 + 'px');
	});
	//show Dropdown
    createDropdownWithBoxAnsdIcon(scene);
    //show Text
	createInformationenBoxesAndIcons(scene);
}


/**END RENDER FUNCTIONS************************************************************************************************/
/**********************************************************************************************************************/
/**********************************************************************************************************************/
/**BEGIN START FUNCTIONS***********************************************************************************************/
/*
*	Function opens the map
*/
function openMap(){
	//first clear map section
	$('.map').empty();
	//clear infoicons and text
	clearContent();
	//get mapobject
	const chapter = getChapterByName('map');
	//get background
	const startscreen = '<img class="images" src="' + chapter.backgroundPath +'">';
	//append background
	$('.content').append(startscreen);
	//append infocions and text
	createMapInformationAndIcons(chapter);
    createDropdownWithBoxAnsdIcon(chapter);
}

/*
*	Function opens the intro
*/
function startIntro(){
	//get introobject
	const chapter = getChapterByName('intro');
	//append infoicons and text
	createIntroInformationenBoxesAndIcons(chapter);
    //append Dropdown
    createDropdownWithBoxAnsdIcon(chapter);
	//create nextbutton
	//const nextButton = '<button class="startSceneBtn" type="button" onclick="openMap()">Weiter</button>';
	const nextButton = '<i class="fas fa-chevron-circle-right fa-4x nextSceneBtn nextBtnCorner" aria-hidden="true" onclick="openMap()"></i>';
	//append nextbutton
	$('.content').append(nextButton);
}

/*
*	Function opens the start screen of the given chapter
*/
function openChapter(chapterobject){
	//section 'content' must be emptied
	$('.content').empty();
	//call the function to call up the start screen of the given chapter
	renderMovie(chapterobject.name);
	//renderStartscreen(chapterobject.name);
}

/*
*	Function opens the next scene with given sceneid of the given chapter 
*/
function nextScene(chaptername, sceneid){
	//section 'content' must be emptied
	$('.content').empty();
	//call the function to call up the next scene with given sceneid of the given chapter
	renderScene(chaptername, sceneid);
}

function startScene(chaptername, sceneid){
    $('.content').empty();
    renderStartscreen(chaptername, sceneid);
}
/**END START FUNCTIONS*************************************************************************************************/
/**********************************************************************************************************************/
