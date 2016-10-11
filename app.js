(function (window, document, drawModule, undefined) {
	
    var btn = document.getElementById('btn');
    btn.addEventListener("click", function () {
        drawModule.init();
    });



})(window, document, drawModule);