

var matrixZ;
var sourceImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAARCAIAAAC95HDXAAAAK3RFWHRDcmVhdGlvbiBUaW1lAFNvIDE0IE5vdiAyMDEwIDA3OjE5OjE0ICswMTAw0nQvugAAAAd0SU1FB9oLDgYUKYDv4EAAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAEZ0FNQQAAsY8L/GEFAAABT0lEQVR42mP8//8/AwWAiRLNVNd/lpHhjQCIsZkZRALZQBEGhquzGREK8Ok3/s/w8CNIm9Q/kFKRDxDNCmAzQeJABU8YQQgGGLGEH1CnPD/IIDB59RyDdiA/SBzMBgJuKScgqeC9F0iyoGiDALC2r/cYuOUZ9q9kcAxnQNasZB3M+X0tyCFA9UDyPwRsYoLQX1Yx3Fop+v81//9LDEByXymI/H+G4coshm9Xg0EqzsC0gAEW939dzfjsv6gU42tuJQagKyDg1GmwQ4zRFWOJP+7Q/0DNQCPq4vgefIBqNjPFohln/Hc28AHJ2Hr2lROgRgDJOm1+TJWMuNIvpuqmqx8xlbEw4ADhBZ/Y+EV/fXwNdAKQjUsZDv1vBICa2b+8lgKnHGD64eZggkYYGviPAR7OZQBGEpAERtj3ndpAdq0WHyjaNjEBYxdNMeMA518A8rTLHjS2YUUAAAAASUVORK5CYII="

function createMatrix(x,y){
	temp=0;
	matrixZ = new Array();
	for(i=0; i<x; i++){
		matrixZ[i] = new Array();
		for(j=0; j<y; j++){
			matrixZ[i][j] = temp+1;
			temp++;
		}
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

