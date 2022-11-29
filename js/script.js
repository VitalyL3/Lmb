$(document).ready(function() {
    if($(window).width() <= 900) {
        // var advantagesSlider = $('.advantages__list').addClass('owl-carousel').owlCarousel({
        //     smartSpeed: 800,
        //     loop: true,
        //     margin: 20,
        //     items: 1,
        //     dots: false
        // });

        // $('.advantages__next').click(function() {
        //     advantagesSlider.trigger('next.owl.carousel');
        // });

        // $('.advantages__prev').click(function() {
        //     advantagesSlider.trigger('prev.owl.carousel');
        // });

        var directorsSlider = $('.directors__list').addClass('owl-carousel').owlCarousel({
            smartSpeed: 800,
            loop: true,
            margin: 20,
            items: 1,
            dots: false
        });

        $('.directors__next').click(function() {
            directorsSlider.trigger('next.owl.carousel');
        });

        $('.directors__prev').click(function() {
            directorsSlider.trigger('prev.owl.carousel');
        });
    }

    var catalog = $('.catalog__slides').owlCarousel({
        smartSpeed: 800,
        loop: true,
        margin: 108,
        items: 3,
        dots: false,
        responsive:{
            0:{
                margin: 40,
                items: 1
            },
            550:{
                margin: 40,
                items: 2
            },
            980:{
                margin: 40,
                items: 3
            },
            1100:{
                margin: 108,
                items: 3
            }
        }
    });

    $('.catalog__next').click(function() {
        catalog.trigger('next.owl.carousel');
    });

    $('.catalog__prev').click(function() {
        catalog.trigger('prev.owl.carousel');
    });
    
    $('.js-popup-link').on('click', function (e) {
        e.preventDefault();
        var self = this;

        $('html').height($(window).height()).css('overflow', 'hidden');
        $('.page-wrap').css('overflow-y', 'scroll');
        $('.footer').css('overflow', 'scroll');
        $('.top-top').css('overflow-y', 'scroll');
        $('.overlay').fadeIn(300,
            function () {
                $($(self).data('href'))
                    .css('display', 'block')
                    .stop().animate({opacity: 1, top: 0}, 200);
            });
        return false;
    });

    function popupClose() {
        $('.popup')
            .stop().animate({opacity: 0, top: -100}, 300,
            function () {
                if(!$('.menu').hasClass('open')) {
                    $('.page-wrap').css('overflow-y', 'hidden');
                    $('.footer').css('overflow', 'hidden');
                    $('.top-top').css('overflow-y', 'hidden');
                    $('html').css('overflow', 'auto');
                }
                $(this).css('display', 'none');
                $('.overlay').stop().fadeOut(400);
            }
        );
    }

    $('.popup, .select__list, .call__list').on('click', function(e){
        e.stopPropagation();
    });

    $('.popup__close, .overlay, .popup-thank').on('click', popupClose);
    $('body').keyup(function(e){
        if(e.keyCode == 27) {
            popupClose();
        }
    });

    $('.js-scroll-link').click(function(e){
        e.preventDefault();
        $('html,body').stop().animate({ scrollTop: $($(this).data('href')).offset().top }, 1000);
    });

    $('.faq__item-top').on('click', function() {
        var block = $(this).parents('.faq__item');
        if(block.hasClass('open')) {
            block.removeClass('open').find('.faq__item-content').slideUp();
        } else {
            block.addClass('open').find('.faq__item-content').slideDown();
        }
    });

    $('#calc-state').on('click', function() {
        $('.select').toggleClass('open');
    });

    $('.select__item').on('click', function () {
        $(this).parents('.select').remove('open');
        $(this).parents('.select').find('input').val($(this).text());
        getPercent();
        getCostSum();
    });

    $('.call .form__select-arrow').on('click', function() {
        $(this).parents('.call').toggleClass('open');
    });

    $('.call__item').on('click', function () {
        $('.call').addClass('sets');
        $(this).parents('.call').toggleClass('open');
        $('.call__icons .svg-icon').css('display', 'none').eq($(this).index()).css('display', 'block');
        $('.call .form__field').prop('disabled', false).attr('placeholder', $(this).find('.call__item-text').text());
    });

    $('.review__all').on('click', function() {
        var block = $(this).parents('.review');
        if(block.hasClass('open')) {
            block.removeClass('open');
            block.find('.review__else').css('display', 'inline');
            block.find('.review__else-text').css('display', 'none');
            block.find('.review__all span').text('Полностью');
        } else {
            block.addClass('open');
            block.find('.review__else').css('display', 'none');
            block.find('.review__else-text').css('display', 'inline');
            block.find('.review__all span').text('Скрыт');
        }
    });
    const titleResult = document.querySelectorAll('.step__title-result');
    let swapIndex = 0;
    function swapStatus() {  
        let statusLength = titleResult.length-1;
        if(statusLength > swapIndex) {
            if(titleResult[swapIndex].classList.contains('active')) {
                titleResult[swapIndex].classList.remove('active')
                swapIndex++
                titleResult[swapIndex].classList.add('active')
            }
        } else { 
            document.querySelector('.step-result__wrap').classList.remove('active')
            document.querySelector('.step-result__form').classList.add('active')
        }
        
    }
    $('.quiz__next').on('click', function() {
        if($('.step.active').next().index() != -1) {
            if($('.step.active').next().index() >= 6) { 
                setInterval(swapStatus,3000)
                $('.step.active').removeClass('active').next().addClass('active');
                $('.quiz__control').hide();
            } else {
                $('.step.active').removeClass('active').next().addClass('active');
            }
        }
    });

    $('.quiz__prev').on('click', function() {
        if($('.step.active').prev().index() != -1) {
            $('.step.active').removeClass('active').prev().addClass('active');
        }
    });

    var top = $(this).scrollTop(),
        scrHeader = $('.header'),
        scrBlock = $('.main .top');

    if (top > 1) {
        scrHeader.addClass('scroll');
        scrBlock.addClass('scroll');
    } else {
        scrHeader.removeClass('scroll');
        scrBlock.removeClass('scroll');
    }

    $(window).scroll(function(){
        var top = $(this).scrollTop();

        if (top > 1) {
            scrHeader.addClass('scroll');
            scrBlock.addClass('scroll');
        } else {
            scrHeader.removeClass('scroll');
            scrBlock.removeClass('scroll');
        }
    });


    //Form
    function popupOpen() {
        $('html').height($(window).height()).css('overflow', 'hidden');
        $('.page-wrap').css('overflow', 'scroll');

        $('.overlay').fadeIn(300,
            function () {
                $('.popup-end')
                    .css('display', 'block')
                    .stop().animate({opacity: 1, top: 0}, 200);
            });
        return false;
    }

    $('#form-1').submit(function (e) {
        e.preventDefault();
        if(document.getElementById('phone-header-1').value.length < 8) {
            $('#phone-header-1').addClass('error');
        } else {
            $('#phone-header-1').removeClass('error');
            $.ajax({
                type: "POST",
                url: '../php/sendmail.php',
                data: $('#form-1').serialize(),
                success: function success(data) {
                    $('#form-1').trigger("reset");
                    $('.popup-callback').hide();
                    popupOpen();
                },
                error: function error(_error3) {
                }
            });
        }
    });

    $('#form-2').submit(function (e) {
        e.preventDefault();
        if(document.getElementById('phone-header-2').value.length < 8) {
            $('#phone-header-2').addClass('error');
        } else { 
            $('#phone-header-2').removeClass('error');
            $.ajax({
                type: "POST",
                url: '../php/sendmail.php',
                data: $('#form-2').serialize(),
                success: function success(data) {
                    $('#form-2').trigger("reset");
                    popupOpen();
                },
                error: function error(_error3) {
                }
            });
        }
    });

    $('#form-3').submit(function (e) {
        e.preventDefault();
        if(document.getElementById('form-3-phone').value.length < 8) {
            $('#form-3-phone').addClass('error');
        } else { 
            $('#form-3-phone').removeClass('error');
            $.ajax({
                type: "POST",
                url: '../php/sendmail.php',
                data: $('#form-3').serialize(),
                success: function success(data) {
                    $('#form-3').trigger("reset");
                    popupOpen();
                },
                error: function error(_error3) {
                }
            });
        }
    });
    
    $('.calc__btn').on('click', function() {
        document.getElementById('calc-1').value = calcPrice.value;
        document.getElementById('calc-2').value = calcTime.value;
        document.getElementById('calc-3').value = calcState.value;
        document.getElementById('calc-4').value = calcResultSum.textContent;
        document.getElementById('calc-5').value = calcResultCost.textContent;
        document.getElementById('calc-6').value = calcResultPercent.textContent;
    })
    $('#form-4').submit(function (e) {
        e.preventDefault();
        if(document.getElementById('form-4-call').value.length < 2) {
            $('#form-4-call').addClass('error');
            $('.privacy__btn').removeClass('error')
            if(!document.getElementById('form-4-privacy').checked) {
                $('.privacy__btn').addClass('error')
            }
        } else { 
            $('.privacy__btn').removeClass('error')
            $('#form-4-call').removeClass('error');
            $.ajax({
                type: "POST",
                url: '../php/sendmail.php',
                data: $('#form-4').serialize(),
                success: function success(data) {
                    $('#form-4').trigger("reset");
                    $('.popup-calc').hide();
                    popupOpen();
                },
                error: function error(_error3) {
                }
            });
        }
    });

    $('#form-5').submit(function (e) {
        e.preventDefault();
        if(document.getElementById('form-5-email').value.length < 9) {
            $('#form-5-email').addClass('error');
            $('.privacy__btn').removeClass('error')
            if(!document.getElementById('form-5-privacy').checked) {
                $('.privacy__btn').addClass('error')
            }
        } else { 
            $('.privacy__btn').removeClass('error')
            $('#form-5-email').removeClass('error');
            $.ajax({
                type: "POST",
                url: '../php/sendmail.php',
                data: $('#form-5').serialize(),
                success: function success(data) {
                    $('#form-5').trigger("reset");
                    popupOpen();
                },
                error: function error(_error3) {
                }
            });
        }
    });

    $('#form-6').submit(function (e) {
        e.preventDefault();
        if(document.getElementById('form-6-email').value.length < 9) {
            $('#form-6-email').addClass('error');
        } else { 
            $('#form-6-email').removeClass('error');
            $.ajax({
                type: "POST",
                url: '../php/sendmail.php',
                data: $('#form-6').serialize(),
                success: function success(data) {
                    $('#form-6').trigger("reset");
                    popupOpen();
                },
                error: function error(_error3) {
                }
            });
        }
    });

    $('#form-7').submit(function (e) {
        e.preventDefault();
        if(document.getElementById('form-7-name').value.length < 3 || document.getElementById('form-7-city').value.length < 3) {
            $('#form-7-name').addClass('error');
            $('#form-7-city').addClass('error');
            $('.privacy__btn').removeClass('error')
            if(!document.getElementById('form-7-privacy').checked) {
                $('.privacy__btn').addClass('error')
            }
        } else { 
            $('.privacy__btn').removeClass('error')
            $('#form-7-name').removeClass('error');
            $('#form-7-city').removeClass('error');
            $.ajax({
                type: "POST",
                url: '../php/sendmail.php',
                data: $('#form-7').serialize(),
                success: function success(data) {
                    $('#form-7').trigger("reset");
                    popupOpen();
                },
                error: function error(_error3) {
                }
            });
        }
    });

    $('#form-8').submit(function (e) {
        e.preventDefault();
        if(document.getElementById('form-8-email').value.length < 9) {
            $('#form-8-email').addClass('error');
        } else { 
            $('#form-8-email').removeClass('error');
            $.ajax({
                type: "POST",
                url: '../php/sendmail.php',
                data: $('#form-8').serialize(),
                success: function success(data) {
                    $('#form-8').trigger("reset");
                    popupOpen();
                },
                error: function error(_error3) {
                }
            });
        }
    });

//cookies
    const cookies = document.querySelector('.cookie');
    const cookiesAgree = document.querySelector('.cookie__btn');

    function close() {
        cookies.classList.remove('active');
    }
    if (localStorage.getItem('isAgree')) {
        cookies.classList.remove('active');
    }
    if (!localStorage.getItem('isAgree')) {
        cookies.classList.add('active');
    }

    function cookiesAgreeClick(e) {
        e.preventDefault();
        localStorage.setItem('isAgree', true);
        close();
    }

    cookiesAgree.addEventListener('click', cookiesAgreeClick);

    // function addMask() {
    //     const formInfoTel = document.getElementById('phone-header-2');
    //     if(!formInfoTel) return
    //     const phoneMask = IMask(
    //     formInfoTel, {
    //         mask: '(000)-000-00-00',
    //     });
    // }
    // function addMask2() {
    //     const formInfoTel = document.getElementById('phone-header-1');
    //     if(!formInfoTel) return
    //     const phoneMask = IMask(
    //     formInfoTel, {
    //         mask: '(000)-000-00-00',
    //     });
    // }
    // function addMask3() {
    //     const formInfoTel = document.getElementById('form-8-email');
    //     if(!formInfoTel) return
    //     const phoneMask = IMask(
    //     formInfoTel, {
    //         mask: '+{7} (000)-000-00-00',
    //     });
    // }
    // addMask();
    // addMask2();
    // addMask3()
    $("#phone-header-2").mask("(999)999-99-99");
    $("#phone-header-1").mask("(999)999-99-99");
    $("#form-8-email").mask("(999)999-99-99");
});



