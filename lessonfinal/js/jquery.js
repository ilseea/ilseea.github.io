// EVENTS
// button event ********************
// $('#btn1').click(function () {
//     alert('Button Clicked!');
// });



// hide and show ********************
$('.signature').on('click', function () {
    $('.hero').hide();
    $('.hero1').show();
});

$('.signature1').on('click', function () {
    $('.hero').hide();
    $('.hero1').show();
});



$('.signature2').on('click', function () {
    $('.hero').show();
    $('.hero1').hide();
});

$('.signature3').on('click', function () {
    $('.hero').show();
    $('.hero1').hide();
});


// TRY THIS IMAGE SWAP
// $(function(){
//     $(".img-swap").live('click', function() {
//       if ($(this).attr("class") == "img-swap") {
//         this.src = this.src.replace("_off","_on");
//       } else {
//         this.src = this.src.replace("_on","_off");
//       }
//       $(this).toggleClass("on");
//     });
//   });

// toggle on and off event********************
// $('#btn1').on('click', function () {
//     $('.hero').toggle();
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
$('.signature').on('mouseenter', function () {
    $(this).css('background', 'pink');
});
$('.signature').on('mouseleave', function () {
    $(this).css('background', '#f7B733');
});

// sig1
$('.signature1').on('mouseenter', function () {
    $(this).css('background', 'pink');
});
$('.signature1').on('mouseleave', function () {
    $(this).css('background', '#f7B733');
});

// sig2
$('.signature2').on('mouseenter', function () {
    $(this).css('box-shadow', '10px 10px 30px', 'pink');
});
$('.signature2').on('mouseleave', function () {
    $(this).css('box-shadow', 'none');
});

// sig3
$('.signature3').on('mouseenter', function () {
    $(this).css('box-shadow', '10px 10px 30px', 'pink');
});
$('.signature3').on('mouseleave', function () {
    $(this).css('box-shadow', 'none');
});

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
// $('#btn1').click(function (e) {
//     console.log(e);
//     alert(e.currentTarget.id);
//     alert(e.currentTarget.innerHTML);
//     alert(e.currentTarget.outerHTML);
//     alert(e.currentTarget.className);
// });

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

// $(document).on('mousemove', function (e) {
//     $('#coords').html('Coords: Y: ' + e.clientY + " X: " + e.clientX);
// });