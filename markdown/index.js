exports.register = function(server, options, next){
  require('./routes')( server, options.db );
  next();
}

exports.register.attributes = {
  name:'markdown',
  version:'1.0.0'
}
