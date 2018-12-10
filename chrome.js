(function() {
    var loaded = false;

    var a = {
        b: function() {
            if (typeof API !== "undefined" && API.enabled) {
            	this.c();
            }
            else if (! loaded) {
                setTimeout(function() { a.b(); }, 1000);
            }
        },
        c: function() {
            loaded = true;
            $.getScript("https://cdn.jsdelivr.net/gh/TwinTailsX/JACR-Mod-Dashboard@master/JACR%20Mod%20Dashboard.js");
        }
    };
    a.b();
})();
