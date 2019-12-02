$(function() {
    
    function updateOutput(){
        
        $("iframe").contents().find("html").html(
           "<html><head><style type='text/css'>"
           + $("#cssPanel").val() + 
           "</style></head><body>" 
           + $("#htmlPanel").val() + 
           "</body></html>");
        
    document.getElementById("outputPanel").contentWindow.eval($("#jsPanel").val());
        
        
    }
  
    
    updateOutput();
    
    
    $(".toggleButton").hover(function() {
        
        $(this).addClass("buttonsHover");
        
    }, function() {
        
        $(this).removeClass("buttonsHover");
        
    } );
    
    
    
    $(".toggleButton").click( function() {
        
        $(this).toggleClass("azul");
        
        $(this).removeClass("buttonsHover");
        
        let panelId = $(this).attr('id') + "Panel";
        
        $('#'+panelId).toggleClass("hidden");
        
        let counter = 4 - $(".hidden").length;
        
        $('.panel').width(($( window ).width()/counter)-12);
        
        $('.panel').height(($( window ).height() - $("#header" ).height()) - 16);
    });
    
   
    $('.panel').width(($( window ).width()/2)-12);
    
    $('.panel').height(($( window ).height() - $("#header" ).height()) - 16);
    
      
    $("#htmlPanel").on("change keyup paste", function() { 
        
      updateOutput();
        
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});