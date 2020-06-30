// selectors tutorial

// hide ********************
// $('h1').hide();

// id selectors ********************
// $('h1#heading1').hide();

// class selectors ********************
// $('h1.heading2').hide();
// $('.heading2').hide();

// change color, take out 'p' to see all span ********************
// $('span').css('color', 'red');


// select first or last items ********************
$('ul#list li:first').css('color', 'blue');
$('ul#list li:last').css('color', 'green');

// select even or odd items ********************
// $('ul#list li:even').css('background-color', 'yellow');
// $('ul#list li:odd').css('background-color', '#cccccc');

// select specific items ********************
// $('ul#list li:nth-child(3n)').css('list-style', 'none');

// select other element to hide ********************
// $(':button').hide();
// $(':text').hide();

// select item to style ********************
// $('[href]').css('color', 'magenta');
// $('a[href="http://yahoo.com"]').css('color', 'green');

// select all ********************
// $('*').hide();

//types of selectors you can use:
//  elements, ids, classes, nest selectors, sudo-selctors


































// $(document).ready(function () {
//     $("#hidden").hover(function () {
//             $(this).css("color", "black");
//         },
//         function () {
//             $(this).hide()
//         });
//     $("button").click(function () {
//         alert("I'm alerting you");
//     });
// });