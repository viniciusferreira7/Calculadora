$(function(){
    //Variavies
    var number = $('.number');
    var signal = $('.signal');
    var tela = $('.valor');
    var result = $('#igual');
    
    //Funções
   // console.log(amt)
    
    number.click(function(){
        tela.append($(this).val());

        if($(this).index() == 7){
            $('.n').click(function(){
                var n = $(this).val();
                var re = n + n;
                result.click(function(){
                    tela.html(re);  
                      
            })
            
            })
        }
    
    })    

       /* signal.click(function(){
            result.prepend('<p class="valor">'+ $(this).val()+'</p>');
            return result;
        });
        */


})



