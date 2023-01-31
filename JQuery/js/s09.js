$('.bt1').click(function() {
    $('.box1 .pan').show(2000)
})

$('.bt2').click(function() {
    $('.box1 .pan').hide(2000)
})

$('.bt3').click(function() {
    $('.box1 .pan').toggle(2000)
})

$('.bt4').click(function() {
    $('.box1 .pan').slideDown(2000)
})

$('.bt5').click(function() {
    $('.box1 .pan').slideUp(2000)
})

$('.bt6').click(function() {
    $('.box1 .pan').slideToggle(2000)
})

$('.bt7').click(function() {
    $('.box1 .pan').fadeIn(2000)
})

$('.bt8').click(function() {
    $('.box1 .pan').fadeOut(2000)
})

$('.bt9').click(function() {
    $('.box1 .pan').fadeToggle(2000)
})



$('.box2 button').click(function() {
    $('.box2 .b21').slideToggle(3000)
    $('.box2 .b22').slideToggle(3000, 'linear')
})

$('.box3 button').click(function() {
    $('.box3 .p31').fadeIn(3000).css({
        backgroundColor: 'skyblue'
    })
    $('.box3 .p32').fadeIn(3000, function() {
        $(this).css({
            transition: '0.5s',
            backgroundColor: 'skyblue'
        })
    })
})