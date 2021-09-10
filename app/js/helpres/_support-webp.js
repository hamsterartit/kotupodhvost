function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function() {
        callback(webP.height == 2);
    };
    webP.src = "";
}

testWebP(function (support) {
    if(support == true) {
        document.querySelector('body').classList.add('webp');
    }
});
