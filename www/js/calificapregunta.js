//NOTA: Poner la clase de pregunta a cada fieldset
//para filtrarlas y programar su JQUERY deacuerdo a su tipo
    $(document).ready(function(){
        //tipo de pregunta de una sola opcion con option button (ejemplo pregunta 1 o pregunta18)
        $("fieldset.select_tipo1" + " .select_correcta").click(function(event){ 
            //0.0 obtengo elelemento al que se hizo clic 
            $element = $(this);
            //0.1 Obtener todos los imagenes de los label de esa pregunta para quitarlas 
                //0.1.1 obtener el id del padre apartir del id del hijo    
                var hijo = $element.attr('id');
                var idpadre = hijo.substring(0,5);
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
        
        $("fieldset.select_tipo1" + " .select_incorrecta").click(function(event){        
            //0.0 obtengo elelemento al que se hizo clic 
            $element = $(this);
            //0.1 Obtener todos los imagenes de los label de esa pregunta para quitarlas 
                //0.1.1 obtener el id del padre apartir del id del hijo    
                var hijo = $element.attr('id');
                var idpadre = hijo.substring(0,5);
                //0.0.2 remuevo 
            $("fieldset#"+ idpadre + " label img").remove();             
            //1 obtengo el label
            var $label = $("label[for='"+$element.attr('id')+"']");
            //2 obtengo el texto del label
             var texto = $label.text();
        
            //3 inserto la imagen en el label (el id del labeles el mismo que el input)
                $("." + event.target.id).empty().html(texto + '<img src="img/tache.png" class="mal">');   
        });
        //tipo de pregunta de opcion multiple con checkbox (ejemplo pregunta 5)
        $("fieldset.select_tipo2" + " .select_correcta").click(function(event){ 
            //0.0 obtengo elelemento al que se hizo clic 
            $element = $(this);
            //0.1 Obtener todos los imagenes de los label de esa pregunta para quitarlas 
                //0.1.1 obtener el id del padre apartir del id del hijo    
                var hijo = $element.attr('id');
                var idpadre = hijo.substring(0,5);           
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
        
        $("fieldset.select_tipo2" + " .select_incorrecta").click(function(event){ 
            //0.0 obtengo elelemento al que se hizo clic 
            $element = $(this);
            //0.1 Obtener todos los imagenes de los label de esa pregunta para quitarlas 
                //0.1.1 obtener el id del padre apartir del id del hijo    
                var hijo = $element.attr('id');
                var idpadre = hijo.substring(0,5);         
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
    });
        /*
        //tipo de pregunta de una sola opcion con menu desplegable (ejemplo pregunta )
        $("fieldset.select_tipo3" + " select option").onclick(function(event){ 
            //0.0 obtengo elelemento al que se hizo clic 
            $element = $(this);
                alert($element );
                alert("hola");
            /*
            
            //0.1 Obtener todos los imagenes de los label de esa pregunta para quitarlas 
                //0.1.1 obtener el id del padre apartir del id del hijo    
                var hijo = $element.attr('id');
                var idpadre = hijo.substring(0,5);           
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
            */
        /*
        $("fieldset.select_tipo3" + " .select_incorrecta").click(function(event){ 
            //0.0 obtengo elelemento al que se hizo clic 
            $element = $(this);
            //0.1 Obtener todos los imagenes de los label de esa pregunta para quitarlas 
                //0.1.1 obtener el id del padre apartir del id del hijo    
                var hijo = $element.attr('id');
                var idpadre = hijo.substring(0,5);         
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
        */
  

