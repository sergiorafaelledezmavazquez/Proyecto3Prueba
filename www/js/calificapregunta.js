
    $(document).ready(function(){
       

        $(".select_correcta").click(function(event){
            //funciona
            
            //0 obtengo elelemento al que se hizo clic 
            $element = $(this);
            alert("correcta:"+ $element.attr('id'));
            //1 obtengo el label
            var $label = $("label[for='"+$element.attr('id')+"']");
            //2 obtengo el texto del label
             var texto = $label.text();
            
            //2.1 leer un atributo
                var x =  $element.attr('id');
                var atributo_value = $("#"+x).attr("value");
                var propiedad_checked = $("#"+x).prop("checked");
                alert("atributo_value: " + atributo_value +"\n"+ 
                      "propiedad_checked: " + propiedad_checked
                     );
               
            //3 inserto la imagen en el label (el id del labeles el mismo que el input)
              
                $("." + event.target.id).empty().html(texto + '<img src="img/palomita.png" class="bien">');           
            
            //4 remuevo la imagen de las otras preguntas
            //4.1 obtener el id del padre apartir del id del hijo    
                var hijo = $element.attr('id');
                var idpadre = hijo.substring(0,5);
            //remuevo 
            
            $("fieldset#"+ idpadre + " label img.mal").remove();
            
               
        });
        
        $(".select_incorrecta").click(function(event){
            
            //0 obtengo elelemento al que se hizo clic 
            $element = $(this);
            alert("incorrecta"+ $element.attr('id'));
            //1 obtengo el label
            var $label = $("label[for='"+$element.attr('id')+"']");
            //2 obtengo el texto del label
             var texto = $label.text();
            //2.1 leer un atributo
                var x =  $element.attr('id');
                var atributo_value = $("#"+x).attr("value");
                var propiedad_checked = $("#"+x).prop("checked");
                alert("atributo_value: " + atributo_value +"\n"+ 
                      "propiedad_checked: " + propiedad_checked
                     );
            //3 inserto la imagen en el label (truco: el id del label debe ser el mismo que el input) empty para limpiar memoria
            $("." + event.target.id).empty().html(texto + '<img src="img/tache.png" class="mal">');
            //4 remuevo la imagen de las otras preguntas
            //4.1 obtener el id del padre apartir del id del hijo    
                var hijo = $element.attr('id');
                var idpadre = hijo.substring(0,5);
            //remuevo 
            $("fieldset#"+ idpadre + " label img.bien").remove();
        });
        
    });

