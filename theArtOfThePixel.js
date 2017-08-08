let inkColor = 'black';

function makeBlankCanvas() {
    for(let i = 1; i<= 50; i++) {
        $('.canvas').append('<div class=\'row\'></div>');
        for (let i2 = 1; i2<=50; i2++) {
            $('.row').last().append('<div class=\'cell\'></div>');
        }
    }
}

let colors = ['white', 'black', 'green', 'yellow', 'blue', 'purple', 'orange', 'gray']

function makePallet() {
    for (color of colors){
        $('.ink_options').append(`<div class=\'ink_option ${color}\'></div>`)
    }
}

makeBlankCanvas();
makePallet();

$(".cell").click(function(){
    $(this).css('background-color', `${inkColor}`);
    $(this).css('border', `1px solid ${inkColor}`);
});

$('.ink_option').click(function(){
    inkColor = $(this).css('background-color');
});