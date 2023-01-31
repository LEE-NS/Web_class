$('.box01').css({
    width: '50%',
    height: 300,
    backgroundColor: '#387382'
})

let d = $('.box02 .p21').css('display')

if(d == 'none') {
    $('.box02 .p22').css({
        border: '5px solid #000'
    })
} else {
    $('.box02 .p22').css({
        border: 0
    })
}