function mapsInitFirst(){
    var myMap = new ymaps.Map('officeMapFirst', {
            center: [55.762758, 37.596257],
            zoom: 11,
            controls: []
        }
        ),

        myPlacemark = new ymaps.Placemark([55.790461, 37.556229], {
            hintContent: 'Ломбард на Динамо',
            balloonContentBody: `<div class="office__left">
                <p class="office__title">
                    Ломбард на Динамо
                </p>
                <p class="office__address">
                    Москва, метро Динамо
                </p>
                <p class="office__time">
                    Пн – Сб 10:00 – 20:00 <br>
                    Воскресенье: выходной
                </p>
                <div class="office__contacts">
                    <a href="tel:+74995580139" class="office__phone">+7 499  558-01-39</a>
                    <a href="mailto:lombardmsk@yandex.ru" class="office__mail">lombardmsk@yandex.ru</a>
                    <div class="office__contacts-icons">
                        <a href='https://t.me/LombardMSK' target='_blank'><svg class="svg-icon icon-social-3"><use xlink:href="images/sprite.svg#icon-social-3"></use></svg></a>
                        <a href='https://api.whatsapp.com/send?phone=79859620909' target='_blank'><svg class="svg-icon icon-social-4"><use xlink:href="images/sprite.svg#icon-social-4"></use></svg></a>
                    </div>
                </div>
            </div>`
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'images/mark.svg',
            iconImageSize: [35, 46],
            iconImageOffset: [-22, -23]
        }),

        myPlacemarkWithContent = new ymaps.Placemark([55.742393, 37.653331], {
            hintContent: 'Ломбард на Таганке',
            balloonContentBody: `<div class="office__left">
                <p class="office__title">
                    Ломбард на Таганке
                </p>
                <p class="office__address">
                    Москва, метро Таганка
                </p>
                <p class="office__time">
                    Пн – Сб 10:00 – 20:00 <br>
                    Воскресенье: выходной
                </p>
                <div class="office__contacts">
                    <a href="tel:+74995580139" class="office__phone">+7 499  558-01-39</a>
                    <a href="mailto:lombardmsk@yandex.ru" class="office__mail">lombardmsk@yandex.ru</a>
                    <div class="office__contacts-icons">
                        <a href='https://t.me/LombardMSK' target='_blank'><svg class="svg-icon icon-social-3"><use xlink:href="images/sprite.svg#icon-social-3"></use></svg></a>
                        <a href='https://api.whatsapp.com/send?phone=79859620909' target='_blank'><svg class="svg-icon icon-social-4"><use xlink:href="images/sprite.svg#icon-social-4"></use></svg></a>
                    </div>
                </div>
            </div>`
        },{
            iconLayout: 'default#image',
            iconImageHref: 'images/mark.svg',
            iconImageSize: [35, 46],
            iconImageOffset: [-22, -23]
        });
    myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
};

