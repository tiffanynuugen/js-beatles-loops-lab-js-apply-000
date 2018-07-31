function theBeatlesPlay(musicians, instruments) {
    var allMusicians = [];
    for (var i=0; i < musicians.length; i++) {
        allMusicians.push(musicians[i] + " plays " + instruments[i]);
    }
    return allMusicians;
}

function johnLennonFacts(facts) {
    var i = 0;
    while (i < facts.length) {
        allFacts.push(facts[i] + " !!! ");
        i++;
    }
    return allFacts;
