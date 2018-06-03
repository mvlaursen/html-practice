var myNamespace = (function() {
    return {
        postInitialDelay: function() {
            $("#document-ready-indicator")
                .removeClass("not-ready")
                .addClass("ready");
        },

        createInitialDelay: function() {
            setTimeout(this.postInitialDelay, 2000);
        }
    };
})();

$(document).ready(function() {
    myNamespace.createInitialDelay();
});
