$(function(){
    

    //Funções
    alterarTema();
    clicar();


    function clicar(){

        $('#numerosSinais .number').click(function(){
            var insert = $(this).text();
            var texto = $('#tela').text();
            
            $('#tela').append(insert);
            console.log(eval(texto + insert));
            var re = eval(texto + insert);

            $('#igual').click(function(){
               // var valor = re.toLocaleString();
                $('#tela').html(re);
                console.log('foi')
            });
            
        }); 
        

        $('.del').click(function(){
            var texto = $('#tela').text();
            var amt = texto.length;
            const str = texto.substr(0,amt-1)
            $('#tela').html(str);
            re = eval(str + insert);
           /* var removedText = texto.replace(/\D+/g, '');
            $('#tela').text(removedText);
            console.log(removedText)*/
                        
        })

        $('#reset').click(function(){
            $('#tela').html('');
            
        })
    };

    function alterarTema(){

        const barra = $('#barraTheme');
        const pointer = $('#pointer');
        
        var isDrag = false;
        var currentValue = 0;
        var offsetX = pointer.offset().left - barra.offset().left;

        pointer.css('left',offsetX + '%' - 2 + 'px');

        pointer.mousedown(function(){
            isDrag = true;
        })

        $(document).mouseup(function(){
            isDrag = false;
                enableTextSelection();
        })

        barra.mousemove(function(e){
            if(isDrag == true){
                disableTextSelection();

                var valor = e.pageX - $(this).offset().left; ;
                var moveX = valor - 12;
                if(moveX < 0){
                    moveX = 0;
                }
                else if(moveX > barra.width()){
                    moveX = barra.width();
                }

                currentValue = (moveX  * 100) / barra.width();
                pointer.css('left',currentValue + "%" );
             
                if(currentValue < 33){
                    $('body').css('background-color','#37415d');
                    $('header p, header span').css('color','white');
                    $('#barraTheme').css('background-color','#252d42');
                    $('#pointer').css('background-color','#d53e29');
                    $('#resultado').css('background-color','#181f32');
                    $('#container').css('background-color','#252d44');
                    $('#resultado #tela').css('color','white');
                    $('#numerosSinais .number , .del').css('background-color','#eae3db').css('color','#434651').css('border-bottom','rgb(130, 130, 130)');;
                    $('#numerosSinais .del').css('background-color','#647299').css('color','white');;
                    $('#resetIgual #reset').css('background-color','647299').css('color','white');
                    $('#resetIgual #igual').css('background-color','#d13f30').css('color','white');
                }
                 if(currentValue >= 33 && currentValue < 99){
                    $('body').css('background-color','#e6e6e6');
                    $('header p, header span').css('color','#36372e');
                    $('#barraTheme').css('background-color','#d5ccce');
                    $('#pointer').css('background-color','#c25601');
                    $('#resultado').css('background-color','#eeeeee');
                    $('#container').css('background-color','#d3cdcd');
                    $('#resultado #tela').css('color','#37372f');
                    $('#numerosSinais .number , .del').css('background-color','#e5e4e0').css('color','#35352c').css('border-bottom','#bab1ac');
                    $('#numerosSinais .del').css('background-color','#388187').css('color','#e2eeed').css('border-bottom','#1c5f65');
                    $('#resetIgual #reset').css('background-color','#388187').css('color','#d8e9e8').css('border-bottom','#2d646a');
                    $('#resetIgual #igual').css('background-color','#c85401').css('color','white').css('border-bottom','#874415');


                }
                 if(currentValue > 66 ){
                    $('body').css('background-color','#17062a');
                    $('header p, header span').css('color','#f7e04c');
                    $('#barraTheme').css('background-color','#1e0836');
                    $('#pointer').css('background-color','#05d9d3');
                    $('#resultado').css('background-color','#1e0836');
                    $('#container').css('background-color','#1e0836');
                    $('#resultado #tela').css('color','#dbc947');
                    $('#numerosSinais .number , .del').css('background-color','#331b4d').css('color','#fce442').css('border-bottom','#58146f');
                    $('#numerosSinais .del').css('background-color','#56077c').css('color','white').css('border-bottom','#b71aeb');
                    $('#resetIgual #reset').css('background-color','#56077c').css('color','white').css('border-bottom','#ab1adb');
                    $('#resetIgual #igual').css('background-color','#00decf').css('color','#075255').css('border-bottom','#73e2e3');
                }

            }   
        })


        function disableTextSelection(){
            $("body").css("-webkit-user-select","none");
            $("body").css("-moz-user-select","none");
            $("body").css("-ms-user-select","none");
            $("body").css("-o-user-select","none");
            $("body").css("user-select","none");
      }

      function enableTextSelection(){
            $("body").css("-webkit-user-select","auto");
            $("body").css("-moz-user-select","auto");
            $("body").css("-ms-user-select","auto");
            $("body").css("-o-user-select","auto");
           $("body").css("user-select","auto");
      }

    }
});



