
var markdownText = require("../lib/index.js");

module.exports = function(db){
  var markdown = require("../db/markdown.js")(db);
  return {
    addMarkdown: function(request, reply){
      var text = request.payload.text;
      text = convertToHtml(text);
      if(text){
        markdown.addMarkdown(text, function(err, result){
          if(err){
            reply({
              err: true,
              error: "Server Error"
            }).code(500);
          }else {
            reply({
              err: false,
              result: result.insertedId
            }).code(201);
          }
        })
      }else{
        reply({
          err: true,
          error: "Invalid Markdown"
        }).code(400);

      }
    },
    getMarkdown: function(request, reply){
      var id = encodeURIComponent(request.params.id)
      markdown.getMarkdown(id, function(err, result){
        if(err){
          reply({
            err: true,
            error: "Server Error"
          }).code(500);
        }else{
          if(result.length !=0){
            reply({
              err: false,
              result: result[0]
            });
          } else {
            reply({
              err: true,
              error: "Object not found"
            }).code(404);

          }
        }
      });
    }

  }
}

function convertToHtml(text){
  try{
    text = markdownText.addHeading3Markdown(text);
    text = markdownText.addHeading2Markdown(text);
    text = markdownText.addHeading1Markdown(text);
    text = markdownText.strongTextMarkdown(text);
    text = markdownText.emphasizeTextMarkdown(text);
    text = markdownText.addLinkTag(text);
  }catch(e){
    return null;
  }
  return text;

}
