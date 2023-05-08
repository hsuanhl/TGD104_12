

$('.banner').each(function(){
    
    let slideImgs = $(this).find('img'),
        slideImgsCount = slideImgs.length,
        currentIndex = 0;
    
    slideImgs.eq(currentIndex).fadeIn();
    
    setInterval(showNextSlide, 3000);
    
    function showNextSlide(){
        let nextIndex = (currentIndex + 1) % slideImgsCount;
        slideImgs.eq(currentIndex).fadeOut();
        slideImgs.eq(nextIndex).fadeIn();
        currentIndex = nextIndex;
    }
})

    let myVar;
    function myFunction() {
    myVar = setTimeout(showPage, 4000);
        }
        
    function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
        } 

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
    
$(".methodToggole").click(function(){
        $(this).next().slideToggle();
        $(this).children("span").toggleClass('down')
        });


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
                var this_val = $(this).val();
                if(isNaN(this_val)){
                    $(this).val('0');
                }
                addMoney();
            });
                    
            //input失焦事件
            $('.input-num').blur(function(){
                var this_val = $(this).val();
                if(isNaN(this_val)){
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

$(function(){
    addMoneytwo();

    $('.plus2').click(function(){
        $(this).prev().val(+$(this).prev().val() + 1);
        addMoneytwo();
    })
    
    
    $('.minus2').click(function(){
        if($(this).next().val() > 0){
            $(this).next().val(+$(this).next().val() - 1);
            addMoneytwo();
        }
    })
    
         //input 输入事件
    $('.input-num2').keyup(function(){
            var this_val = $(this).val();
            if(isNaN(this_val)){
                $(this).val('0');
            }
        addMoneytwo();
    });
         
        //input失焦事件
        $('.input-num2').blur(function(){
            var this_valtwo = $(this).val();
            if(isNaN(this_val)){
                $(this).val('0');
            }else{
                $(this).val(this_valtwo);
            }
        });


        function addMoneytwo() {
            var now_totaltwo = 0;
            $('.cartitems').each(function (index) {
                var nowPricetwo = $(this).find('.money').attr('data-price');
                var numberstwo = $(this).find('.input-num2').val();
                if (!isNaN(numberstwo)) {
                    var now_price_totaltwo = nowPricetwo * numberstwo;
                    now_totaltwo += now_price_totaltwo;
                }
                $('.ttmoney span').html(`&nbsp` + now_totaltwo);
            })
        }
});

document.addEventListener("click", function(e){
    // console.log(e.target); // 使用者點擊到的元素
    if(e.target.classList.contains("fa-trash-can")){
        let r = confirm("Confirm Delete?");
        if (r){
            
            //刪除介面上的待辦
            e.target.closest("tr").classList.add("fade_out");
            setTimeout(function(){
                e.target.closest("tr").remove();
            }, 1000);


        }
    }

});



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
      };


      $('.hideMore22').hide();
      $('#btnClick2').on('click', function () {
          if ($('#btnClick2').text() === 'View More') {
              $('#btnClick2').text('View Less');
              $('.hideMore22').show();
          }
          else {

              $('#btnClick2').text('View More');
              $('.hideMore22').hide();
          }
      });

      $(function() {
      //一開始所有資料都隱藏
          $(".news2022").hide(); //第一個資料隱藏
          $(".news2021").hide(); //第二個資料隱藏
          $("#slt1").change(function(val) {
              //因為是 select 所以綁定 change 事件
              if ($("#slt1").val() === "tab_1") {
              //當 select 中 option 的值等於 1 時
              $(".news2022").show(); //第一個資料顯示
              $(".news2021").hide(); //第二個資料隱藏
              } else if ($("#slt1").val() === "tab_2") {
              //當 select 中 option 的值等於 2 時
              $(".news2021").show(); //第二個資料顯示
              $(".news2022").hide(); //第一個資料隱藏
              } else {
              //否則兩筆都隱藏
              $(".news2022").hide();
              $(".news2021").hide();
              }
          });
      });

    // const card = document.getElementsById("card")
    $(".card").click(function(){
        $(this).toggleClass("flipCard")
    });
