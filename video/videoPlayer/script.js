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