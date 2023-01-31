let i = $('.box01 .p11').css('display')

if (i == 'none') {
    $('.box01 .p12').addClass('on')
} else {
    $('.box01 .p12').removeClass('on')
}

$('.box02 p').toggleClass('on')