ymaps.ready(mapsInitFirst);


$(document).ready(function () {
    $('#step-marks').chosen({no_results_text: "Такой марки нет"});
});

//Form calc
const calcPrice = document.getElementById('calc-price');
const calcTime = document.getElementById('calc-time');
const calcState = document.getElementById('calc-state');
const calcResultSum = document.getElementById('calc-result-sum');
const calcResultCost = document.getElementById('calc-result-cost');
const calcResultPercent = document.getElementById('calc-result-percent');
const calcResetBtn = document.querySelector('.calc__reset');

// function separatorSum(item) {
//     let lengthSum = item.length - 1;
//     let arr = item.textContent.trim().split('');
//     let result = [];
//     for (let i = 0; i < lengthSum; i++) {
//         if(i % 3 === 0) {
//             result.push(arr[i] + ' ');
//         } else {
//             result.push(arr[i]);
//         }
//     }   
//     console.log(result);
//     return result;
// }
// console.log(separatorSum(calcResultSum))
function resetCalc() {
    calcPrice.value = null;
    calcTime.value = null;
    calcResultSum.textContent = 0;
    calcResultCost.textContent = 0;
    calcResultPercent.textContent = '0%';
}
Number.prototype.toDivide = function() {
	var int = String(Math.trunc(this));
	if(int.length <= 3) return int;
	var space = 0;
	var number = '';
	for(var i = int.length - 1; i >= 0; i--) {
		if(space == 3) {
			number = ' ' + number;
			space = 0;
		}
		number = int.charAt(i) + number;
		space++;
	}
	return number;
}
var currencyMask = IMask(
    document.getElementById('calc-price'),
    {
        mask: 'num',
        blocks: {
        num: {
            mask: Number,
            thousandsSeparator: ' '
        }
        }
});
function calcLoan() {
    calcPrice.addEventListener('input', () => {
        calcResultSum.textContent = (+(calcPrice.value.replace(/[^0-9.]*/g, '') * 0.95).toFixed()).toDivide()
        getPercent();
        getCostSum();
    })
    calcResultSum.textContent = (+(calcPrice.value.replace(/[^0-9.]*/g, '') * 0.95).toFixed()).toDivide()
}

