$(function(){
  /*$("button").on("click",function(){
    console.log("ボタンがクリックされました。")
});*/

  /*$("div").on({
    "click": () => {
      // 背景を赤
      $("div").css("background-color","red");
      // テキストを「click」
      $("div").text("click");
    },
    "dblclick": () => {
      $("div").css("background-color","green");
      $("div").text("dbclick");
    },
    "mouseenter": () => {
      $("div").css("background-color","blue");
      $("div").text("mouseenter");
    },
    "mouseout": () => {
      $("div").css("background-color","gray");
      $("div").text("mouseout");
    },
  });*/
  // document は 今開いているHTMLページ全体のこと
  // ブラウザが読み込んでる「Webページそのもの（DOM全体）」の入り口
  $(document).on("click keydown", (e) => {
    if (e.type === "click"){
      $("div").text("クリックされました！");
    }
    if (e.type === "keydown"){
      $("div").text("キーが押されました！")
    }
  });
});