var $turn = $('.turn');
var $window = $('.window');
var $content = $('.content');

let $Y_ = 0;
let turn = 0;

// СВОРАЧИВАНИЕ
$('.turn').on('click', function() { 
                                    if ( turn == 0 ) {
                                        $window.css('display', 'none');
                                        turn++;
                                    }
                                    else {
                                        $window.css('display', 'block');
                                        turn--;
                                    }
});

// СВОРАЧИВАНИЕ НА ПАНЕЛИ УПРАВЛЕНИЯ
$('.cell-video').on('click', function() { 
                                    if ( turn == 0 ) {
                                        $window.css('display', 'none');
                                        turn++;
                                    }
                                    else {
                                        $window.css('display', 'block');
                                        turn--;
                                    }
});


var FullStatus = 0;
$('.full').on('click', function() {  alert('Эта функция ещё не работает ^ ^"')
//    if ( FullStatus == 0 ) {
//        $window.css('width', '100%');
//    }
});

$('.clos').on('click', function() {$window.css('display', 'none');});