//Declared Globals
var leftColumn = document.querySelector('#leftColumn')
var rightColumn = document.querySelector('#rightColumn')
var repoDiv = document.querySelector('#repoDiv')

var baseURL = 'https://api.github.com/users/'
var myURL = baseURL + 'jmatos87'


var myPromise = $.getJSON(myURL)
var myWork = $.getJSON(myURL+'/repos')

//Test function 
var showData = function (JSONdata) {
	//console.log(JSONdata)
}



//Real function

//Left Column Francis Pull
var objectToHTML = function (jsonObj){
	//console.log(jsonObj)
	var HTMLstring = '<div id="pictureContainer"><img src="' +jsonObj.avatar_url + '"></div>'
	HTMLstring += '<div id=leftTextContainer><p id="name" class="leftText">'+ jsonObj.name + '</p>'
	HTMLstring += '<p class="leftText">User Name: '+ jsonObj.login + '</p>'
	HTMLstring += '<p class="leftText">Location: '+ jsonObj.location + '</p>'
	HTMLstring += '<p class="leftText">E-mail: '+ jsonObj.email + '</p>'
	HTMLstring += '<p class="leftText">Job: Unemployed but has a big heart and great personality</p></div>'

	
	leftColumn.innerHTML = HTMLstring
}


//Right Column Francis Pull
var	arrayToHTML = function (jsonArr){
//console.log(jsonArr)
	var ArrString= ''
 for(var i = 0; i < jsonArr.length; i++){
 	var currentObj = jsonArr[i]
 	console.log(currentObj)
 	ArrString += '<div class="tableRow">'+ currentObj.name + '</div>'
 }	
repoDiv.innerHTML = ArrString 	


}

myPromise.then(objectToHTML)
myWork.then(arrayToHTML)

