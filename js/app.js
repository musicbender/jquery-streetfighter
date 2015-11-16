$(document).ready(function() {
    
    $('.ryu').mouseenter(function(){
        $('.ryu-still').hide();
        $('.ryu-ready').show();
    });
    
    $('.ryu').mouseleave(function(){
        $('.ryu-ready').hide();
        $('.ryu-still').show();
    });
    
    $('.ryu').mousedown(function(){
        playHadouken();
        $('.ryu-ready').hide();
        $('.ryu-throwing').show();
        $('.hadouken').finish().css('left', '520px').show().animate({'left': '+=1020px'}, 550, function() {
            $(this).hide();
            $(this).css('left', '520px');
            }
        ); 
    });
    
    $('.ryu').mouseup(function(){
        $('.ryu-throwing').hide();
        $('.hadouken').hide();
        $('.ryu-ready').show();
    });
    
    /*Press X for Cool Pose*/
    $(document).keydown(function(event){
        var whichKey = event.keyCode;
        
        if (whichKey == 88) {
            $('.ryu-still').hide();
            $('.ryu-ready').hide();
            $('.ryu-throwing').hide();
            $('.hadouken').hide();
            $('.ryu-cool').show();
        }
        else {
            return;
        }
     });
    
    $(document).keyup(function(event){
        var whichKey = event.keyCode || event.which;
        if (whichKey = 88) {
            $('.ryu-cool').hide();
            $('.ryu-still').show();
        }
    });
});

/*Play hadouken sound*/
function playHadouken () {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}