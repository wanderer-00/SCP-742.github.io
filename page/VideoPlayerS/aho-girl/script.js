// ???????????? ?????
var player = document.getElementById('player');
var line13 = document.getElementById('line').style.width;
alert(line13);

function s1() {player.src = urls[0]};
function s2() {player.src = urls[1]};
function s3() {player.src = urls[2]};
function s4() {player.src = urls[3]};
function s5() {player.src = urls[4]};
function s6() {player.src = urls[5]};
function s7() {player.src = urls[6]};
function s8() {player.src = urls[7]};
function s9() {player.src = urls[8]};
function s10() {player.src = urls[9]};
function s11() {player.src = urls[10]};
function s12() {player.src = urls[11]};
function s13() {player.src = urls[12]};

var left = 0;
var line = document.getElementById('line');

function left1() {
    left = left + 260;
    if (left > 0) {
        left = 0;
    }
    line.style.left = left + 'px';
};

function right1(){
    left = left - 260;
    if (left < -260) {
        left = -260;
        }
    line.style.left = left + 'px';
};