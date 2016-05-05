$(document).ready(function(){
		var client_id="5447813";
		var secret="XeOLPTOBiJnEpUfNv4Ot";
		var callback="http://localhost:9000/get.html";
		var _location=window.location.href;

		function success(data){
			console.log("what do we got?!"+JSON.stringify(data));
		}

		if(_location.indexOf("error")!=-1){
			console.log("there is an error!");
			alert(_location.split("error=")[1]);
		} else {
			console.log("all is fine");
			console.log(_location.split("code=")[1]);
			var code=_location.split("code=")[1];

			var url="https://oauth.vk.com/access_token?client_id="+client_id+"&client_secret="+secret+"&redirect_uri="+callback+"&code="+code+"&callback=callbackFunc";
			//ok, this one is just leading us to a page, AND THIS IS ACTUALLY WORKING, cause we are able to get token! but, it's just inserting it to a body, leaving us no chance to handle the data.
			// window.location.href = url;

			//this is a simple get request for a data, that contain token. But we are getting a cross domain error.
			$.get({
				url: url,
				success: success,
			});

			//This is the sample from docs for a cross domain requests, maybe that's work with other routes, but auth is not working, getting an error of SyntaxError: Unexpected token : (browser wants to get a script, but getting json instead, that leads to an error)
			// var script = document.createElement('SCRIPT');

			// script.src = url;

			// document.getElementsByTagName("head")[0].appendChild(script);

			// function callbackFunc(result) {
			//   alert(result);
			// }
		}
});

//callback functions for testing vk sample
// function callbackFunc(result) {
//   alert(result);
// }
