function authenticate() {
	'use strict';
	//to prevent multiple clicking
	// ev.disabled=true;
	var clientId = '5447813';
	var secret = 'XeOLPTOBiJnEpUfNv4Ot';
	var callback = 'http://localhost:9000/auth.html';
	var display = 'page';
	var scope = 'friends,photos,wall,notes,nohttps';
	var responseType = 'code';
	var url = 'https://oauth.vk.com/authorize?client_id=' + clientId + '&display=page&redirect_uri=' + callback + '&scope=' + scope + '&responseType=code&v=5.52';
	window.location.href = url;
}
