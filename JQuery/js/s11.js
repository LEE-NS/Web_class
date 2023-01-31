$('.box1').mouseover(function() {
    $('.box1 p').stop().fadeOut()
}).mouseout(function() {
    $('.box1 p').stop().fadeIn()
})

$('.box2').mouseover(function() {
    $('.box2 p').stop().delay(1000).fadeOut()
}).mouseout(function() {
    $('.box2 p').stop().delay(1000).fadeIn()
})