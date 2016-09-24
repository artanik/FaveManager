const vkapi = {};

const API_VERSION = '5.30';
const CALLBACK_BLANK = 'https://oauth.vk.com/blank.html';
const AUTHORIZE_URL = 'https://oauth.vk.com/authorize?client_id={client_id}&scope={scope}&redirect_uri={redirect_uri}&display={display}&v={api_version}&response_type={response_type}';
const GET_TOKEN_URL = 'https://oauth.vk.com/access_token?client_id={client_id}&client_secret={client_secret}&code={code}&redirect_uri={redirect_uri}';
const METHOD_URL = 'https://api.vk.com/method/';

vkapi.appId = 0000000;
vkapi.appKey = '';
vkapi.scope = 'offline,friends,wall';
vkapi.token = null;

/* function _showCaptcha(img, callback) {
  $('.captcha').removeClass('hide');
  $('#captcha-content').html('<img src="'+img+'" alt="" />');
  $('#captcha-send').off('click').on('click', function() {
    callback($('#captcha').val());
  });
}

vkapi.showCaptcha = function(params, callback) {
  var method = _.findWhere(params.request_params, {key: 'method'});
  var sendParams = {};

  _.each(params.request_params, function(param) {
    if(param.key === 'method') {
        return true;
    }
    sendParams[param.key] = param.value;
  });

  _showCaptcha(params.captcha_img, function(key) {
    $('.captcha').addClass('hide');
    sendParams.captcha_sid = params.captcha_sid;
    sendParams.captcha_key = key;

    vkapi.api(method.value, sendParams, callback);
  });
}; */

vkapi.api = function(method, vars, callback) {
  const params = http_build_query(vars);
  const url = _http_build_query(method, params);
  _call(url, callback);
};

vkapi.setToken = function(_token) {
  vkapi.token = _token;
};

vkapi.getAuthUrl = function() {
  return _createUrl(AUTHORIZE_URL);
};

vkapi.getToken = function(code, callback) {
  const url = _createUrl(GET_TOKEN_URL, {code: code});
  _call(url, callback);
};

function _call(url, callback) {
  $.ajax({
    url: url,
    dataType : 'json',
    success: function(response) {
      callback(response);
    }
  });
}

function _http_build_query(method, params){
  return  METHOD_URL + method + '?' + params+'&access_token=' + token+'&v=' + API_VERSION;
}

function _createUrl(url = '', params = {}) {
  const client_id = params.client_id || vkapi.appId;
  const client_secret = params.client_secret || vkapi.appKey;
  const scope = params.scope || vkapi.scope;
  const redirect_uri = params.redirect_uri || CALLBACK_BLANK;
  const api_version = params.api_version || API_VERSION;
  const display = params.display || 'page';
  const response_type = params.response_type || 'code';
  const code = params.code || '';

  url = url.replace('{client_id}', client_id);
  url = url.replace('{client_secret}', client_secret);
  url = url.replace('{scope}', scope);
  url = url.replace('{redirect_uri}', redirect_uri);
  url = url.replace('{api_version}', api_version);
  url = url.replace('{display}', display);
  url = url.replace('{response_type}', response_type);
  url = url.replace('{code}', code);

  return url;
}
