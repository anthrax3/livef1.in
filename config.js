/**

  Configuration file.
  
  Follows the twelve-factor app guidelines:
  
  http://www.12factor.net/config

  Define config variables by setting environment variables, which by
  default are prefixed with GND, such as GND_APP_PORT.
  
  Some default values are provided for convenience.
*/

var env = process.env
  , prefix = 'GND'; 

var config = {
  APP_PORT: _('APP_PORT', 8080),
  
  REDIS_PORT: _('REDIS_PORT', 6379),
  REDIS_ADDR: _('REDIS_ADDR', '127.0.0.1'),
  
  MONGODB_URI: _('MONGODB_URI', 'mongodb://localhost/livef1'),
  
  COOKIE: _('COOKIE', 'gnd-cookie'),
  MODE: _('MODE', 'development'),
  
  LIVEF1_USER: _('LIVEF1_USER'),
  LIVEF1_PASSWD: _('LIVEF1_PASSWD'),
}

config.DEVELOPMENT = _('DEVELOPMENT', config.MODE === 'development');

function _(variable, defaultValue){
  return env[prefix+'_'+variable] || defaultValue;
}

module.exports = config;
