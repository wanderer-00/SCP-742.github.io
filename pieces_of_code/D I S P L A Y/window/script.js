var $turn = $('.turn');
var $window = $('.window');
var $content = $('.content');

let $Y_ = 1;

$('.turn').on('click', function() {$window.css('display', 'none');});
$('.full').on('click', function() { if ($Y_ == 1) {
                                        $window.css('width', '100%');
                                        $window.css('position', 'absolute');
                                        $content.css('width', '100%');
                                        $window.removeClass('ui-draggable ui-draggable-handle');
                                    }
                                    else {
                                        alert($Y_)
                                    }
    }
);
$('.clos').on('click', function() {$window.css('display', 'none');});