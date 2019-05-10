//takes in a string and sees if it is a pesterlog that we have configured
//a valid pesterlog begins with an identifer, separated from the remainder of the string by a colon
//Ex: 
//KK: I DON'T KNOW WHAT WE'RE YELLING ABOUT, DAVE.
function fixQuirk(str) {
    str = str.trim(); //make sure to remove any extraneous whitespace
    let colonIndex = str.indexOf(':');
    if (colonIndex === -1) {
        return null;
    }
    let pesterLogID = str.slice(0, colonIndex);
    let pesterLogText = str.slice(colonIndex + 1);

    //TO DO: add in logic that checks which quirk file to load 
    if (!vastErrorQuirks.hasOwnProperty(pesterLogID)) {
        return null;
    }

    let characterQuirk = vastErrorQuirks[pesterLogID];
    return pesterLogID + ": " + parseQuirk(pesterLogText, characterQuirk);
}

function parseQuirk(str, characterQuirk) {
    str = str.trim();
    //remove prefixes and suffixes first for simplicity
    if (characterQuirk.prefix) {
        str = str.replace(characterQuirk.prefix, '');
    }
    if (characterQuirk.suffix) {
        str = str.replace(characterQuirk.suffix, '');
    }

    //fix any other separators
    if (characterQuirk.separator) {
        str = str.replace(characterQuirk.separator, ' ');
    }

    //perform individual replacements, if necessary
    if (characterQuirk.substitions) {
        str = caseSensitiveReplace(str, characterQuirk);
    }

    //finally, check for any overall case situations
    if (characterQuirk.sentenceCase === 'lowercase') {
        str = str.toLowerCase();
    }
    else if (characterQuirk.sentenceCase === 'uppercase') {
        str = str.toUpperCase();
    }

    if (characterQuirk.firstWordCapitalized === true) {
        let allSentences = str.split('.');
        str = allSentences.map(function (sentence) {
            sentence = sentence.trim();
            return sentence.charAt(0).toUpperCase() + sentence.slice(1);
        }).join('. ');
    }

    //and literally at the end of all things...
    str = str.trim();
    if (characterQuirk.addPeriods === true) {
        if (/([^!?,.]$)/.test(str)) {
            str = str + ".";
        }
    }

    return str;
}

//performs a simple replace, ignores case
function simpleReplace(str, characterQuirk) {
    for (let i = 0; i < characterQuirk.substitions.length; i++) {
        let originalPattern = characterQuirk.substitions[i].original;
        let replaceWith = characterQuirk.substitions[i].replaceWith;
        str = str.replace(originalPattern, replaceWith);
    }
    return str;
}

//takes in a string and quirk definition; spits out a str with case-sensitive replacements
function caseSensitiveReplace(str, characterQuirk) {
    //start by doing the replacements we would have done anyway
    str = simpleReplace(str, characterQuirk);
    var allWords = str.split(' ');
    //grab a list of exceptions, based on characters we have already swapped out
    //(ex: if we did a case-insensitive swap from # to 'h', ignore 'h' because its case is not necessarily correct)
    var exceptions = characterQuirk.substitions.map(function (pattern) {
        return pattern.replaceWith;
    });
    
    var caseMap = allWords.map(function (word) {
        if (isAllUpperCase(word, exceptions)) {
            return word.toUpperCase();
        }
        else {
            //note: we don't call toLowerCase bc we want to preserve any  casing already in play
            return word;
        }
    });
    return caseMap.join(' '); //note: replace this with 'separator' in the future!
}

//NOTE: default assumption is that words are not uppercase
function isAllUpperCase(word, exceptions) {
    var upperCaseCount = 0;
    var excludedCount = 0;
    var specialCharacterCount = 0;
    for (let i = 0; i < word.length; i++) {
        let currentLetter = word[i];
        if (!exceptions.includes(currentLetter)) {
            if (isUpperCaseLetter(currentLetter)) {
                upperCaseCount++;
            }
            else if (/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(currentLetter)) {
                specialCharacterCount++;
            }
            //otherwise it's a lowercase character - we don't need to keep track of it, but this is where we would
        }
        else {
            excludedCount++;
        }
    }

    //now we adjust for the things we excluded (special characters and purposefully excluded characters)
    var adjustedWordLength = word.length - specialCharacterCount - excludedCount;

    if (upperCaseCount === adjustedWordLength) {
        return true;
    }
    else {
        return false;
    }
}

//takes in a character and determines if it is an uppercase alphabet letter [A-Z]
//returns false for lowercase alphabet letters, numbers, special characters 
function isUpperCaseLetter(letter) {
    if (letter === letter.toUpperCase()
        && letter !== letter.toLowerCase()) {
        return true;
    } else {
        return false;
    }
}