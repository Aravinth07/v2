//controls...starts
var bgm = document.getElementById("bgm");

$(document).ready(function() {
    var OverviewSwiperHorizontal = new Swiper('.overview_horizontal', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        mousewheel: true,
        observer: true,
        freeMode: true,
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
    $('#overview_page').css('display', 'none');
    $('#overview-up').css('display', 'none');
    $('#overview-down').css('display', 'block');
}

function overview_down() {
    $('#overview_page').css('display', 'block');
    $('#overview-down').css('display', 'none');
    $('#overview-up').css('display', 'block');
}

function lottie_up() {
    $('#lottie-up').css('display', 'none');
    $('#lottie-down').css('display', 'block');
}

function lottie_down() {
    $('#lottie-down').css('display', 'none');
    $('#lottie-up').css('display', 'block');
}

function play() {
    $('#play_svg').css('display', 'none');
    $('#pause_svg').css('display', 'block');
    const player = document.querySelector("lottie-player");
    player.play();
    bgm.play();

}

function pause() {
    $('#play_svg').css('display', 'block');
    $('#pause_svg').css('display', 'none');
    const player = document.querySelector("lottie-player");
    player.pause();
    bgm.pause();

}

function replay() {
    const player = document.querySelector("lottie-player");
    player.stop();
    player.play();
    bgm.pause();
    bgm.currentTime = 0;
    bgm.play();

    $('#replay_svg').css('display', 'none');
    $('#replay_ro_svg').css('display', 'block');
    $('#play_svg').css('display', 'none');
    $('#pause_svg').css('display', 'block');
}

function replay_ro() {
    const player = document.querySelector("lottie-player");
    player.stop();
    player.play();
    bgm.pause();
    bgm.currentTime = 0;
    bgm.play();
    $('#replay_svg').css('display', 'block');
    $('#replay_ro_svg').css('display', 'none');
    $('#play_svg').css('display', 'none');
    $('#pause_svg').css('display', 'block');
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



$.ready.then(function() {
    setTimeout(function() {

        $("#loader").css('display', 'none');
    }, 5000);

});



document.addEventListener("keydown", function(e, callback) {
    if (e.key !== undefined) {

        if (e.keyCode == 32) {

            if ($(this).attr('data-click-state') == 1) {
                $(this).attr('data-click-state', 0);
                $('#play_svg').css('display', 'none');
                $('#pause_svg').css('display', 'block');
                const player = document.querySelector("#vedhase-toggle1");

                player.play();

                bgm.play();
            } else {
                $(this).attr('data-click-state', 1);
                $('#play_svg').css('display', 'block');
                $('#pause_svg').css('display', 'none');
                const player = document.querySelector("#vedhase-toggle1");

                player.pause();

                bgm.pause();

            }

        }
    } else if (e.keyIdentifier !== undefined) {
        if (e.keyCode == 32) {

            if ($(this).attr('data-click-state') == 1) {
                $(this).attr('data-click-state', 0);
                $('#play_svg').css('display', 'none');
                $('#pause_svg').css('display', 'block');
                const player = document.querySelector("#vedhase-toggle1");

                player.play();

                bgm.play();
            } else {
                $(this).attr('data-click-state', 1);
                $('#play_svg').css('display', 'block');
                $('#pause_svg').css('display', 'none');
                const player = document.querySelector("#vedhase-toggle1");

                player.pause();

                bgm.pause();

            }

        }

    } else if (e.keyCode !== undefined) {
        if (e.keyCode == 32) {

            if ($(this).attr('data-click-state') == 1) {
                $(this).attr('data-click-state', 0);
                $('#play_svg').css('display', 'none');
                $('#pause_svg').css('display', 'block');
                const player = document.querySelector("#vedhase-toggle1");

                player.play();

                bgm.play();
            } else {
                $(this).attr('data-click-state', 1);
                $('#play_svg').css('display', 'block');
                $('#pause_svg').css('display', 'none');
                const player = document.querySelector("#vedhase-toggle1");

                player.pause();

                bgm.pause();

            }

        }
    }
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

    $('#overview_page').css('display', 'none');
});