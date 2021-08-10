var $turn = $('.turn');
var $video = $('.video');
var $window = $('.window');
var $content = $('.content');

let $Y_ = 0;
let turn_video = 1;
let $turn_menu = 0;

// СВОРАЧИВАНИЕ video
$('.turn-video').on('click', function() { 
                                    if ( turn_video == 0 ) {
                                        $video.css('display', 'none');
                                        turn_video++;
                                    }
                                    else {
                                        $video.css('display', 'block');
                                        turn_video--;
                                    }
});

// СВОРАЧИВАНИЕ НА ПАНЕЛИ УПРАВЛЕНИЯ video
$('.cell-video').on('click', function() { 
                                    if ( turn_video == 0 ) {
                                        $video.css('display', 'none');
                                        turn_video++;
                                    }
                                    else {
                                        $video.css('display', 'block');
                                        turn_video--;
                                    }
});

// СВОРАЧИВАНИЕ menu
$('.turn').on('click', function() { 
                                    if ( $turn_menu == 0 ) {
                                        $window.css('display', 'none');
                                        $turn_menu++;
                                    }
                                    else {
                                        $window.css('display', 'block');
                                        $turn_menu--;
                                    }
});

// СВОРАЧИВАНИЕ НА ПАНЕЛИ УПРАВЛЕНИЯ menu
$('.turn').on('click', function() { 
                                    if ( $turn_menu == 0 ) {
                                        $window.css('display', 'none');
                                        $turn_menu++;
                                    }
                                    else {
                                        $window.css('display', 'block');
                                        $turn_menu--;
                                    }
});
$('.full').on('click', function() { alert('Эта функция ещё не работает ^ ^"')
//                                    if ($Y_ == 0) {
//                                        $window.css('width', '100%');
//                                        $window.css('height', '100%');
//                                        $window.css('position', 'absolute');
//                                        $window.css('left', '0');
//                                        $window.css('top', '0');
//                                        $content.css('width', '100%');
//                                        $content.css('height', '100%');
//                                        $Y_++;
//                                    }
//                                    else {
//                                        $window.css('width', '');
//                                        $window.css('height', '');
//                                        $content.css('width', '440px');
//                                        $content.css('height', '440px');
//                                        $Y_--;
//                                    }
    }
);

$('.clos').on('click', function() {$window.css('display', 'none');});
$('.clos-video').on('click', function() {$video.css('display', 'none');});