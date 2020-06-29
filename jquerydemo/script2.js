$(document).ready(function () {
    $("#hidden").hover(function () {
            $(this).css("color", "black");
        },
        function () {
            $(this).hide()
        });
    $("button").click(function () {
        alert("I'm alerting you");
    });
});

// selectors tutorial
// $('h1').hide();
// id selector
// $('h1#heading1').hide();
// class selectors
// $('h1.heading2').hide();
// $('.heading2').hide();
// $('p span').css('color', 'red');
// take out p to see all "span"


$('ul#list li:first').css('color', 'blue');
$('ul#list li:last').css('color', 'green');
$('ul#list li:even').css('background-color', 'yellow');
$('ul#list li:odd').css('background-color', '#cccccc');
$('ul#list li:nth-child(3n)').css('list-style', 'none');

// $(':button').hide();
$(':text').hide();

$('[href]').css('color', 'magenta');
$('a[href="http://yahoo.com"]').css('color', 'green');
// $('*').hide();

//types of selectors you can use:
//  elements, ids, classes, nest selectors, sudo-selctors