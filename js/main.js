//JavaSript Document
//Nota El plugin Storage ya viene con PhoneGapBuild y no es necesario agregarlo al XML
var existeBD;
var BD;
function onBodyLoad(){
	document.addEventListener("deviceready", onDeviceReady, false);	
}
function onDeviceReady(){
	navigator.notification.alert("PhoneGap esta trabajando1");
	
	//getItem para recuperar el valor de un a variable
	existeBD= window.localStorage.getItem("existeBD");
	//creo la base de datos
	BD=window.openDatabase("calificaciones","1.0","Calificaciones del curso",200000);
	if (existeBD==null){
		
		creaBD();
		
	}
	
	//para cargar el valor a alguna variable en este caso le estoy pasando 1 a la variable existeBD
	//window.localStorage.setItem("existeBD", 1);	
}
//Creacion de la estructura de la bases de datos
function creaBD(){
	BD.transaction(creaNuevaBD, errorBD, creaSuccess);	
}

function creaNuevaBD(tx){
	//aviso al sistema lo que estoy haciendo
	//mkLog("Creando Base de datos");
	navigator.notification.alert("Creando Base de datos");
	tx.executeSql('DROP TABLE IF EXISTS tablaresultados');
	var sql = "CREATE TABLE IF NOT EXISTS tablaresultados ( "+
		"id INTEGER PRIMARY KEY AUTOINCREMENT, " +
		"modulo VARCHAR(150), " +
		"unidad VARCHAR(150), " +
		"tema VARCHAR(150), " +
		"preguntas INTEGER, " +
		"reactivos INTEGER, " +
		"reactivosacertados INTEGER, " + 
		"calificacion INTEGER)";
		
	tx.executeSql(sql);
	navigator.notification.alert("Creando Base de datos 2");
	tx.executeSql("INSERT INTO tablaresultados (id,modulo,unidad,tema,preguntas,reactivos,reactivosacertados, calificacion) VALUES (1,'De la información al conocimiento','1','NECESIDADES, METAS, TOMA DE DECISIONES',4,5,0,0)");
	navigator.notification.alert("Creando Base de datos 3");
} 

function creaSuccess(){
	window.localStorage.setItem("existeBD", 1);
	navigator.notification.alert("Se a creado la Base de datos");
}

function errorBD(){
	//mklog("Error al procesar SQL "+ err.code);
	navigator.notification.alert("Error al procesar SQL "+ err.code);
}






