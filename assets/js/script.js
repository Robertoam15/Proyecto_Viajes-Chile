$(function(){

    $(function(){
        $('[data-toggle="tooltip"]').tooltip()
      })

    $("#enviar").click(function(){
        alert("Su mensaje fue enviado correctamente. Le responderemos a la brevedad")
    })

    $("#quienesSomos").click(function(){
        var viajes=this.hash

        $("html,body").animate(
            {
                scrolltop:$(viajes).offset().top
            }, 
                1000
        )
    })

})