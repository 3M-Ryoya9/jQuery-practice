$(function () {
  $("#check").on("click", function(){
    // JavaScriptでは、文字列の中にクオートを含めたいときは
    // 外側と内側で種類を変えるのが基本！！！
    // $() の中には基本的に「文字列として書いたCSSセレクタ」を入れる
    // [name="username"] は CSSの属性セレクタ
    console.log("名前：" + $('[name="username"]').val());

    console.log("性別：" + $('[name="gender"]:checked').val());

    console.log("血液型：" + $('[name="blood"]').val());

    $('[name="hobby"]:checked').each(function() {
      //$(this)は1つずつの選択された要素を意味する
      console.log("趣味：" + $(this).val());
    });
  });
  // input ←文字を入力した瞬間に反応するイベント
  $('[name="username"]').on("input",function(){
    // this　→今イベントが起きたその要素自身
    // 今入力された値(入力欄の中身)を input という変数に入れる
    let input = $(this).val();

    // 文字があればtrueと判断する。JavaScriptは判定緩い
    if (input) {
      // jQueryからdisabled属性を変更するにはprop()メソッドを使う
      $("#check").prop("disabled", false);
    } else {
      $("#check").prop("disabled",true);
    }
  });

  // change→値が変化したときに発生するイベント
  $('[name="hobby"]').on("change", function() {
    // 「name属性がhobbyで、
    // かつチェックされてる要素をCSSセレクタとして文字列で渡している」
    if ($('[name="hobby"]:checked').length > 3){
      $(this).prop("checked",false);

      alert("3つまでしか選択できません");
    }
  });
});