
var main = function(){

$(".photogal-toggle1").click(function(){
$(".photogal1").toggle();
//modify others display to none as well
});

$(".photogal-toggle2").click(function(){
$(".photogal2").toggle();
});

$(".photogal-toggle3").click(function(){
$(".photogal3").toggle();
});

$(".photogal-toggle4").click(function(){
$(".photogal4").toggle();
});

};








$(document).ready(main)

$('.carousel').carousel({
  interval: 6000
})
