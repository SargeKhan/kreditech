var mongo = require('mongodb');


module.exports = function(db){
  return {
    addMarkdown: function(markdown, callback){
      db.collection('markdown').insertOne({
        markdown: markdown
      }, callback)
    },
    getMarkdown: function(id, callback){
      console.log(id);
      var o_id = new mongo.ObjectID(id);
      db.collection('markdown').find({"_id": o_id}).toArray(callback);
    }
  }
}
