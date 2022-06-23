function jump() {
    var url = location.search;
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            var link = theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    document.getElementById("link").innerHTML = (link);
    window.location.href = link
}

window.onload = jump