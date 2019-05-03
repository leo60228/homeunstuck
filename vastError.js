//VAST ERROR QUIRK SETTINGS
//INDIVIDUAL TROLLS
var murrit = {
    sentenceCase: 'varies',
    shouts: true,
    firstWordCapitalized: false,
    prefix: /^\>\(\[/,
    suffix: /\]$/,
    separator: ' ',
    substitions: [
        { original: /#/g, replaceWith: 'h'}
    ]
};

var laivan = {
    sentenceCase: 'varies',
    shouts: true,
    firstWordCapitalized: true,
    prefix: null,
    suffix: /\-$/,
    separator: ' ',
    substitions: [
        { original: /\-[^?!]/g, replaceWith: '.'},
        { original: /\-[?]/g, replaceWith: '?'},
        { original: /\-[!]/g, replaceWith: '!'}

    ]
};

//MAP OF PESTERLOGIDS TO TROLLS
var vastErrorQuirks = {
    "UK": murrit,
    "BOOBDRONE": murrit,
    "MURRIT": murrit,
    "WA": laivan,
    "BLUE GUY": laivan
};

