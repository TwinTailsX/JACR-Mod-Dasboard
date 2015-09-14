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
            $.getScript("https://rawgit.com/TwinTailsX/JACR-Mod-Dashboard/master/JACR Mod Dashboard.js");
        }
    };
    a.b();
})();
