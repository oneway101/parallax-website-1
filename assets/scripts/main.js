$("a[href='#hero1']").click(function() {
  $('html, body').animate({scrollTop: $('#hero1').offset().top}, 'slow');
  return false;
});
$("a[href='#hero2']").click(function() {
  $('html, body').animate({scrollTop: $('#hero2').offset().top}, 'slow');
  return false;
});
$("a[href='#hero3']").click(function() {
  $('html, body').animate({scrollTop: $('#hero3').offset().top}, 'slow');
  return false;
});
$("a[href='#hero4']").click(function() {
  $('html, body').animate({scrollTop: $('#hero4').offset().top}, 'slow');
  return false;
});

$(".symbol img").mouseenter(function() {
  console.log("mouseenter");
  $(this).css({"transform":"scale(1.1,1.1)"});
});
$(".symbol img").mouseleave(function() {
  console.log("mouseleave");
  $(this).css({"transform":"scale(1,1)"});
});