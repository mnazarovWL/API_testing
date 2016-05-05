var main=function(){
	console.log("document ready");
};
function authenticate(ev){
	//to prevent multiple clicking
	// ev.disabled=true;
	var client_id="5447813";
	var secret="XeOLPTOBiJnEpUfNv4Ot";
	var callback="http://localhost:9000/get.html";
	var display="page";
	var scope="friends,photos,nohttps";
	var response_type="code";
	var url="https://oauth.vk.com/authorize?client_id="+client_id+"&display=page&redirect_uri="+callback+"&scope="+scope+"&response_type=code&v=5.52";
	window.location.href = url;
}
$(document).ready(main);
