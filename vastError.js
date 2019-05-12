//VAST ERROR QUIRK SETTINGS
//INDIVIDUAL TROLLS
var murrit = {
    sentenceCase: 'varies',
    capitalizeSentences: false,
    prefix: /^\>\(\[/,
    suffix: /\]$/,
    separator: {
        replace: false,
        original: ' ',
        replaceWith: null
    },
    substitions: [
        { original: /\#/g, replaceWith: 'h', isCaseSensitive: true }
    ],
    addPeriods: false
};

var laivan = {
    sentenceCase: 'varies',
    capitalizeSentences: true,
    prefix: null,
    suffix: /\-$/,
    separator: {
        replace: false,
        original: ' ',
        replaceWith: null
    },
    substitions: [
        { original: /\-(?=[\!\?\,\;\.\!])/g, replaceWith: '', isCaseSensitive: false },
        { original: /\-[\s]{1,}/g, replaceWith: '. ', isCaseSensitive: false }
    ],
    addPeriods: true
};

var arcjec = {
    sentenceCase: 'varies',
    capitalizeSentences: true,
    prefix: /^XDXD/,
    suffix: /XDXD$/,
    separator: {
        replace: false,
        original: ' ',
        replaceWith: null
    },
    substitions: [],
    addPeriods: true
};

var tazsia = {
    sentenceCase: 'varies',
    capitalizeSentences: false,
    prefix: /^\~/,
    suffix: /\~$/,
    separator: {
        replace: false,
        original: ' ',
        replaceWith: null
    },
    substitions: [
        { original: /\+/g, replaceWith: 't', isCaseSensitive: true }
    ],
    addPeriods: true
};

var albion = {
    sentenceCase: 'varies',
    capitalizeSentences: false,
    prefix: /^\*/,
    suffix: /\*$/,
    separator: {
        replace: true,
        original: '*', 
        replaceWith: ' '
    },
    substitions: [
    ],
    addPeriods: false
};

var ellsee = {
    sentenceCase: 'varies',
    capitalizeSentences: true,
    prefix: null,
    suffix: null,
    separator: {
        replace: false,
        original: ' ',
        replaceWith: null
    },
    substitions: [
        { original: /\Σ/g, replaceWith: 'e', isCaseSensitive: true },
        { original: /\¡/g, replaceWith: '!', isCaseSensitive: false },
        { original: /\¿/g, replaceWith: '?', isCaseSensitive: false }
    ],
    addPeriods: false
};

var occeus = {
    sentenceCase: 'varies',
    capitalizeSentences: false,
    prefix: null,
    suffix: null,
    separator: {
        replace: false,
        original: ' ',
        replaceWith: null
    },
    substitions: [
        { original: /\.o\./g, replaceWith: 'o', isCaseSensitive: true },
        { original: /\.oo\./g, replaceWith: 'oo', isCaseSensitive: true },
        { original: /(eye|Eye)/g, replaceWith: 'I', isCaseSensitive: false }
    ],
    addPeriods: false
};

var dismas = {
    sentenceCase: 'varies',
    capitalizeSentences: true,
    prefix: null,
    suffix: /\/\/\/$/,
    separator: {
        replace: false,
        original: ' ',
        replaceWith: null
    },
    substitions: [
        { original: /\\\//g, replaceWith: 'v', isCaseSensitive: true },
        { original: /\/\\/g, replaceWith: 'a', isCaseSensitive: true }
    ],
    addPeriods: false
};

var sovara = {
    sentenceCase: 'lowercase',
    capitalizeSentences: false,
    prefix: /^\(/,
    suffix: /\)$/,
    separator: {
        replace: false,
        original: ' ',
        replaceWith: null
    },
    substitions: [],
    addPeriods: false
};

var dismas = {
    sentenceCase: 'varies',
    capitalizeSentences: true,
    prefix: null,
    suffix: /\/{3}$/,
    separator: {
        replace: false,
        original: ' ',
        replaceWith: null
    },
    substitions: [
        { original: /\\\//g, replaceWith: 'v', isCaseSensitive: true },
        { original: /\/\\/g, replaceWith: 'a', isCaseSensitive: true }
    ],
    addPeriods: true
};

//MAP OF PESTERLOGIDS TO TROLLS
var vastErrorQuirks = {
    "UK": murrit,
    "BOOBDRONE": murrit,
    "MURRIT": murrit,
    "WA": laivan,
    "BLUE GUY": laivan,
    "LAIVAN": laivan,
    "AH": arcjec,
    "ARCJEC": arcjec,
    "KIDJEC": arcjec,
    "PO": tazsia,
    "TAZ": tazsia,
    "TAZSIA": tazsia,
    "DQ": albion,
    "ALBION": albion,
    "EO": ellsee,
    "ELLSEE": ellsee,
    "ME": occeus,
    "OCCEUS": occeus,
    "DISMAS": dismas,
    "GD": dismas,
    "SA": sovara,
    "SOVARA": sovara
};

