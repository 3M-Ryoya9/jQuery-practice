$(function() {
  /* const title = $("#title").text();
  const list  = $(".message").text();
  console.log(title);
  console.log(list);*/
  
  //.text() は jQueryが最初から持ってるメソッドで、
  //テキストだけ取り出す・書き換える 
  const text = $('li[class^="sample"]').text();
  console.log(text)
})