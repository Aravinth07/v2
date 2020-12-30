//controls...starts
var bgm = document.getElementById("bgm");

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

});