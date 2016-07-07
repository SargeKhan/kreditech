function addTagWithStartToEndline(text, pattern, pLength, startTag, endTag){
  var endlinePattern = /(\n)/;
  while(text.match(pattern)){
    var startingTagIndex = text.match(pattern).index;
    var beforeStartingTag = text.substring(0, startingTagIndex);
    var afterStartingTag = startTag + text.substring(startingTagIndex+pLength) ;
    var endingTagIndex = afterStartingTag.match(endlinePattern);
    var endingTagIndex = endingTagIndex ? endingTagIndex.index : afterStartingTag.length
    var beforeEndingTag = afterStartingTag.substring(0, endingTagIndex);
    var afterEndingTag = endTag + afterStartingTag.substring(endingTagIndex);
    var text = beforeStartingTag + beforeEndingTag + afterEndingTag;
  }
  return text;
}
function addTagWithStartToEnd(text, pattern, pLength, startTag, endTag){
  var processed="";
  var toProcessText=text;
  while(toProcessText.match(pattern)){
    var matchedPattern = toProcessText.match(pattern);
    var indexOfMatch = matchedPattern.index;
    var matchedString = matchedPattern[1];
    var toReplaceString = startTag + matchedString + endTag;
    var processed = processed + toProcessText.substring(0, indexOfMatch) + toReplaceString;

    toProcessText= toProcessText.substring(indexOfMatch+ matchedString.length + pLength*2);
  }
  return processed+toProcessText;
}

function addLinkTag(text){
  var processed="";
  var toProcessText=text;
  var pattern = /\[(.+)\]\((.+)\)/
  while(toProcessText.match(pattern)){
    var matchedPattern = toProcessText.match(pattern);
    var indexOfMatch = matchedPattern.index;
    var matchedString = matchedPattern[0];
    var linkText = matchedPattern[1];
    var link = matchedPattern[2];
    var toReplaceString = '<a href="'+link+'">'+linkText+'</a>';
    var processed = processed + toProcessText.substring(0, indexOfMatch) + toReplaceString;
    toProcessText=toProcessText.substring(indexOfMatch+matchedString.length);
  };
  return processed+toProcessText;
}

module.exports = {
  addTagWithStartToEnd: addTagWithStartToEnd,
  addTagWithStartToEndline: addTagWithStartToEndline,
  addLinkTag: addLinkTag
}
