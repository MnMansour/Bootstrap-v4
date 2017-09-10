$(document).ready(function(){
    $("#mycarousel").carousel({interval: 2000});

    $("#carousel-button").click(function(){
        if($("#carousel-button").children("span").hasClass("fa-pause")){
            $("#mycarousel").carousel("pause");
            $("#carousel-button").children("span").removeClass("fa-pause");
            $("#carousel-button").children("span").addClass("fa-play");
            
        }
        else{
            $("#mycarousel").carousel("cycle");
            $("#carousel-button").children("span").removeClass("fa-play");
            $("#carousel-button").children("span").addClass("fa-pause");
        }
        
    });

    $("#bReserve").click(function(){
        $("#reservemodal").modal('show');
    });

    $("#bLogin").click(function(){
        $("#loginModal").modal('show')
    });

    $("#cReserve").click(function(){
        $("#reservemodal").modal('hide');
    });

    $("#cLogin").click(function(){
        $("#loginModal").modal('hide')
    });


    
});