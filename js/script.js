//Declared Globals
var leftColumn = document.querySelector('#leftColumn')
var rightColumn = document.querySelector('#rightColumn')
var repoDiv = document.querySelector('#repoDiv')
var inputEl = document.querySelector('input')
var baseURL = 'https://api.github.com/users/'
var myURL = baseURL + 'jmatos87'

inputEl.placeholder = 'Touch and Enter Me'



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
	var HTMLstring = '<img src="' +jsonObj.avatar_url + '">'
	HTMLstring += '<div id=leftTextContainer><p id="name" class="leftText">'+ jsonObj.name + '</p>'
	HTMLstring += '<p class="leftText"><i class="material-icons">directions_run</i>'+ jsonObj.login + '</p>'
	HTMLstring += '<p class="leftText"><i class="material-icons">location_searching</i>'+ jsonObj.location + '</p>'
	HTMLstring += '<p class="leftText"><i class="material-icons">email</i>'+ jsonObj.email + '</p>'
	HTMLstring += '<p class="leftText" id="work"><i class="material-icons">work</i>Unemployed but has a big heart and great personality</p></div>'

	
	leftColumn.innerHTML = HTMLstring
}


//Right Column Francis Pull
var	arrayToHTML = function (jsonArr){
//console.log(jsonArr)
	var ArrString= ''
 for(var i = 0; i < jsonArr.length; i++){
 	var currentObj = jsonArr[i]
 	// console.log(currentObj)
 	ArrString += '<div class="tableRow"><div class="tableName"><a href src='+ currentObj.url + '>' + currentObj.name + '</a></div>'
 	if (currentObj.description!== null){ArrString += '<div class="tableDescription"><p>' + currentObj.description + '</p></div>'}
 	ArrString += '</div>'
 }	
repoDiv.innerHTML = ArrString 	


}



//Search Stuff


var inputToUrl = function(keyEvent) {
	var inputEl = keyEvent.target
	if (keyEvent.keyCode === 13) {		
		var userName = inputEl.value
		inputEl.value = ''
		location.hash = userName
	}
}



var doSearchRequest = function (userName) {
	var profileUrl = baseURL + userName
	var userNamePromise = $.getJSON(profileUrl)
	userNamePromise.then(objectToHTML)//for the left column
	var reposUrl = baseURL + userName + '/repos'
	var userReposPromise = $.getJSON(reposUrl)
	userReposPromise.then(arrayToHTML)//for the right column
}

var controller = function() {
	var userName = location.hash.substr(1)
	doSearchRequest(userName) 
}




inputEl.addEventListener("keydown",inputToUrl)

window.addEventListener("hashchange",controller)

myPromise.then(objectToHTML)
myWork.then(arrayToHTML)

