//NOTA: Poner la clase de pregunta a cada fieldset
//para filtrarlas y programar su JQUERY deacuerdo a su tipo
    $(document).ready(function(){
        //tipo de pregunta de una sola opcion con option button (ejemplo pregunta 1 o pregunta18)
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
			
            //2.1 leer un atributo
                /*
                var x =  $element.attr('id');
                var atributo_value = $("#"+x).attr("value");
                var propiedad_checked = $("#"+x).prop("checked");
                alert( "correcta:"+ $element.attr('id') +"\n"+ 
                      "atributo_value: " + atributo_value +"\n"+ 
                      "propiedad_checked: " + propiedad_checked
                     );
                */          
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
        //tipo de pregunta de opcion multiple con checkbox (ejemplo pregunta 5)
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
    
        //tipo de pregunta de una sola opcion con menu desplegable (ejemplo pregunta 24)
      $("fieldset.jq_tipo3" + " select ").change(function(event){ 
            //0.0 obtengo elelemento al que se hizo clic 
            $element = $(this);
                //alert("valor: "+$element.val());
                //alert("id: "+$element.attr('id'));
                //var opcion_seleccionada = $("select.jq_"+$element.attr('id')+" option:selected").text();
                //alert("texto selecionado: " + opcion_seleccionada);
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
		//tipo de pregunta donde se tienen ordenar los elementos con menu desplegable (ejemplo pregunta 41)
		 
		 $("fieldset.jq_tipo4" + " select ").change(function(event){ 
            
			//0.0 obtengo elelemento al que se hizo clic 
            $element = $(this);
                //alert("valor: "+$element.val());
                //alert("id: "+$element.attr('id'));
                //var opcion_seleccionada = $("select.jq_"+$element.attr('id')+" option:selected").text();
                //alert("texto selecionado: " + opcion_seleccionada);
             alert("hola");    
			 var valor =$element.val();
			 var idhijo = $element.attr('class');
			 alert("idhijo: " + idhijo);
             var idpadre = idhijo.substring(0,8);
			 alert("idpadre: "+ idpadre);
			 alert("#"+idpadre +" div p.jq_p_"+ idhijo);
                 var parrafo =$("#"+idpadre +" div div.jq_p_"+ idhijo);
                 var texto = parrafo.text(); 
                 if(valor==1){ 
                    parrafo.empty().html(texto + '<img src="img/palomita.png" class="bien">');
					 
                }
                 if(valor==0){				
                    parrafo.empty().html(texto + '<img src="img/tache.png" class="mal">'); 
                 }           
         });
});
