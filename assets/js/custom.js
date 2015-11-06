$(document).ready(function(){

  var text = $(".swap-text");
  var textIndex = -1;

  function swapText() {
    ++textIndex;
    text.eq(textIndex % text.length)
      .fadeIn(1400)
      .delay(1600)
      .fadeOut(900, swapText);
  }

  swapText();

});
