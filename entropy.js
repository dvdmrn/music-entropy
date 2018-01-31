// lyrics to 1612
// var lyrics = "It's a tzimmes But you need to t'set it Sometimes I write a little song So you don't forget it Sometimes I write a little song To remember the lyrics 1612 That's the code to my heart One six, one two Star Aquarion Ford Taurus A strike on the box Ford Focus Roberta Flack, Donnie Hathaway Frank Sinatra 1612 That's the code to my heart One six, one two Star — 1612 That's the code to my heart One six, one two Star Peace of mind Oh, friend of mine 1612 That's the code to my heart I go,One six, one two Star I go,1612 IThat's the code to my heart One six, one two Star Igo,1612 That's the code to my heart I go,One six, one two Star 1612 That's the code to my heart I go,One six, one two..... Star 1612 That's the code to my heart One six, one two Star 1612 That's the code to my heart One six, one two Star 1612 Is the key, the key.... 1612 That's the code to my heart You better never ever forget it.......";
// var lyrics = "1 1 1 1 1 1 1 1 1 1"
// var lyrics = "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 "
// lyrics to gucci gang
var lyrics = "Gucci Gang, ooh, yeah, Lil Pump, yeah, Gucci Gang, ooh Gucci gang, Gucci gang, Gucci gang, Gucci gang Gucci gang, Gucci gang, Gucci gang (Gucci gang!) Spend ten racks on a new chain My bitch love do cocaine, ooh I fuck a bitch, I forgot her name I can't buy a bitch no wedding ring Rather go and buy Balmains Gucci gang, Gucci gang, Gucci gang (Gucci gang!) Gucci gang, Gucci gang, Gucci gang, Gucci gang Gucci gang, Gucci gang, Gucci gang (Gucci gang!) Spend ten racks on a new chain My bitch love do cocaine, ooh I fuck a bitch, I forgot her name, yeah I can't buy no bitch no wedding ring Rather go and buy Balmains, aye Gucci gang, Gucci gang, Gucci gang My lean cost more than your rent, ooh Your mama still live in a tent, yeah Still slanging… "
cleaned = lyrics.toLowerCase();	
cleaned = cleaned.replace(/[.,\/#!\'\"$%\^&\*;:{}=\-_`~()]/g,"")
var words = cleaned.split(" ");

function get_probability (word, words) {
	var wordCount = 0
	for (var i =  words.length - 1; i >= 0; i--) {
		if (words[i] == word) { wordCount++ }
	}
	return wordCount/words.length

}

function shannon_entropy(wordSet, wordArray){
	console.log("wordset: ",wordSet);

	var sum0 = 0;
	var sum1 = 0;

	// todo: double for loops (sigma(...)-sigma(...))

	for (var i = 0 ; i <= wordSet.length - 1; i++) {
		console.log("summing: ",wordSet[i])
		p_i = get_probability(wordSet[i],wordArray)
		bit0 = p_i * Math.log2(p_i);
		sum0 = sum0 + bit0;
	}

	// for (var i = 0 ; i <= wordSet.length - 1; i++) {
	// 	console.log("summing: ",wordSet[i])
	// 	p_i = get_probability(wordSet[i],wordArray)
	// 	bit1 = (1-p_i * Math.log2(1-p_i));
	// 	sum1 = sum1 + bit1;
	// }	
	// sum = -1*(sum0-sum1);
	sum = -1*sum0


	// return sum
	return sum
}

function uniq(a) {
   return Array.from(new Set(a));
}

function metric_entropy(e_val, wordSet) {
	// 0 for non-chaotic
	// 1 for chaotic
	return e_val/words.length
}

function number_of_bits_needed(e_val){
	return Math.ceil(e_val)
}

console.log("wordsP:")
var uniqueWordsArray = uniq(words);
var H = shannon_entropy(uniqueWordsArray,words)
console.log("uniqueWordsArray", uniqueWordsArray)
console.log("shannon_entropy: ", H);
console.log("metric entropy: ", metric_entropy(H,uniqueWordsArray))
console.log("Number of bits needed: ", number_of_bits_needed(H))
