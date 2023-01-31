$(window).resize(function() {
    b1BgColor();
})

function b1BgColor() {
    let i = $(window).width()
    if(i >= 1000) {
        $('.box1').css({
            backgroundColor: 'red',
        })
    } else {
        $('.box1').css({
            backgroundColor: 'blue',
        })
    }
}