( function ( $ ) {
	'use strict';

	var paJhelum = {
		id: 'pa-jhelum',
		name: 'Punjabi Jhelum',
		description: 'Jhelum keyboard for Punjabi script',
		date: '2013-11-14',
		author: 'Parag Nemade',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			["\\~", "~"],
			["\\`", "`"],
			["\\!", "!"],
			["1", "1"],
			["\\@", "@"],
			["2", "2"],
			["\\#", "#"],
			["3", "3"],
			["\\$", "$"],
			["4", "4"],
			["\\%", "%"],
			["5", "5"],
  			["\\^", "ੳ"],
			["6", "6"],
  			["\\&", "ੲ"],
			["7", "7"],
			["8", "8"],
			["\\(", "("],
			["9", "9"],
			["\\)", ")"],
			["0", "0"],
			["\\_", "_"],
			["\\-", "-"],
			["\\+", "+"],
			["\\=", "="],
			["Q", "ਔ"],
			["q", "ੌ"],
			["W", "ਐ"],
			["w", "ੈ"],
			["E", "ਆ"],
			["e", "ਾ"],
			["R", "ਈ"],
			["r", "ੀ"],
			["T", "ਊ"],
			["t", "ੂ"],
			["Y", "ੜ"],
			["y", "ਰ"],
			["U", "ਧ"],
			["u", "ਦ"],
			["I", "ਘ"],
			["i", "ਗ"],
			["O", "ਟ"],
			["o", "ਤ"],
			["P", "ਫ"],
			["p", "ਪ"],
			["\\{", "ਢ"],
			["\\[", "ਡ"],
			["\\}", "ਞ"],
			["\\]", "ਙ"],
			["A", "ਓ"],
			["a", "ੋ"],
			["S", "ਏ"],
			["s", "ੇ"],
			["D", "ਅ"],
			["d", "੍"],
			["F", "ਇ"],
			["f", "ਿ"],
			["G", "ਉ"],
			["g", "ੁ"],
			["H", "ਠ"],
			["h", "ਹ"],
			["J", "ਝ"],
			["j", "ਜ"],
			["K", "ਖ"],
			["k", "ਕ"],
			["L", "ਥ"],
			["l", "ਲ"],
			[":", ":"],
			[";", "ਸ"],
			["\"", "\""],
			["\\'", "'"],
			["\\|", "।"],
			["\\", "\\"],
			["Z", "਼"],
			["z", "ੱ"],
			["X", "ੰ"],
			["x", "ਂ"],
			["C", "ਛ"],
			["c", "ਚ"],
			["V", "ਯ"],
			["v", "ਵ"],
			["B", "ਭ"],
			["b", "ਬ"],
			["N", "ਣ"],
			["n", "ਨ"],
			["M", "ਠ"],
			["m", "ਮ"],
			["\\<", "<"],
			[",", ","],
			["\\>", ">"],
			["\\.", "."],
			["\\?", "?"],
			["/", "/"],
			["\\*", "*"],
 		 ],
		patterns_x: [
			["1", "੧"],
			["2", "੨"],
			["3", "੩"],
			["4", "੪"],
			["5", "੫"],
			["6", "੬"],
			["7", "੭"],	
			["8", "੮"],
			["9", "੯"],
			["0", "੦"],
			["y", "੍ਰ"],
			["i", "ਗ਼"],
			["P", "ਫ਼"],
			["h", "੍ਹ"],
			["j", "ਜ਼"],	
			["K", "ਖ਼"],
			["l", "ਲ਼"],
			[";", "ਸ਼"]]
	};
	$.ime.register( paJhelum );

}( jQuery ) );
