let image = $('.photoBox');
let pager = $('.pager li');
let c = 0; 

pager.on({
    click : function() {
        let i = $(this).index();
        let currentImg = image.eq(c);
        let newImg = image.eq(i); 
        
        if(i == c) return false;
        if(i > c) {
            currentImg.stop().animate({
                left: '100%'
            })
            newImg.css({
                left: '-100%'
            }).stop().animate({
                left: 0
            })
        }
        if(i < c) {
            currentImg.stop().animate({
                left: '-100%'
            })
            newImg.css({
                left: '100%'
            }).stop().animate({
                left: 0
            })
        }
        c = i;
        pager.removeClass('active');
        pager.eq(i).addClass('active');
    }
})