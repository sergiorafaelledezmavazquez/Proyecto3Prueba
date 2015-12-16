
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    alert('Funciono');
    $("#resultado").html("PhoneGap esta funcionando");
    window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + "index.html", gotFile, fail); 
    alert(cordova.file.applicationDirectory);
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
   alert(e.code);
    var msg ='';
        switch (e.code) {
        case FileError.QUOTA_EXCEEDED_ERR:
            msg = 'Storage quota exceeded';
            break;
        case FileError.NOT_FOUND_ERR:
            msg = 'File not found';
            break;
        case FileError.SECURITY_ERR:
            msg = 'Security error';
            break;
        case FileError.INVALID_MODIFICATION_ERR:
            msg = 'Invalid modification';
            break;
        case FileError.INVALID_STATE_ERR:
            msg = 'Invalid state';
            break;
        default:
            msg = 'Unknown error';
            break;
    };
    
    alert(msg);
   
}
