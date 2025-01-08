// JavaScript

console.log('Hello world!');

// 定数の定義
const loading = document.getElementById('loading');

// cssクラスを追加する関数
function animation(){
  loading.classList.add('loaded');
}

//画面が読み込まれたら animation を呼び出す
//window.addEventListener('load', animation);

// 指定秒後に動作させる
window.setTimeout( animation, 3000 );


//スクロールすると上部に固定させるための設定を関数でまとめる
function FixedAnime() {
  var headerH = $('#header').outerHeight(true);
  var scroll = $(window).scrollTop();
  if (scroll >= headerH){//headerの高さ以上になったら
      $('#header').addClass('fixed');//fixedというクラス名を付与
    }else{//それ以外は
      $('#header').removeClass('fixed');//fixedというクラス名を除去
    }
}

//ナビゲーションをクリックした際のスムーススクロール
$('#g-navi a').click(function () {
  var elmHash = $(this).attr('href'); //hrefの内容を取得
  var pos = Math.round($(elmHash).offset().top-120);  //headerの高さを引く
  $('body,html').animate({scrollTop: pos}, 500);//取得した位置にスクロール※数値が大きいほどゆっくりスクロール
  return false;//リンクの無効化
});


// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  FixedAnime();/* スクロール途中からヘッダーを出現させる関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  FixedAnime();/* スクロール途中からヘッダーを出現させる関数を呼ぶ*/
});

//スクロールした際の動きを関数でまとめる
function PageTopCheck(){
  var winScrollTop = $(this).scrollTop();
  var secondTop =  $("#area-2").offset().top - 150; //#area-2の上から150pxの位置まで来たら
  if(winScrollTop >= secondTop){
  $('.js-scroll').removeClass('scroll-view');//.js-scrollからscroll-viewというクラス名を除去
  $('.js-pagetop').addClass('scroll-view');//.js-pagetopにscroll-viewというクラス名を付与
} else {//元に戻ったら
  $('.js-scroll').addClass('scroll-view');//.js-scrollからscroll-viewというクラス名を付与
  $('.js-pagetop').removeClass('scroll-view');//.js-pagetopからscroll-viewというクラス名を除去
}

}

//クリックした際の動き
$('.scroll-top a').click(function () {
  var elmHash = $(this).attr('href'); //hrefの内容を取得
  if (elmHash == "#area-2") {//もし、リンク先のhref の後が#area-2の場合
    var pos = $(elmHash).offset().top;
    $('body,html').animate({scrollTop: pos}, pos); //#area-2にスクロール
  }else{
    $('body,html').animate({scrollTop: 0}, 500); //それ以外はトップへスクロール。数字が大きくなるほどゆっくりスクロール
  }
    return false;//リンク自体の無効化
  });
  
  // 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function () {
  PageTopCheck();/* スクロールした際の動きの関数を呼ぶ*/
  });
  
  // ページが読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function () {
  PageTopCheck();/* スクロールした際の動きの関数を呼ぶ*/
  });