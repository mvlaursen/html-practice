var myNamespace = (function() {
    var _crazyCatCss = {
        borderRadius: "100%",
        height: "120px",
        opacity: "1.0",
    }
    
    return {
        postInitialDelay: function() {
            $("#document-ready-indicator")
                .removeClass("not-ready")
                .addClass("ready");

            $("#crazy-cat")
                .css("border-radius", _crazyCatCss.borderRadius)
                .css("height", _crazyCatCss.height)
                .css("opacity", _crazyCatCss.opacity);
            _crazyCatWidth = 0;
        },

        createInitialDelay: function() {
            _crazyCatCss.borderRadius = $("#crazy-cat").css("border-radius");
            _crazyCatCss.opacity = $("#crazy-cat").css("opacity");
            $("#crazy-cat")
                .css("border-radius", "50%")
                .css("opacity", "0.5");
            setTimeout(this.postInitialDelay, 2000);

            var aEl = document.getElementById("crazy-cat");  
            _crazyCatCss.height = aEl.style.height;
            aEl.style.height= "10px";
        }
    };
})();

$(document).ready(function() {
    myNamespace.createInitialDelay();
});
