
var MAIN_URL ="http://api.forismatic.com/api/1.0/?method=getQuote&key=45865&format=jsonp&lang=en&jsonp=?";
//var test = "http://api.icndb.com/jokes/random?firstName=John&amp;lastName=Doe";

var tweetURL = 'https://twitter.com/intent/tweet?text=';

function getRandomColor() {
    var letters = "0123456789ABCDEF".split("");
    var color = "#";
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    if(color === "#000000" || color === "#FFFFFF") {
      color = "#52B3A5";
    }
    return color;
}

function loadNewQuote() {
  $.getJSON(MAIN_URL, function(a) {
    $("#quote").text(a.quoteText)
    $("#author").html(a.quoteAuthor)
    var tQ = tweetURL+a.quoteText+' - '+a.quoteAuthor+' @myeramareddy';
    $("#tweetMe").prop('href', tQ);
  });
}

$(document).ready(function() {
  loadNewQuote();
});

$("#quoteMe").click(function () {
  $("body").stop().animate({backgroundColor: getRandomColor()}, 750);
  //$("body").css("background-color",getRandomColor());
  loadNewQuote();
});