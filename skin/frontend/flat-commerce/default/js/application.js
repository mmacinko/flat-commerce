// Some general UI pack related JS

jQuery(function () {
    // Custom selects
    jQuery("select").dropkick();
});

jQuery(document).ready(function() {
    // Todo list
    jQuery(".todo li").click(function() {
        jQuery(this).toggleClass("todo-done");
    });

    // Init tooltips
    jQuery("[data-toggle=tooltip]").tooltip("show");

    // Init tags input
    jQuery("#tagsinput").tagsInput();

    // Init jQuery UI slider
    jQuery("#slider").slider({
        min: 1,
        max: 5,
        value: 2,
        orientation: "horizontal",
        range: "min",
    });

    // JS input/textarea placeholder
    jQuery("input, textarea").placeholder();

    // Make pagination demo work
    jQuery(".pagination a").click(function() {
        if (!jQuery(this).parent().hasClass("previous") && !jQuery(this).parent().hasClass("next")) {
            jQuery(this).parent().siblings("li").removeClass("active");
            jQuery(this).parent().addClass("active");
        }
    });

    jQuery(".btn-group a").click(function() {
        jQuery(this).siblings().removeClass("active");
        jQuery(this).addClass("active");
    });

    // Disable link click not scroll top
    jQuery("a[href='#']").click(function() {
        return false
    });

});