function getCostSum() {
    calcTime.addEventListener('input', () => {
        calcResultCost.textContent = (+(+calcResultSum.textContent.replace(/[^0-9.]*/g, '')*((+calcResultPercent.textContent.replace(/[^0-9.]*/g, '')*0.01)/30*+calcTime.value)).toFixed()).toDivide();
        getPercent();
        getCostSum();
    })
    calcResultCost.textContent = (+(+calcResultSum.textContent.replace(/[^0-9.]*/g, '')*((+calcResultPercent.textContent.replace(/[^0-9.]*/g, '')*0.01)/30*+calcTime.value)).toFixed()).toDivide();
}

function getPercent() {
    switch(calcState.value) {
        case 'Новые':
            if(calcResultSum.textContent < 10000) {
                calcResultPercent.textContent = '12%';
            } else if(calcResultSum.textContent > 10000 && calcResultSum.textContent < 149999) {
                calcResultPercent.textContent = '7%';
            } else if(calcResultSum.textContent > 150000 && calcResultSum.textContent < 499999) {
                calcResultPercent.textContent = '5.5%';
            } else if(calcResultSum.textContent > 500000 && calcResultSum.textContent < 999999) {
                calcResultPercent.textContent = '5.5%';
            } else if(calcResultSum.textContent > 1000000 && calcResultSum.textContent < 1499999) {
                calcResultPercent.textContent = '4.5%';
            } else {
                calcResultPercent.textContent = '3%';
            }
            break;
        case 'Идеальные':
            if(calcResultSum.textContent < 10000) {
                calcResultPercent.textContent = '12%';
            } else if(calcResultSum.textContent > 10000 && calcResultSum.textContent < 149999) {
                calcResultPercent.textContent = '7.5%';
            } else if(calcResultSum.textContent > 150000 && calcResultSum.textContent < 499999) {
                calcResultPercent.textContent = '6%';
            } else if(calcResultSum.textContent > 500000 && calcResultSum.textContent < 999999) {
                calcResultPercent.textContent = '6%';
            } else if(calcResultSum.textContent > 1000000 && calcResultSum.textContent < 1499999) {
                calcResultPercent.textContent = '4.5%';
            } else {
                calcResultPercent.textContent = '3.5%';
            }
            break;
        case 'Б/У':
            if(calcResultSum.textContent < 10000) {
                calcResultPercent.textContent = '12%';
            } else if(calcResultSum.textContent > 10000 && calcResultSum.textContent < 149999) {
                calcResultPercent.textContent = '8%';
            } else if(calcResultSum.textContent > 150000 && calcResultSum.textContent < 499999) {
                calcResultPercent.textContent = '6.5%';
            } else if(calcResultSum.textContent > 500000 && calcResultSum.textContent < 999999) {
                calcResultPercent.textContent = '6.5%';
            } else if(calcResultSum.textContent > 1000000 && calcResultSum.textContent < 1499999) {
                calcResultPercent.textContent = '5%';
            } else {
                calcResultPercent.textContent = '4%';
            }
            break;
        default:
            break;
    }
}
getPercent();
getCostSum();
calcLoan();
calcResetBtn.addEventListener('click', resetCalc);


