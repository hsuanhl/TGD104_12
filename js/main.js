

$('.banner').each(function(){
    
    let slideImgs = $(this).find('img'),
        slideImgsCount = slideImgs.length,
        currentIndex = 0;
    
    slideImgs.eq(currentIndex).fadeIn();
    
    setInterval(showNextSlide, 5000);
    
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

$('.flooronelist').slick({
            centerMode: true,
            centerPadding: '10px',
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

$('.visibtn').click(function(e) {
        e.preventDefault();
        $('.secondbar').toggleClass('show')
    })   


$('.burger').click(function(e) {
        e.preventDefault();
        $('.topbar').toggleClass('active')
    })      


//加減按鈕
// let num_plus = document.getElementById("plus");
// let num_min = document.getElementById("minus");
// let input_num = document.getElementById("input-num");

//     num_plus.onclick = function() {
//         input_num.value = parseInt(input_num.value) + 1;
//         }

//     num_min.onclick = function() {

//         if(input_num.value <= 0) {
//                 input_num.value = 0;
//         } else {

//                 input_num.value = parseInt(input_num.value) - 1;
//             }
//         }


//         let num_plus1 = document.getElementById("plus1");
//         let num_min1 = document.getElementById("minus1");
//         let input_num1 = document.getElementById("input-num1");
                
//             num_plus1.onclick = function() {
//                 input_num1.value = parseInt(input_num1.value) + 1;
//                 }
                
//             num_min1.onclick = function() {
                
//                 if(input_num1.value <= 0) {
//                                 input_num1.value = 0;
//                 } else {
                
//                         input_num1.value = parseInt(input_num1.value) - 1;
//                     }
//                 }



//         let num_plus2 = document.getElementById("plus2");
//         let num_min2 = document.getElementById("minus2");
//         let input_num2 = document.getElementById("input-num2");
                
//             num_plus2.onclick = function() {
//                 input_num2.value = parseInt(input_num2.value) + 1;
//                 }
                
//             num_min2.onclick = function() {
                
//                 if(input_num2.value <= 0) {
//                                 input_num2.value = 0;
//                 } else {
                
//                         input_num2.value = parseInt(input_num2.value) - 1;
//                     }
//                 }

//         let num_plus3 = document.getElementById("plus3");
//         let num_min3 = document.getElementById("minus3");
//         let input_num3 = document.getElementById("input-num3");
                
//             num_plus3.onclick = function() {
//                 input_num3.value = parseInt(input_num3.value) + 1;
//                 }
                
//             num_min3.onclick = function() {
                
//                 if(input_num3.value <= 0) {
//                         input_num3.value = 0;
//                 } else {
                
//                         input_num3.value = parseInt(input_num3.value) - 1;
//                     }
//                 }

//                 let num_plus4 = document.getElementById("plus4");
//                 let num_min4 = document.getElementById("minus4");
//                 let input_num4 = document.getElementById("input-num4");
                        
//                     num_plus4.onclick = function() {
//                         input_num4.value = parseInt(input_num4.value) + 1;
//                         }
                        
//                     num_min4.onclick = function() {
                        
//                         if(input_num4.value <= 0) {
//                                 input_num4.value = 0;
//                         } else {
                        
//                                 input_num4.value = parseInt(input_num4.value) - 1;
//                             }
//                         }
    
//                         let num_plus5 = document.getElementById("plus5");
//                         let num_min5 = document.getElementById("minus5");
//                         let input_num5 = document.getElementById("input-num5");
                                
//                             num_plus5.onclick = function() {
//                                 input_num5.value = parseInt(input_num5.value) + 1;
//                                 }
                                
//                             num_min5.onclick = function() {
                                
//                                 if(input_num5.value <= 0) {
//                                         input_num5.value = 0;
//                                 } else {
                                
//                                         input_num5.value = parseInt(input_num5.value) - 1;
//                                     }
//                                 }
                                
//                                 let num_plus6 = document.getElementById("plus6");
//                                 let num_min6 = document.getElementById("minus6");
//                                 let input_num6 = document.getElementById("input-num6");
                                        
//                                     num_plus6.onclick = function() {
//                                         input_num6.value = parseInt(input_num6.value) + 1;
//                                         }
                                        
//                                     num_min6.onclick = function() {
                                        
//                                         if(input_num6.value <= 0) {
//                                                         input_num6.value = 0;
//                                         } else {
                                        
//                                                 input_num6.value = parseInt(input_num6.value) - 1;
//                                             }
//                                         }

    