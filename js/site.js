var myNamespace = (function() {
    var _crazyCatWidth = 0;

    return {
        postInitialDelay: function() {
            $("#document-ready-indicator")
                .removeClass("not-ready")
                .addClass("ready");

            $("#crazy-cat").attr("width", _crazyCatWidth);
            _crazyCatWidth = 0;
        },

        createInitialDelay: function() {
            _crazyCatWidth = $("#crazy-cat").width();
            $("#crazy-cat").attr("width", 2 * _crazyCatWidth);
            setTimeout(this.postInitialDelay, 2000);
        }
    };
})();

$(document).ready(function() {
    myNamespace.createInitialDelay();
});
