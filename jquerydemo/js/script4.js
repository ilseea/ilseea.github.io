// EVENTS
// button event ********************
$(document).ready(function () {
    // $('p.para1').css('color', 'red');
    $('p.para1').css({
        color: 'red',
        background: '#ccc'
    });

    // $('p.para2').addClass('myClass');
    // $('p.para2').removeClass('myClass');
    $('#btn1').click(function () {
        $('p.para2').toggleClass('myClass');

    });

});