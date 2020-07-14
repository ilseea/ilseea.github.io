// EVENTS
// button event ********************
// $('#btn1').click(function () {
//     alert('Button Clicked!');
// });



// hide and show ********************
$('#btn1').on('click', function () {
    $('.hero').hide();
    $('.hero1').show();
});

$('#btn2').on('click', function () {
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