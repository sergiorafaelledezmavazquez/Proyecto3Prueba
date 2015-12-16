
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    alert('Funciono');
    $("#resultado").html("PhoneGap esta funcionando");
    window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + "index.html", gotFile, fail); 
}

function gotFile(fileEntry){
    alert("entro a gotFile");
    fileEntry.file(function(file) {
		var reader = new FileReader();
		reader.onloadend = function(e) {
			//console.log("Text is: "+this.result);
			//document.querySelector("#textArea").innerHTML = this.result;
            //$('#logo').attr('src', this.result);
		}
		//reader.readAsText(file);
	});
}
function fail(e) {
   //console.log("FileSystem Error");
   alert(e);
   //console.dir(e);
}
