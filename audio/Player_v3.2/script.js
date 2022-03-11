var BUTTON_PLAY = document.getElementById('PLAY');
var BUTTON_PLAY_SPAN = BUTTON_PLAY.getElementsByTagName('span')[0];

var TRACKS = [
    {"name": "Blackbear-IDFC_coub"},
    {"name": "Glassey-ARVFZ-TRCKRTRT_coub"},
    {"name": "Sagath-З.Л.О.coub",},
    {"name": "Tincup-Lost_coub"},
    {"name": "twenty_one_pilots-Stressed_Out_coub"},
]




/* установка начальных параметров плеера */
var NUMBER_TRACK = 0;

/* трек */
var AUDIO = document.getElementsByTagName('audio')[0];
AUDIO.src = `AUDIO/${TRACKS[NUMBER_TRACK].name}.mp3`;

/* картинка */
var IMG = document.getElementById('IMG');
IMG.style.backgroundImage = `url('IMG/${TRACKS[NUMBER_TRACK].name}.jpg')`;

// название
var NAME = document.getElementById('NAME');
NAME.innerHTML = TRACKS[NUMBER_TRACK].name;




/* следующий трек */
NEXT.onclick = function() {
    NUMBER_TRACK++;
    if (NUMBER_TRACK == TRACKS.length){ NUMBER_TRACK=0 }; // костыль переполнения
    if (AUDIO.paused || AUDIO.ended){
        a12();
        AUDIO.pause();
    } else {
        a12();
        AUDIO.play();
    }
}
function a12(){
    // трек
    AUDIO.src = `AUDIO/${TRACKS[NUMBER_TRACK].name}.mp3`;
    // картинка
    IMG.style.backgroundImage = `url('IMG/${TRACKS[NUMBER_TRACK].name}.jpg')`;
    // название
    NAME.innerHTML = TRACKS[NUMBER_TRACK].name; 
}
/* следующий трек */
BACK.onclick = function() {
    NUMBER_TRACK--;
    if (NUMBER_TRACK == -1){ NUMBER_TRACK=TRACKS.length-1}; // костыль переполнения
    if (AUDIO.paused || AUDIO.ended){
        a12();
        AUDIO.pause();
    } else {
        a12();
        AUDIO.play();
    }
}



/* плай | пауза */
var n = false;
PLAY.onclick = function() {
    if ( n==false ){
        BUTTON_PLAY_SPAN.innerHTML = 'pause';
        AUDIO.play();
        n = true;
    } else {
        BUTTON_PLAY_SPAN.innerHTML = 'play_arrow';
        AUDIO.pause();
        n = false;
    }
};


/* громкость */

