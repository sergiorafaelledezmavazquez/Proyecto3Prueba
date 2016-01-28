//NOTA: Poner la clase de pregunta a cada fieldset
//para filtrarlas y programar su JQUERY deacuerdo a su tipo
    $(document).ready(function(){
		//datos que determinan el numero de oportunidades
		var glbMaxIntentos = 3;
		var glbContadorIntentos=0;
		//datos que se guardaran
		    var glb_id=0,
		    glb_modulo='001',
			glb_moduloNombre='DE LA INFORMACION AL CONOCIMIENTO',
			glb_unidad='', 
			glb_unidadNombre='',
			glb_temaNumero='', 
			glb_temaNombre='',
			glb_ClaveCalificacion='', //aqui guardare de que unidad y tema es la calificacion	
			glb_cantidadPreguntas=0,
		    glb_cantidadReactivos=0, 
			glb_reactivosAcertados=0, 
			glb_calificacion=0;
        //tipo de pregunta 1 de una sola opcion con option button (ejemplo pregunta 1 o pregunta18)
        $("fieldset.jq_tipo1" + " .jq_correcta").click(function(event){ 
            //0.0 obtengo elelemento al que se hizo clic 
            $element = $(this);
            //0.1 Obtener todos los imagenes de los label de esa pregunta para quitarlas 
                //0.1.1 obtener el id del padre apartir del id del hijo    
                var hijo = $element.attr('id');
                var idpadre = hijo.substring(0,8);
			    //alert("fieldset#"+ idpadre + " label img");
                //0.0.2 remuevo 
            $("fieldset#"+ idpadre + " label img").remove();  
            //1 obtengo el label
            var $label = $("label[for='"+$element.attr('id')+"']");
            //2 obtengo el texto del label
             var texto = $label.text(); 
            //3 inserto la imagen en el label (el id del labeles el mismo que el input)
                $("." + event.target.id).empty().html(texto + '<img src="img/palomita.png" class="bien">');                  
        });
        
        $("fieldset.jq_tipo1" + " .jq_incorrecta").click(function(event){
            //0.0 obtengo elelemento al que se hizo clic 
             var $element = $(this);
            //0.1 Obtener todos los imagenes de los label de esa pregunta para quitarlas 
                //0.1.1 obtener el id del padre apartir del id del hijo    
                var hijo = $element.attr('id');
                var idpadre = hijo.substring(0,8);
                //0.0.2 remuevo 
			//alert("fieldset#"+ idpadre + " label img");
            $("fieldset#"+ idpadre + " label img").remove();             
            //1 obtengo el label
            var $label = $("label[for='"+$element.attr('id')+"']");
            //2 obtengo el texto del label
             var texto = $label.text();
            //3 inserto la imagen en el label (el id del labeles el mismo que el input)
                $("." + event.target.id).empty().html(texto + '<img src="img/tache.png" class="mal">');  			
        });
        //tipo de pregunta 2 de opcion multiple con checkbox (ejemplo pregunta 5)
        $("fieldset.jq_tipo2" + " .jq_correcta").click(function(event){ 
            //0.0 obtengo elelemento al que se hizo clic 
            $element = $(this);
            //0.1 Obtener todos los imagenes de los label de esa pregunta para quitarlas 
                //0.1.1 obtener el id del padre apartir del id del hijo    
                var hijo = $element.attr('id');
                var idpadre = hijo.substring(0,8);           
            //1 obtengo el label
            var $label = $("label[for='"+$element.attr('id')+"']");
            //2 obtengo el texto del label
             var texto = $label.text();                   
            //3 inserto la imagen en el label (el id del labeles el mismo que el input)
               var x =  $element.attr('id');
               var propiedad_checked = $("#"+x).prop("checked");
                if (propiedad_checked == true){
                    $("." + event.target.id).empty().html(texto + '<img src="img/palomita.png" class="bien">');              
               }
               else{
                   $("." + event.target.id).empty().html(texto); 
               }
        });
        
        $("fieldset.jq_tipo2" + " .jq_incorrecta").click(function(event){ 
            //0.0 obtengo elelemento al que se hizo clic 
            $element = $(this);
            //0.1 Obtener todos los imagenes de los label de esa pregunta para quitarlas 
                //0.1.1 obtener el id del padre apartir del id del hijo    
                var hijo = $element.attr('id');
                var idpadre = hijo.substring(0,8);         
            //1 obtengo el label
            var $label = $("label[for='"+$element.attr('id')+"']");
            //2 obtengo el texto del label
             var texto = $label.text();                   
            //3 inserto la imagen en el label (el id del labeles el mismo que el input)
               var x =  $element.attr('id');
               var propiedad_checked = $("#"+x).prop("checked");
                if (propiedad_checked == true){
                    $("." + event.target.id).empty().html(texto + '<img src="img/tache.png" class="mal">');                  
               }
               else{
                   $("." + event.target.id).empty().html(texto); 
               }
        });
    
        //tipo de pregunta 3 de una sola opcion con menu desplegable (ejemplo pregunta 24)
      $("fieldset.jq_tipo3" + " select ").change(function(event){ 
            //0.0 obtengo elelemento al que se hizo clic 
            $element = $(this);
                 var valor =$element.val();
                 var parrafo =$("#"+ $element.attr('id') +" p.jq_p_"+  $element.attr('id'));
                 var texto = parrafo.text(); 
                 if(valor==1){
                    parrafo.empty().html(texto+'<br>'+'<div align="center"><img src="img/palomita.png" class="bien"></div>');
                }
                 if(valor==0){
                     parrafo.empty().html(texto+'<br>'+'<div align="center"><img src="img/tache.png" class="mal"></div>'); 
                 }         
         });
		//tipo de pregunta 4 donde se tienen ordenar los elementos con menu desplegable (ejemplo pregunta 41)	 
	  $("fieldset.jq_tipo4" + " select ").change(function(event){       
			//0.0 obtengo elelemento al que se hizo clic 
            $element = $(this);
			 var valor =$element.val();
			 var idhijo = $element.attr('class');
			 //alert("idhijo: " + idhijo);
             var idpadre = idhijo.substring(0,8);
			 //alert("idpadre: "+ idpadre);
			 //alert("#"+idpadre +" div p.jq_p_"+ idhijo);
                 var parrafo =$("#"+idpadre +" div div.jq_p_"+ idhijo);
                 var texto = parrafo.text(); 
                 if(valor==1){ 
                    parrafo.empty().html(texto + '<img src="img/palomita.png" class="bien">');
                }
                 if(valor==0){				
                    parrafo.empty().html(texto + '<img src="img/tache.png" class="mal">'); 
                 }           
         });	
	  $("h3.jq_tituloTema").click(function(event){	
		 $element = $(this); 
		 reinciarScore();
		 obtenerDatosDelTemaSeleccionado($element); 
	  });
	//Fucion para borrar las tachitas y reiniciar la variables cuando se de clic en un tema	
	function reinciarScore(){
		 //quito tachitas
		  $("div.jq_score").empty().html("");
		  //reinicio variables globales
		  glbMaxIntentos=3;
		  glbContadorIntentos=0;
		  //quito la marca a todas las preguntas contestadas
		  
		    //obtengo todos los checkbox y radio checado del tema y les quito el checket 
		  	$("#tema1 fieldset input[type=checkbox]:checked, input[type=radio]:checked").each(
    			function(event){			
					$(this).attr("checked",false).checkboxradio("refresh");
    			});
		    //quito la imagen 
		   $("#tema1 fieldset label img.mal, img.bien").remove();
	}	
	function obtenerDatosDelTemaSeleccionado($elemento){
		var idElemento=$element.attr('id');
		glb_ClaveCalificacion = idElemento.substring(4,12);
		glb_unidad=idElemento.substring(9,12);
		glb_unidadNombre='UNIDAD ' + glb_unidad;
		glb_temaNumero='TEMA ' + idElemento.substring(4,7); 
		glb_temaNombre=$element.text();
	}	
	//para poner tachitas cuando se hace clic en un respuesta incorrecta
	  $("input.jq_incorrecta").click(function(event){
		  if (glbContadorIntentos<glbMaxIntentos){
		  	var contenido=$("div.jq_score").html();
		  	$("div.jq_score").empty().html(contenido + '<img src="img/tache.png" class="mal" style="padding-left:5px;padding-right:5px">');	
			 glbContadorIntentos++; 
		    }
		  else{
			  alert("Intentos máximos utilizados; inténtalo nuevamente");
			  $("div.jq_tema1_collapsible").collapsible({ collapsed: true });		  
		  }	   
	  });
	//boton califica tema	
	  $("a.jq_boton_calificar").click(function(event){	
		    glb_cantidadPreguntas =$("#tema1 fieldset").size();
		    glb_cantidadReactivos=$("#tema1 fieldset input.jq_correcta").size();
		    //0.0 obtengo elelemento al que se hizo clic 
            $element = $(this);
		    var tema= $element.attr('value');
	  		var nombres = [];
		    var valores =[];	  			
		   $("#tema1 fieldset input:checked").each(function(){
				//1.-introdusco los nombre de los elementos al arreglo
				nombres.push($(this).attr('name'));
				valores.push($(this).attr('value'));
      		});   
		   //2.-obtengo los valores del arreglo y los sumo
		    glb_reactivosAcertados=0;
		    for (var i=0;i<valores.length;i++){
				//if(typeof(valores[i])=='number'){
					glb_reactivosAcertados = glb_reactivosAcertados + parseFloat(valores[i]);
				//}
			}
		    //4.-imprimo el resultado
		    $("h3.jq_mensajeTitulo").empty().html(tema);
		    $("p.jq_numeroPreguntas").empty().html("PREGUNTAS: " + glb_cantidadPreguntas);
		    $("p.jq_Reactivos").empty().html("REACTIVOS: " + glb_cantidadReactivos); 
		    $("p.jq_ReactivosAcertados").empty().html("REACTIVOS ACERTADOS: " + glb_reactivosAcertados); 
		    glb_calificacion = (glb_reactivosAcertados * 100)/glb_cantidadReactivos; 
		    $("p.jq_Calificacion").empty().html("CALIFICACION: " + glb_calificacion); 		     
		    
	  });			
	 //boton guardar
	 $(".jq_btnGuardar").click(function(event){	 
		 alert("entro a guardar datos"); 
		 guardaCalificacion();
	 });			
		
});
