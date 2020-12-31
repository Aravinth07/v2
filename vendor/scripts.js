//controls...starts

var bgm = document.getElementById("bgm");
var OverviewBtnFlag = false;
var LottieBtnFlag = false;
$(document).ready(function() {
    var OverviewSwiper = new Swiper('.overview_horizontal', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        mousewheel: true,
        observer: true,
        observeParents: true,
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    var lottieSwiper = new Swiper('.lottie_page', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        mousewheel: true,
        observer: true,
        observeParents: true,
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});



function overview_up() {
    $('#lottie_page').css('display', 'none');
    $('#overview_page').css('display', 'none');
    $('#overview-up').css('display', 'none');
    $('#overview-down').css('display', 'block');
    $('#lottie-up').css('display', 'none');
    $('#lottie-down').css('display', 'block');
    $('#play_svg').css('display', 'block');
    $('#pause_svg').css('display', 'none');
    const player = document.querySelector(".size");
    player.pause();
    bgm.pause();
    OverviewBtnFlag = false;
    LottieBtnFlag = false;
}

function overview_down() {
    $('#lottie_page').css('display', 'none');
    $('#overview_page').css('display', 'block');
    $('#overview-down').css('display', 'none');
    $('#overview-up').css('display', 'block');
    $('#lottie-up').css('display', 'none');
    $('#lottie-down').css('display', 'block');
    $('#play_svg').css('display', 'block');
    $('#pause_svg').css('display', 'none');
    const player = document.querySelector(".size");
    player.pause();
    bgm.pause();
    OverviewBtnFlag = true;
    LottieBtnFlag = false;
}

function lottie_up() {
    $('#overview-up').css('display', 'none');
    $('#overview-down').css('display', 'block');
    $('#overview_page').css('display', 'none');
    $('#lottie_page').css('display', 'none');
    $('#lottie-up').css('display', 'none');
    $('#lottie-down').css('display', 'block');
    $('#play_svg').css('display', 'block');
    $('#pause_svg').css('display', 'none');
    const player = document.querySelector(".size");
    player.pause();
    bgm.pause();
    OverviewBtnFlag = false;
    LottieBtnFlag = false;
}

function lottie_down() {
    $('#overview-up').css('display', 'none');
    $('#overview-down').css('display', 'block');
    $('#lottie_page').css('display', 'block');
    $('#overview_page').css('display', 'none');
    $('#lottie-down').css('display', 'none');
    $('#lottie-up').css('display', 'block');
    $('#play_svg').css('display', 'block');
    $('#pause_svg').css('display', 'none');
    const player = document.querySelector(".size");
    player.pause();
    bgm.pause();
    OverviewBtnFlag = false;
    LottieBtnFlag = true;
}

function play() {
    $('#play_svg').css('display', 'none');
    $('#pause_svg').css('display', 'block');
    const player = document.querySelector(".size");
    player.play();
    bgm.play();
    $('#overview-up').css('display', 'none');
    $('#lottie-up').css('display', 'none');
    $('#lottie-down').css('display', 'block');
    $('#overview-down').css('display', 'block');
    $('#overview_page').css('display', 'none');
    $('#lottie_page').css('display', 'none');
    OverviewBtnFlag = false;
    LottieBtnFlag = false;
}

function pause() {
    $('#play_svg').css('display', 'block');
    $('#pause_svg').css('display', 'none');
    const player = document.querySelector(".size");
    player.pause();
    bgm.pause();
    $('#overview-up').css('display', 'none');
    $('#lottie-up').css('display', 'none');
    $('#lottie-down').css('display', 'block');
    $('#overview-down').css('display', 'block');
    $('#overview_page').css('display', 'none');
    $('#lottie_page').css('display', 'none');
    OverviewBtnFlag = false;
    LottieBtnFlag = false;
}


function replay() {
    const player = document.querySelector(".size");
    player.stop();
    player.play();
    bgm.pause();
    bgm.currentTime = 0;
    bgm.play();
    $('#overview-up').css('display', 'none');
    $('#lottie-up').css('display', 'none');
    $('#replay_svg').css('display', 'none');
    $('#replay_ro_svg').css('display', 'block');
    $('#play_svg').css('display', 'none');
    $('#pause_svg').css('display', 'block');
    $('#lottie-down').css('display', 'block');
    $('#overview-down').css('display', 'block');
    $('#overview_page').css('display', 'none');
    $('#lottie_page').css('display', 'none');
    OverviewBtnFlag = false;
    LottieBtnFlag = false;
}

function replay_ro() {
    const player = document.querySelector(".size");
    player.stop();
    player.play();
    bgm.pause();
    bgm.currentTime = 0;
    bgm.play();
    $('#replay_svg').css('display', 'block');
    $('#replay_ro_svg').css('display', 'none');
    $('#play_svg').css('display', 'none');
    $('#pause_svg').css('display', 'block');
    $('#lottie-down').css('display', 'block');
    $('#overview-down').css('display', 'block');
    $('#overview_page').css('display', 'none');
    $('#lottie_page').css('display', 'none');
    $('#overview-up').css('display', 'none');
    $('#lottie-up').css('display', 'none');
    OverviewBtnFlag = false;
    LottieBtnFlag = false;
}

function mute() {
    $('#mute_svg').css('display', 'none');
    $('#sound_svg').css('display', 'block');
    bgm.muted = false;
}

function sound() {
    $('#mute_svg').css('display', 'block');
    $('#sound_svg').css('display', 'none');
    bgm.muted = true;
}


//controls..........................ends........................

$(window).on("load", function() {


    $("#loader").css('display', 'none');



});

// $.ready.then(function() {
//     setTimeout(function() {
//         $("#loader").css('display', 'none');
//         $("#container").css('display', 'block');
//     }, 5000);

// });



document.addEventListener("keydown", function(e, callback) {
    var mySwiper1 = document.querySelector('#full-width-overview').swiper;
    var mySwiper2 = document.querySelector('#full-width-lottie').swiper;


    if (e.key !== undefined) {
        if (e.keyCode == 37) {
            if (OverviewBtnFlag)
                mySwiper1.slidePrev();
            if (LottieBtnFlag)
                mySwiper2.slidePrev();

            //Left arrow pressed
        }
        if (e.keyCode == 39) {
            if (OverviewBtnFlag)
                mySwiper1.slideNext();
            if (LottieBtnFlag)
                mySwiper2.slideNext();

            //Right arrow pressed
        }
        if (e.keyCode == 32) {

            if ($(this).attr('data-click-state') == 1) {
                $(this).attr('data-click-state', 0);
                play();
            } else {
                $(this).attr('data-click-state', 1);
                pause();

            }

        }
    } else if (e.keyIdentifier !== undefined) {
        if (e.keyCode == 32) {

            if ($(this).attr('data-click-state') == 1) {
                $(this).attr('data-click-state', 0);
                play();
            } else {
                $(this).attr('data-click-state', 1);
                pause();

            }

        }
        if (e.keyCode == 37) {
            if (OverviewBtnFlag)
                mySwiper1.slidePrev();
            if (LottieBtnFlag)
                mySwiper2.slidePrev();

            //Left arrow pressed
        }
        if (e.keyCode == 39) {
            if (OverviewBtnFlag)
                mySwiper1.slideNext();
            if (LottieBtnFlag)
                mySwiper2.slideNext();

            //Right arrow pressed
        }
    } else if (e.keyCode !== undefined) {
        if (e.keyCode == 32) {

            if ($(this).attr('data-click-state') == 1) {
                $(this).attr('data-click-state', 0);
                play();
            } else {
                $(this).attr('data-click-state', 1);
                pause();

            }

        }
        if (e.keyCode == 37) {
            if (OverviewBtnFlag)
                mySwiper1.slidePrev();
            if (LottieBtnFlag)
                mySwiper2.slidePrev();

            //Left arrow pressed
        }
        if (e.keyCode == 39) {
            if (OverviewBtnFlag)
                mySwiper1.slideNext();
            if (LottieBtnFlag)
                mySwiper2.slideNext();

            //Right arrow pressed
        }
    }

    callback(mySwiper1);
    callback(mySwiper2);
});

$(document).ready(function() {
    $('#pause_svg').css('display', 'none');
    $('#play_svg').css('display', 'block');
    $('#mute_svg').css('display', 'none');
    $('#replay_ro_svg').css('display', 'none');
    $('#sound_svg').css('display', 'block');
    $('#replay_svg').css('display', 'block');

    $('#overview-down').css('display', 'block');
    $('#overview-up').css('display', 'none');
    $('#lottie-down').css('display', 'block');
    $('#lottie-up').css('display', 'none');
    $('#container').css('display', 'block');
    $('#lottie_page').css('display', 'none');
    $('#overview_page').css('display', 'none');
});