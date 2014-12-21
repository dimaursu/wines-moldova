/**
 * WineMoldova application.
 */
$(document).ready(function() {

    // Create the topcoatTouch object
    var tt = new TopcoatTouch({});

    // Go to home page.
    tt.goTo('home');

    // *** Routes.

    // Winery page.
    tt.on('click', 'li.wineryItem', function () {
        winery(tt, $(this).data('id'));
    });

    // Winery events.
    tt.on('click', 'li.eventItem', function () {
        eventPage(tt, $(this).data('id'));
    });

    // Wine food matching.
    tt.on('click', 'li.foodItem', function () {
        wineFoodMatching(tt, $(this).data('id'));
    });

    // View company wines
    tt.on('click', 'a#view-company-wines', function () {
        wineByCompany(tt, $(this).data('id'));
    });

    // Wine item page.
    tt.on('click', 'li.wineItem', function() {
        wineItem(tt, $(this).data('id'));
    });

    // Wine item page.
    tt.on('click', 'a#company-by-wine', function() {
        winery(tt, $(this).data('id'));
    });


    // *** Settings.

    tt.on(tt.EVENTS.PAGE_START, 'wineTastingPage', function() {
        alert("wine tasting page");
    });

    tt.on(tt.EVENTS.PAGE_START, 'carouselExample', function() {

        // When the page is loaded, run the following...

        // Setup iScroll..
        carouselScroll = new IScroll('#carouselWrapper', {
            scrollX: true,
            scrollY: false,
            momentum: false,
            snap: true,
            snapSpeed: 400,
            keyBindings: true,
            indicators: {
                el: document.getElementById('carouselIndicator'),
                resize: false
            }
        });
    }).on(tt.EVENTS.PAGE_END, 'carouselExample', function() {
        // When the page is unloaded, run the following...
        if (carouselScroll != null) {
            carouselScroll.destroy();
            carouselScroll = null;
        }
    });

    // Show a message when anyone clicks on button of the test form...
    $('.testForm').submit(function() {
        tt.showDialog('<h3>Button Clicked</h3>');
        return false;
    });

    $('button, a').on('touchstart', function(e){
        $(this).addClass('tapped');
    });

    $('button, a').on('touchend', function(e){
        $(this).removeClass('tapped');
    });
});
