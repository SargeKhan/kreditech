var Joi = require("joi");

module.exports = (server, db) => {
  var controller = require("../controller")(db);
  server.route({
    method: 'POST',
    path:'/save', 
    handler: controller.addMarkdown,
    config: {
      validate: {
        payload: {
          text: Joi.string()        }
      }
    }
  });
  server.route({
    method: 'GET',
    path:'/get/{id}', 
    handler:  controller.getMarkdown,
    config: {
      validate: {
        params: {
          id: Joi.string().alphanum().min(24).max(24)
        }
      }
    }
  });
}
