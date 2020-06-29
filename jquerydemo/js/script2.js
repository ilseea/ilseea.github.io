// EVENTS
// button event ********************
// $('#btn1').click(function () {
//     alert('Button Clicked!');
// });



// hide and show ********************
// $('#btn1').on('click', function () {
//     $('.para1').hide();
// });

// $('#btn2').on('click', function () {
//     $('.para1').show();
// });



// toggle on and off event********************
// $('#btn1').on('click', function () {
//     $('.para1').toggle();
// });


// double click event ********************
// $('#btn1').dblclick(function () {
//     $('.para1').toggle();
// });

// hover event ********************
// $('#btn1').hover(function () {
//     $('.para1').toggle();
// });

// hover isn't an actual event= shorthand ********************
// $('#btn1').on('hover', function () {
//     $('.para1').toggle();
// });

// hover= shorthand for mouseenter/leave********************
// $('#btn1').on('mouseenter', function () {
//     $('.para1').toggle();
// });
// $('#btn1').on('mouseleave', function () {
//     $('.para1').toggle();
// });

// mousemove********************
// $('#btn1').on('mousemove', function () {
//     $('.para1').toggle();
// });

// mousedown/up********************
// $('#btn1').on('mousedown', function () {
//     $('.para1').toggle();
// });

// $('#btn1').on('mouseup', function () {
//     $('.para1').toggle();
// });

// hide and show ********************
$('#btn1').click(function (e) {
    // console.log(e);
    // alert(e.currentTarget.id);
    // alert(e.currentTarget.innerHTML);
    // alert(e.currentTarget.outerHTML);
    // alert(e.currentTarget.className);
});

// mousemove********************
// $('#btn1').on('mousemove', function (e) {
//     console.log('Coords: Y: ' + e.clientY + " X: " + e.clientX);
// });

// document moving********************
// $(document).on('mousemove', function (e) {
//     console.log('Coords: Y: ' + e.clientY + " X: " + e.clientX);
// });

// document moving********************
// $(document).on('mousemove', function (e) {
//     $('#coords').append('Coords: Y: ' + e.clientY + " X: " + e.clientX);
// });

$(document).on('mousemove', function (e) {
    $('#coords').html('Coords: Y: ' + e.clientY + " X: " + e.clientX);
});