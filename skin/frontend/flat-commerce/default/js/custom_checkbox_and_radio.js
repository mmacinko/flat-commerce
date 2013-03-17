// Custom checkbox and radios
function setupLabel() {
    // Checkbox
    var checkBox = ".checkbox";
    var checkBoxInput = checkBox + " input[type='checkbox']";
    var checkBoxChecked = "checked";
    var checkBoxDisabled = "disabled";

    // Radio
    var radio = ".radio";
    var radioInput = radio + " input[type='radio']";
    var radioOn = "checked";
    var radioDisabled = "disabled";

    // Checkboxes
    if (jQuery(checkBoxInput).length) {
        jQuery(checkBox).each(function(){
            jQuery(this).removeClass(checkBoxChecked);
        });
        jQuery(checkBoxInput + ":checked").each(function(){
            jQuery(this).parent(checkBox).addClass(checkBoxChecked);
        });
        jQuery(checkBoxInput + ":disabled").each(function(){
            jQuery(this).parent(checkBox).addClass(checkBoxDisabled);
        });
    };

    // Radios
    if (jQuery(radioInput).length) {
        jQuery(radio).each(function(){
            jQuery(this).removeClass(radioOn);
        });
        jQuery(radioInput + ":checked").each(function(){
            jQuery(this).parent(radio).addClass(radioOn);
        });
        jQuery(radioInput + ":disabled").each(function(){
            jQuery(this).parent(radio).addClass(radioDisabled);
        });
    };
};

jQuery(document).ready(function(){
    jQuery("html").addClass("has-js");

    // First let's prepend icons (needed for effects)
    jQuery(".checkbox, .radio").prepend("<span class='icon'></span><span class='icon-to-fade'></span>");

    jQuery(".checkbox, .radio").click(function(){
        setupLabel();
    });
    setupLabel();
});

