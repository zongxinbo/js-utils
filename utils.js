function getUrlParam(key, url) {
	url = url ? url : window.location.search;
	var result = url.match(new RegExp(key + "=([^&]*)"));
	return result ? decodeURIComponent(result[1]) : "";
}
