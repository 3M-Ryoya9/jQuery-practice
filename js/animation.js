$(function () {
  $("#fadeOut").on("click", function() {
    $(".box").fadeOut(400, function(){
      alert("fadeOut完了");
    });
  });

  $("#fadeIn").on("click", function() {
    $(".box").fadeIn();
  });

  /*$("#fadeToggle").on("click", function() {
    $(".box").fadeToggle();
  });*/
});