
var start = 0;
var nb = 6;
var end = start + nb;
var length = $('.img-list img').length;
var list = $('.img-list img');

list.hide().filter(':lt('+(end)+')').show();


$('.prev, .next').click(function(e){
   e.preventDefault();

   if( $(this).hasClass('prev') ){
       start -= nb;
   } else {
       start += nb;
   }

   if( start < 0 || start >= length ) start = 0;
   end = start + nb;       

   if( start == 0 ) list.hide().filter(':lt('+(end)+')').show();
   else list.hide().filter(':lt('+(end)+'):gt('+(start-1)+')').show();
});



let colorDots =
    [ 
    "white",
    "purple",
    "yellow", 
    "green", 
    "skyblue", 
    "lightseagreen", 
    "peru", 
    "gold",
    "red",
    "teal"
    ]
