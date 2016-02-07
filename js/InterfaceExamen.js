function ClaseEstructuraVentanaExamen(OBJExamen){
	var that=this;//PARA QUE LOS METODOS PRIVADOS PUEDAN UTILIZAR LOS METODOS y PROPIEDADES PUBLICOS
	//Variables
	var idElementoHTML= document.getElementById('panel-fixed-page5'); //elemento html donde se pondra el examen
	//alert(OBJExamen.nombre_modulo);
	//alert('hola sergio');
	var OBJ_Examen = OBJExamen;
    var glb_unidades = OBJ_Examen.array_unidades.length;
	
	//esta variable por ser muy grande esta definida en el archivo examen.js
	//LANZADERA DEL OBJETO (ES una funcion publica)
	this.cargar =function(datos){
     //PASO O DATOS DE ENTRADA
     //PASO 1 ARMAR ESTRUCTURA
     //innerEncabezado_VentanaExamen(); 
     //innerMain_ModuloExamen();
	 //innerFomularioExamen();
	 innerUnidadesyTemas();
	 //PASO 2 EVENTOS DE GENERARA LOS ELEMENTOS DE VENTANA
     //eventos  ClaseEstructuraVentanaExamen();
    }	
	function innerEncabezado_VentanaExamen(){
		var encabezado ='<div data-role="header" data-position="fixed">'+
							'<h1>EXAMEN GLOBAL</h1>'+
							'<div class="jq_score" style="text-align: center;"></div>'+
							'<a href="#nav-panel5" data-icon="bars" data-iconpos="notext">Menu</a>'+
             		    '</div>';
		
		idElementoHTML.innerHTML+=encabezado;
		 
		 
	 }
	function innerMain_ModuloExamen(){
		var mainDelModulo = '<div role="main" class="ui-content jqm-content jqm-fullwidth">'+
            						'<h1>MODULO 1: DE LA INFORMACION AL CONOCIMIENTO</h1>'+
            						'<div data-demo-html="#panel-fixed-page5" id="#panel-fixed-page5">'+
                							'<p style="text-align: center;">Este test es solo de preparación y su califiación no tiene validez 		oficial</p>'+
									'</div>'+ //#panel-fixed-page5
			    			'</div>'; //main
		idElementoHTML.innerHTML+=mainDelModulo;
		
	}
	
	function innerFomularioExamen(){
		var div = document.getElementById('#panel-fixed-page5');
		var formulario ='<form id="examen">HOLA</form>';
		div.innerHTML+=formulario;  
	}
   function innerUnidades(){
		//alert('innerUnidadesBeta2');
		//alert('unidades: ' + glb_unidades);
		var unidad ='';
	    for(var i = 0;i<glb_unidades;i++ ){
			var j=i+1;
			unidad+='<h3 style="text-align: center;">'+'UNIDAD '+j+': '+OBJ_Examen.array_unidades[i].nombre_unidad+'</h3>';
			
		}
	   

	   var pregunta ='<br><hr size="3px" align="center" color="#2E9AFE"/>'+
					 '<fieldset data-role="controlgroup" id="preg0002" class="jq_tipo1">'+
							'<legend>¿Cuál es la razón por la que estudias el bachillerato?</legend>'+
					 '</fieldset>';
	   var respuesta ='<input type="radio" name="preg0002" id="preg0002-opcion-a" value="0" class="jq_incorrecta jq_pregunta0001 jq_t001 jq_u001">'+
				      '<label for="preg0002-opcion-a" class="preg0002-opcion-a">Quiero cambiar de trabajo.</label>';
		 
		
		  //Paso 2 inserto elementos y actualizo
			//Nota: cuando actualice debo estar en la vista principal para que no pierda el estilo ya que no exiten 5 paginas html, solo exite una y se simulan 5 con el estilo CSS. 
		    $('#examen').prepend(unidad);//cargo los elemntos html
			$('#examen').listview();//me sugieren primero cargar el listview
			$('#examen').listview('refresh');//despues refrecarlo para que cargue el estilo 
		
		
		
		
	}
	function obtenerNumeroDeDigitos(numero){
		var digitos = String(numero).length;
		//alert('tema '+numero+'tiene digitos '+ digitos);
		return digitos;
	}
	function innerUnidadesyTemas(){
		alert('temas unidad 1:'+OBJ_Examen.array_unidades[0].array_temas.length);
		alert('temas unidad 2:'+OBJ_Examen.array_unidades[1].array_temas.length);
		alert('temas unidad 3:'+OBJ_Examen.array_unidades[2].array_temas.length);
		var tema = '';
		var numeroTema=0;
		var unidad='';
		var numeroUnidad=0;
		var stringHTML='';
		for(var u=0;u<glb_unidades;u++){
			numeroUnidad=u+1;
			unidad='<h3 style="text-align: center;">'+'UNIDAD '+numeroUnidad+': '+OBJ_Examen.array_unidades[u].nombre_unidad+'</h3>';
			for(var t=0; t<OBJ_Examen.array_unidades[u].array_temas.length;t++){
			    numeroTema = t+1;
				//var digitos = obtenerNumeroDeDigitos(numeroTema);
				//alert('tema '+numeroTema+'tiene digitos '+ digitos);
				tema += '<div id="jq_'+OBJ_Examen.array_unidades[u].array_temas[t].tema+'_collapsible" data-role="collapsible" class="ui-corner-all custom-corners jq_tema_collapsible">' +
			       		'<h3 class="jq_h3_tituloTema">TEMA:'+OBJ_Examen.array_unidades[u].array_temas[t].nombre_tema +'</h3>'+
			            '<div id="body_tema_'+OBJ_Examen.array_unidades[u].array_temas[t].tema+'" class="ui-body ui-body-a jq_body_tema">' +
						'</div>'+
			       '</div>';
			}
			stringHTML+=unidad+tema;
			unidad='';
			tema='';
		}
		alert(stringHTML);
		$('#examen').prepend(stringHTML);//cargo los elemntos html
		$('#examen').listview();//me sugieren primero cargar el listview
		$('#examen').listview('refresh');//despues refrecarlo para que cargue el estilo    
		
	}
	
	function innerUnidadesBeta1(){
		alert('innerUnidadesBeta1');
	//Nota:Aqui inserto las preguntas. Advertencia deben ser preguntas y respuestas con id distintos a otra pregunta por que si se repiten mostrara uno solo el neunciado de la pregunta.	
	var elemento ='<h3 style="text-align: center;">UNIDAD 2:</h3>'+
'<div id="jq_tema_collapsible" data-role="collapsible" class="ui-corner-all custom-corners jq_tema_collapsible">' +
'<h3 class="jq_h3_tituloTema">TEMA:<p class="jq_p_tituloTema" ></p></h3>'+
'<div class="ui-body ui-body-a jq_div_tema">' +
'<br><hr size="3px" align="center" color="#2E9AFE"/>'+
'<fieldset data-role="controlgroup" id="preg0002" class="jq_tipo1">'+
'<legend>¿Cuál es la razón por la que estudias el bachillerato?</legend>'+
'<input type="radio" name="preg0002" id="preg0002-opcion-a" value="0" class="jq_incorrecta jq_pregunta0001 jq_t001 jq_u001">'+
'<label for="preg0002-opcion-a" class="preg0002-opcion-a">Quiero cambiar de trabajo.</label>'+
'<input type="radio" name="preg0002" id="preg0002-opcion-b" value="0" class="jq_incorrecta jq_pregunta0001 jq_t001 jq_u001">'+
'<label for="preg0002-opcion-b" class="preg0002-opcion-b" >Recibir un mejor sueldo.</label>'+
'<input type="radio" name="preg0002" id="preg0002-opcion-c" value="1" class="jq_correcta jq_pregunta0001 jq_t001 jq_u001">'+
'<label for="preg0002-opcion-c" class="preg0002-opcion-c">Ampliar mis conocimientos.</label>'+
'</fieldset>'+
'</div>'+
'</div>';	
		
		//Paso 1 inserto elemento y actualizo
		//Nota: cuando actualice debo estar en la vista principal para que no pierda el estilo ya que no exiten 5 paginas html, solo exite una y se simulan 5 con el estilo CSS. 	
		$('#examen').prepend(elemento);
		$('#examen').listview();
		$('#examen').listview('refresh');
		
		
	}
	function innerUnidadesExamen(){
		var div = document.getElementById('examen');
		var unidades='';
		//alert('hola Sergio');
		//alert(OBJExamen.nombre_modulo);
		//alert(OBJExamen.length);
		//alert('hola rafael');
		var unidad=OBJ_Examen.array_unidades[0].nombre_unidad;
		var tema = OBJ_Examen.array_unidades[0].array_temas[0].nombre_tema;
		console.log(unidad);
		console.log(tema);
	
		//PASO 1 pongo la unidad
	      //$('#examen').prepend('<h3 style="text-align: center;">'+ unidad +'</h3>'); 
		 
		//$('.jq_p_tituloTema').html(tema);	
		//clono la unidad
	    	//$('#jq_tema_collapsible').clone(true, true).appendTo('#examen');
			//$('#jq_tema_collapsible').clone(true, true).appendTo('#examen');
		//le cambio el id al tema colapsable

	}
	var cur_num = 1;    // Counter
	function paraClonarElementos(){
		var whatToClone = $("#jq_tema_collapsible"); 
          var whereToPutIt = $("#examen");

          var cloned = whatToClone.clone(true, true).get(0);
          ++cur_num;
          cloned.id = whatToClone.attr('id') + "_" + cur_num;                  // Change the div itself.

        $(cloned).find("*").each(function(index, element) {   // And all inner elements.
          if(element.id)
          {
              var matches = element.id.match(/(.+)_\d+/);
              if(matches && matches.length >= 2)            // Captures start at [1].
                  element.id = matches[1] + "_" + cur_num;
          }
          if(element.name)
          {
              var matches = element.name.match(/(.+)_\d+/);
              if(matches && matches.length >= 2)            // Captures start at [1].
                  element.name = matches[1] + "_" + cur_num;
          }	
	});
	
}
						 
}								 /*
	//me puede servir para los objetos JSON
	function clone(a) {
   return JSON.parse(JSON.stringify(a));
     }
	*/	