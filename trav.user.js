// ==UserScript==
// @author      ScarePT
// @name		Crop Link Village Travian
// @namespace	userscripts.org
// @description	Creates a link to send crop to a village on villages list
// @include     http://ts2.travianteam.com/*
// @include     ts2.travianteam.com/*
// @license     GPL version 3 or any later version; http://www.gnu.org/copyleft/gpl.html
// @grant       none
// @version     1.0
// ==/UserScript==

var matrixZ;
var sourceImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAARCAIAAAC95HDXAAAAK3RFWHRDcmVhdGlvbiBUaW1lAFNvIDE0IE5vdiAyMDEwIDA3OjE5OjE0ICswMTAw0nQvugAAAAd0SU1FB9oLDgYUKYDv4EAAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAEZ0FNQQAAsY8L/GEFAAABT0lEQVR42mP8//8/AwWAiRLNVNd/lpHhjQCIsZkZRALZQBEGhquzGREK8Ok3/s/w8CNIm9Q/kFKRDxDNCmAzQeJABU8YQQgGGLGEH1CnPD/IIDB59RyDdiA/SBzMBgJuKScgqeC9F0iyoGiDALC2r/cYuOUZ9q9kcAxnQNasZB3M+X0tyCFA9UDyPwRsYoLQX1Yx3Fop+v81//9LDEByXymI/H+G4coshm9Xg0EqzsC0gAEW939dzfjsv6gU42tuJQagKyDg1GmwQ4zRFWOJP+7Q/0DNQCPq4vgefIBqNjPFohln/Hc28AHJ2Hr2lROgRgDJOm1+TJWMuNIvpuqmqx8xlbEw4ADhBZ/Y+EV/fXwNdAKQjUsZDv1vBICa2b+8lgKnHGD64eZggkYYGviPAR7OZQBGEpAERtj3ndpAdq0WHyjaNjEBYxdNMeMA518A8rTLHjS2YUUAAAAASUVORK5CYII="

function createMatrix(x,y){
	temp=0;
	matrixZ = new Array();
	for(i=0; i<x; i++){
		matrixZ[i] = new Array();
		for(j=0; j<y; j++){
			temporary=j+1;
			matrixZ[i][j] = (400*(j*2))+temp+1;
			temp++;
		}
	temp=i+1;
	}
	return matrixZ;
}

function getZfromMatrix(x,y){
	intX = parseInt(x);
	intY = parseInt(y);
	var testX = (intX+400);
	var testY = (-1)*(intY-400);
	result = matrixZ[testX][testY];
	return result;
}

function convertCoordinatesToZ(x,y){
	if(matrixZ == undefined){
		createMatrix(801,801);
	}
	temp = getZfromMatrix(x,y);
	return temp;
}

function cleanXText(x){
	var res="";
	for(q=0;q<x.length;q++)
	{
		if((x[q]<=9 && x[q]>=0) || x[q]=='-'){
			res +=""+x[q];
		}
	}
	return res;
}

function cleanYText(y){
	var res="";
	for(w=0;w<y.length;w++)
	{
		if((y[w]<=9 && y[w]>=0) || y[w]=='-'){
			res +=y[w];
		}
		
	}
	return res;
}

function createDiv(span){
	div = document.createElement("div");
	valx = span.getElementByClass("coordinateX").nodeValue;
	valy = span.getElementByClass("coordinateY").nodeValue;
	x = cleanXText(valx);
	y = cleanYText(valy);
	z = convertCoordinatesToZ(x,y);
	img = createImageWithHREF(z);
	div.appendChild(img);
	return div;
}

function createLinkHREF(z){
	text ="http://ts2.travianteam.com/build.php?z=";
	text += z;
	text += "&gid=17&t=5";
	return text;
}

function createImageWithHREF(z){
	var img = document.createElement("img");
	img.setAttribute("src",sourceImg);
	link = createLinkHREF(z);
	var a = document.createElement("a");
	a.setAttribute("href",link);
	a.appendChild(img);
	return a;
}

function createLinksToMarket(){
	
	var divAldeias = document.getElementById("sidebarBoxVillagelist");
	var divLateral = divAldeias.getElementsByClassName("sidebarBoxInnerBox");
	var insideBox = divLateral[0].getElementsByClassName("innerBox content");
	var allLi = insideBox[0].getElementsByTagName("li");
	
	for(p=0;p<allLi.length;p++){
		a = allLi[p].getElementsByTagName("a");
		spanPrincipal = a[0].getElementsByClassName("coordinates coordinatesWrapper coordinatesAligned coordinatesLTR");
		coordX = spanPrincipal[0].getElementsByClassName("coordinateX");
		coordX = coordX[0].childNodes[0].textContent;
		coordY = spanPrincipal[0].getElementsByClassName("coordinateY");
		coordY = coordY[0].textContent;
		x = cleanXText(coordX);
		y = cleanYText(coordY);
		z = convertCoordinatesToZ(x,y);
		img = createImageWithHREF(z);
		a[0].appendChild(img);
	}
}

createLinksToMarket();