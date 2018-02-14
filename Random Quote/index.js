function tweet() {
  window.open('https://twitter.com/intent/tweet?hashtags= freecodecamp&text=' + $("#quoteText").text() + '' + $("#quoteAuthor").text());
}
$(document).ready(function () {

  $("#quote-button").on("click", function () {
    $.getJSON("http://quotes.stormconsultancy.co.uk/quotes/random.json", function (result) {
      var randomQuote = result;
      $("#text").empty().html(randomQuote.quote);
      $("#author").empty().html(randomQuote.author);
    });
  });

});
