var serviceModule;

function methodClick(button) {
	'use strict';
	var method;
	var params = [];
	var token = false;
	switch (button) {
	case 'albums':
		method = 'photos.getAlbums';
		params = ['extended=1', 'no_service_albums=0'];
		token = false;
		break;
	case 'photos':
		method = 'photos.getAll';
		token = true;
		break;
	case 'about':
		method = 'users.get';
		token = false;
		break;
	case 'wall':
		method = 'wall.get';
		params = ['count=10'];
		token = true;
		break;
	case 'friends':
		method = 'friends.get';
		params = ['order=hints'];
		token = true;
		break;
	case 'notes':
		method = 'notes.get';
		token = true;
		break;
	}
	serviceModule.makeCall({
		method: method,
		params: params,
		token: token,
		cb: handleResponse
	});
}

function handleResponse(res) {
	'use strict';
	console.log('Response?' + JSON.stringify(res));
}
$(document).ready(function () {
	'use strict';
	serviceModule = new ServiceManager({
		client_id: '5447813',
		secret: 'XeOLPTOBiJnEpUfNv4Ot',
		callback: 'http://localhost:9000/auth.html'
	});
	var _location = window.location.href;
	if (_location.indexOf('error') !== -1) {
		console.log(_location.split('error=')[1]);
	} else {
		console.log('all is fine');
		var code = _location.split('code=')[1];
		serviceModule.getToken(code);
	}


});
