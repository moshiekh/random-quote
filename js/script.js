// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
var html;
//Create data for quotes
var quotes = [
	{quote: "Public opinion is no more than this: what people think that other people think", source: "Alfred Austin", citation:"Quote of the Day", year: 2016}, 
	{quote:"Love is not altogether a delirium, yet it has many points in common therewith", source:"Thomas Carlyle", citation:"Love Quote of the Day", year: 2016},
	{quote:"Once an object has been incorporated in a picture it accepts a new destiny", source:"Georges Braque", citation:"Nature Quote of the Day", year: 2016},
	{quote:"Test qoutes", source:"Mohammed Shiekh", citation:"Test my skills", year: 1981},
	{quote: "You can do anything but not everything", source: "David Allen", year: 2009}
];


// Start getting random number to generate the quotes randomly
function getRandomQuote(){
	// var i is to store the random number that between 0 to quotes.length
	var i = Math.floor((Math.random() * (quotes.length)));
	// Now it is the time to get the quote based on the generated random number
	var q = quotes[i];

	return q;
}


// Create function printQuote() to write the selected quote in <div> with id ="quote-box"
function printQuote() {
	var x = getRandomQuote();
	html = '<p class="quote">' + x.quote + '</p>';
	html += '<p class="source">' + x.source + '<span class="citation">' + x.citation + '</span><span class="year">' + x.year + '</span></p>';
	document.getElementById('quote-box').innerHTML = html;
}
// add event listner to the button to call the function to generate the quotes randomly
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

