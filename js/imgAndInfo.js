
$(function () {
  var stock = 66;
  $(".productNumberSetting").keyup(function () {
    var num = $(".productNumberSetting").val();
    num = parseInt(num);
    if (isNaN(num)) {
      num = 1;
    }
    if (num <= 0) {
      num = 1;
    }
    if (num > stock) {
      num = stock;
      $(".productNumberSetting").val(num);
    }
  });

  $(".increaseNumber").click(function () {
    var num = $(".productNumberSetting").val();
    num++;
    if (num > stock)
      num = stock;
    $(".productNumberSetting").val(num);
  });
  $(".decreaseNumber").click(function () {
    var num = $(".productNumberSetting").val();
    --num;
    if (num <= 0)
      num = 1;
    $(".productNumberSetting").val(num);
  });
  //监听小图片的mouseenter事件，获取小图片的src属性,把大图片的src修改为该图片
  $("img.smallImage").mouseenter(function () {
    var bigImageURL = $(this).attr("src");
    $("img#bigImg").attr("src", bigImageURL);
  });

  $("img#bigImg").load(
    function () {
      $("img.smallImage").each(function () {
        var bigImageURL = $(this).attr("src");
        img = new Image();
        img.src = bigImageURL;

        img.onload = function () {
          console.log(bigImageURL);
          $("div.img4load").append($(img));
        };
      });
    }
  );

});