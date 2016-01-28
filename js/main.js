//JavaSript Document
//Nota El plugin Storage ya viene con PhoneGapBuild y no es necesario agregarlo al XML
var existeBD;
var BD;
function onBodyLoad(){
	document.addEventListener("deviceready", onDeviceReady, false);	
}
function onDeviceReady(){
	alert("PhoneGap esta trabajando1"); 
	navigator.notification.alert("PhoneGap esta trabajando2");	
	//getItem para recuperar el valor de un a variable
	existeBD = window.localStorage.getItem("existeBD");	
	//creo la base de datos en caso de no existir se crea en este momento 
	BD=window.openDatabase("calificaciones","1.0","Calificaciones del curso",200000);
	if(existeBD == null){
		navigator.notification.alert("No existe la Base de datos, se creara una nueva ");
		//aqui se crea la estructura de la base de datos
		creaBD();		
	}

	//para cargar el valor a alguna variable en este caso le estoy pasando 1 a la variable existeBD
	//window.localStorage.setItem("existeBD", 1);	
}
//Creacion de la estructura de la bases de datos solo si no ha sido creada antes
function creaBD(){
	BD.transaction(creaNuevaBD, errorBD, creaSuccess);	
}

function creaNuevaBD(tx){
	//aviso al sistema lo que estoy haciendo
	//mkLog("Creando Base de datos");
	navigator.notification.alert("Creando Base de datos");
	
	//Creo la tablaResultados-------------
	tx.executeSql('DROP TABLE IF EXISTS tablaResultados');
	var sql = "CREATE TABLE IF NOT EXISTS tablaResultados ( "+
		"id INTEGER PRIMARY KEY AUTOINCREMENT, " +
		"claveCalificacion VARCHAR(15), " + 
		"cantidadPreguntas INTEGER, " +
		"cantidadReactivos INTEGER, " +
		"reactivosAcertados INTEGER, " + 
		"calificacion INTEGER)";
	tx.executeSql(sql);
	/*//ejemplo de insertar
	tx.executeSql("INSERT INTO tablaresultados (id,modulo,unidad,tema,preguntas,reactivos,reactivosacertados, 	  calificacion) VALUES (1,'De la información al conocimiento','1','NECESIDADES, METAS, TOMA DE 			DECISIONES',4,5,0,0)");
	*/
} 

function creaSuccess(){
	 window.localStorage.setItem("existeBD", 1);
	navigator.notification.alert("Se a creado la Base de datos");
}

function errorBD(){
	//mklog("Error al procesar SQL "+ err.code);
	navigator.notification.alert("Error al procesar SQL "+ err.code);
}

function guardaCalificacion(){
	/*
	var strSQL= "INSERT INTO tablaResultados (id,claveCalificacion,cantidadPreguntas,cantidadReactivos,reactivosAcertados, calificacion) VALUES ("+ 1+","+glb_ClaveCalificacion+","+glb_cantidadPreguntas+","+glb_cantidadReactivos+","+glb_reactivosAcertados+","+glb_calificacion+")";
	navigator.notification.alert(strSQL);
	
	tx.executeSql(strSQL);
	*/
	navigator.notification.alert("Se ejecuto strSQL");

}
