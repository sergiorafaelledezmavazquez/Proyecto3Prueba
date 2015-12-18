
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
//Arreglando el formato del video
    // Find all YouTube & Vimeo videos
var $allVideos = $("video");

// The element that is fluid width
$fluidEl = $(".ui-content");

// Figure out and save aspect ratio for each video
$allVideos.each(function() {

$(this)
.data('aspectRatio', this.height / this.width)

// and remove the hard coded width/height
.removeAttr('height')
.removeAttr('width');

});

// When the window is resized
$(window).resize(function() {

var newWidth = $fluidEl.width();

// Resize all videos according to their own aspect ratio
$allVideos.each(function() {

var $el = $(this);
$el
.width(newWidth)
.height(newWidth * $el.data('aspectRatio'));

});

// Kick off one resize to fix all videos on page load
}).resize();

  //-------------------------------------------------
    //alert('Funciono');
    $("#resultado").html("PhoneGap esta funcionando");
  //-------------------------------------------------
    //window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + "index.html", gotFile, fail); 
    //alert(cordova.file.applicationDirectory);
    //window.resolveLocalFileSystemURL(cordova.file.dataDirectory + "index.html", gotFile, fail);
    //alert(cordova.file.dataDirectory);
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
