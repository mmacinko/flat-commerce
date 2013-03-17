var toggleHandler = function(toggle) {
    var toggle = toggle;
    var radio = jQuery(toggle).find("input");

    var checkToggleState = function() {
        if (radio.eq(0).is(":checked")) {
            jQuery(toggle).removeClass("toggle-off");
        } else {
            jQuery(toggle).addClass("toggle-off");
        }
    };

    checkToggleState();

    radio.eq(0).click(function() {
        jQuery(toggle).toggleClass("toggle-off");
    });

    radio.eq(1).click(function() {
        jQuery(toggle).toggleClass("toggle-off");
    });
};

jQuery(document).ready(function() {
    jQuery(".toggle").each(function(index, toggle) {
        toggleHandler(toggle);
    });
});
