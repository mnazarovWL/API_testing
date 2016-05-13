var ServiceManager = function serviceManager(global) {
	'use strict';
	this.makeCall = function (data) {
		var baseUrl = 'https://api.vk.com';
		var url = '/method/' + data.method + '?owner_id=' + global.user.user_id;
		var postData = md5(url, global.user.secret);
		for (var i; i < data.params.length; i++) {
			url += '&' + data.params[i];
		}
		if (data.token) {
			url += '&access_token=' + global.user.access_token;
			postData = md5(url + global.user.secret);
			url += '&sig=' + postData;

		}

		$.get({
			url: (baseUrl + url),
			complete: data.cb
		});
	};
	this.getToken = function (code) {
		var url = 'https://oauth.vk.com/access_token?client_id=' + global.client_id + '&client_secret=' + global.secret + '&redirect_uri=' + global.callback + '&code=' + code;
		//this is a simple get request for a data, that contain token. But we are getting a cross domain error.
		$.get({
			url: url,
			complete: function (res) {
				var data = JSON.parse(res.responseText);
				global.user = data;
			}
		});
	};
};
