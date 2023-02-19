

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
    

// $('.plus').click(function(){
//     $(this).prev().val(+$(this).prev().val() + 1);
// })


// $('.minus').click(function(){
//     if($(this).next().val() > 0){
//         $(this).next().val(+$(this).next().val() - 1);
//     }
// })

$(function(){
    addMoney();

    $('.plus').click(function(){
        $(this).prev().val(+$(this).prev().val() + 1);
        addMoney();
    })
    
    
    $('.minus').click(function(){
        if($(this).next().val() > 0){
            $(this).next().val(+$(this).next().val() - 1);
            addMoney();
        }
    })
    
         //input 输入事件
    $('.input-num').keyup(function(){
        addMoney();
    });
         
        //input失焦事件
        $('.input-num').blur(function(){
            var this_val = $(this).val();
            if(this_val == '' || this_val == 'undefind'){
                $(this).val('0');
            }else{
                $(this).val(this_val);
            }
        });


function addMoney(){
    var now_total = 0;
    $('.chooseTicket tr').each(function(index){
        var nowPrice = $(this).find('.money').attr('data-price');
        var numbers = $(this).find('.input-num').val();
        var now_price_total = nowPrice * numbers;
        now_total += now_price_total;
        
        
    })
    var ex_total = 0;
    $('.chooseExTi li').each(function(index){
        var exPrice = $(this).find('.money').attr('data-price');
        var exnums = $(this).find('.input-num').val();
        var ex_price_total = exPrice * exnums;
        ex_total += ex_price_total;

    })
    var esubTotal = now_total + ex_total
    $('.totalmoney').html(`&nbsp`+ esubTotal);
}
})

$('.choose').click(
    function () {
        $('.option').toggle();
    });

    $("body").click(function (e) {
        if (!$(e.target).closest(".choose,.option").length) {
            $(".option").hide();
        }
    });

    $(".option li").click(function () {
    var _text = ($(this).text())
    $(".choose").val(_text)
    $(".option").hide()

    var classToFilter = $(this).attr('data-filter');
    
    var hide = $('.listev li').not('.' + classToFilter);
    var show = $('.listev li.' + classToFilter)
    show.show();
    hide.hide();
    

    });
//信用卡卡號
    document.addEventListener("DOMContentLoaded", function(){
        let cardnum = document.getElementsByClassName("card");
        for(let i = 0; i < cardnum.length; i++){
            cardnum[i].addEventListener("keydown", function(e){
                if((e.which >= 48 && e.which <= 57) || e.which == 8){
                    if(e.target.value.length == 0 && e.which == 8){
                        let pre_el = e.target.previousElementSibling;
                        pre_el.focus();
                    }
                }else{
                    e.preventDefault();
                }
                
            });
            cardnum[i].addEventListener("keyup", function(e){
                let str = (e.target.value).replace(/\D/g,"");
                e.target.value = str;

                if(e.target.value.length == 4){
                    let nex_el = this.nextElementSibling;
                    if(nex_el != null){
                        nex_el.focus();
                    }
                }
              
            });
        }
    });




    function formatString(e) {
        var inputChar = String.fromCharCode(event.keyCode);
        var code = event.keyCode;
        var allowedKeys = [8];
        if (allowedKeys.indexOf(code) !== -1) {
          return;
        }
      
        event.target.value = event.target.value.replace(
          /^([1-9]\/|[2-9])$/g, '0$1/' // 3 > 03/
        ).replace(
          /^(0[1-9]|1[0-2])$/g, '$1/' // 11 > 11/
        ).replace(
          /^([0-1])([3-9])$/g, '0$1/$2' // 13 > 01/3
        ).replace(
          /^(0?[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2' // 141 > 01/41
        ).replace(
          /^([0]+)\/|[0]+$/g, '0' // 0/ > 0 and 00 > 0
        ).replace(
          /[^\d\/]|^[\/]*$/g, '' // To allow only digits and `/`
        ).replace(
          /\/\//g, '/' // Prevent entering more than 1 `/`
        );
      }

      
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

$