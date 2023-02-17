

$('.banner').each(function(){
    
    let slideImgs = $(this).find('img'),
        slideImgsCount = slideImgs.length,
        currentIndex = 0;
    
    slideImgs.eq(currentIndex).fadeIn();
    
    setInterval(showNextSlide, 3000);
    
    function showNextSlide(){
        let nextIndex = (currentIndex + 1) % slideImgsCount;
        console.log(nextIndex)
        slideImgs.eq(currentIndex).fadeOut();
        slideImgs.eq(nextIndex).fadeIn();
        currentIndex = nextIndex;
    }
})


$('.slider').slick({
            // centerMode: true,
            // centerPadding: '5px',
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            responsive: [
                {
                  breakpoint: 480,
                  settings: 
                  {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false,
                  dots: true
                  }
                }
              ]
        });

        let myVar;

        function myFunction() {
        myVar = setTimeout(showPage, 4000);
        }
        
        function showPage() {
        document.getElementById("loader").style.display = "none";
        document.getElementById("myDiv").style.display = "block";
        } 



$('.flooronelist').slick({
            centerMode: true,
            centerPadding: '10px',
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            dots: true,
            responsive: [
                {
                  breakpoint: 480,
                  settings: 
                  {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerPadding: '5px',
                  }
                }
              ]
        });

$('.exhpiclist').slick({
            // centerMode: true,
            // centerPadding: '10px',
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
        });

$('.evpiclist').slick({
            // centerMode: true,
            // centerPadding: '10px',
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
        });


$('.burger').click(function(e) {
        e.preventDefault();
        $('.topbar').toggleClass('active')
    })      


    $('.visibtn').click(function(e) {
        e.preventDefault();
        $('.topbar').toggleClass('left')
        $('.secondbar').toggleClass('show')
        $('.visit span').last().toggleClass('left')
    });
    

$('.plus').click(function(){
    $(this).prev().val(+$(this).prev().val() + 1);
})


$('.minus').click(function(){
    if($(this).next().val() > 0){
        $(this).next().val(+$(this).next().val() - 1);
    }
})



// $('.noone').click(function(){
//     if(){

//     }else{

//     }
// })




// $('.money').each(function(){
//     let tiPrice = parseInt($(this).text()) *parseInt($(this).closest('.input-num').val());
//     console.log(tiPrice)
// })



// let iSelDate = $(`.ui-state-active`).attr('data-date');
//     console.log(iSelDate);


// let itemMoney = parseInt($('.money')) * $('input-num').val()
// if(){

// }


// $('.days').click(function(){
//     console.log($this);
// })

