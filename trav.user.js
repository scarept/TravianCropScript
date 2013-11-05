

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
	var intX = parseInt(x);
	var intY = parseInt(y);
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
	for(i=1;i<x.length;i++)
	{
		res +=x[i];
	}
	return res;
}

function cleanYText(y){
	var res="";
	for(i=0;i<y.length-1;i++)
	{
		res +=y[i];
	}
	return res;
}

function createDiv(x,y){
	
}

function createLinkHREF(z){
	//http://ts2.travianteam.com/build.php?z=195992&gid=17&t=5
	
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
	teste = document.getElementById("result");
	teste.innerHTML="";
	convertCoordinatesToZ();
	texto = document.createTextNode("SCARE WORLD");
	teste.appendChild(texto);
}

//createLinksToMarket();