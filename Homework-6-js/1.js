
$(document).ready(function () {

/*
    $('#task1').mousemove(function (event) {

        var msg = "Handler for .mousemove() called at ";
        msg += event.pageX + ", " + event.pageY;

        $('#task1__coordination').text(msg)
    })
*/


   /*
    $('#task2').click(function (event) {
        $(this).css(
            'background-image' , 'url(//n6-img-fp.akamaized.net/free-icon/open-folder-with-document_318-48982.jpg?size=338&ext=jpg)'
        );
    })
    */


   /*

   $('#task3run').click(function (event) {

       for(var i = 300; 0 < i; i--){
           $('#task3').append('<span></span>')
       }

    })

   */

/*
   $('.task4_img').click(function () {
       $('#task4').css(
           'background-image' , 'url('+ $(this).attr('src') +')'
       );
   })

   */


    /*

    var now = 0;

    $('#task5').click(function () {
        now += 100;
        $(this).css('margin', now + 'px 0 0 0')
    })

    */


    var width = 200;
    var blockWidth = 50

    var initial = 5;
    var medium = parseInt((width / 2) - ((blockWidth + initial) / 2)) ;
    var end = width - (blockWidth + ( initial * 2));


    // 1-3
    var initialStep = 0;
    var step  = 0;

    var nextStep = [
         initial,
         medium,
         end
    ]

    $('#trigger').click(function () {

        var currentStep = parseInt($(this).css('left'));

        for(var i = 0; i  < nextStep.length; i++){
            
           if( nextStep[i] === currentStep ) {
               step = i + 1;
           }

        }
        

        if(step > (nextStep.length - 1)){
            step = initialStep;
        }

        $(this).css('left', nextStep[step] + 'px');

        console.log(step);

    })
});
























