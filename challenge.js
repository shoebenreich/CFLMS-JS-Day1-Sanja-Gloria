let words = [
	[ 'Vienna', 'Berlin', 'Graz', 'Prague' ],
	[ 'was', 'is', 'and', 'be' ],
	[ 'the', 'also', 'a', 'up' ],
	[ 'bad', 'horrible', 'amazing', 'nice' ],
	[ 'town', 'village', 'country', 'continent', 'city' ]
];

document.write(words[0][0] + ' ' + words[1][1] + ' ' + words[2][2] + ' ' + words[3][3] + ' ' + words[4][4] + '.');

let sentence =
	'Properties,$a$set$of$immutable$values,$are$passed$to$a$component\'s$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism\'s$promise$is$expressed$as$"properties $flow$down;$actions$flow$up".';

let bettersentence = sentence.replace(/\$/g, ' ');
document.write(bettersentence);
