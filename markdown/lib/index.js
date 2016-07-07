var markdown = require('./markdown.js');

function addHeading1Markdown(text){
  var startTag = "<h1>";
  var endTag = "</h1>";
  var pattern = /#/
  var pLength = 1;
  return markdown.addTagWithStartToEndline(text, pattern, pLength , startTag, endTag);
}
function addHeading2Markdown(text){
  var startTag = "<h2>";
  var endTag = "</h2>";
  var pattern = /##/
  var pLength = 2;
  return markdown.addTagWithStartToEndline(text, pattern, pLength , startTag, endTag);
}
function addHeading3Markdown(text){
  var startTag = "<h3>";
  var endTag = "</h3>";
  var pattern = /###/
  var pLength = 3;
  return markdown.addTagWithStartToEndline(text, pattern, pLength , startTag, endTag);
}

function emphasizeTextMarkdown(text){
  var startTag = "<em>";
  var endTag = "</em>";
  var pattern = /[\*]([\s\S]*?)\*/;
  var pLength = 1;
  return markdown.addTagWithStartToEnd(text, pattern, pLength , startTag, endTag);
}

function strongTextMarkdown(text){
  var startTag = "<strong>";
  var endTag = "</strong>";
  var pattern = /\*\*([\s\S]*?)\*\*/;
  var pLength = 2;
  return markdown.addTagWithStartToEnd(text, pattern, pLength , startTag, endTag);
}

module.exports = {
  addHeading3Markdown: addHeading3Markdown,
  addHeading2Markdown: addHeading2Markdown,
  addHeading1Markdown: addHeading1Markdown,
  strongTextMarkdown: strongTextMarkdown,
  emphasizeTextMarkdown: emphasizeTextMarkdown,
  addLinkTag: markdown.addLinkTag
}
