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

    tt.on(tt.EVENTS.PAGE_START, 'wineRaterPage', function() {
    }).on(tt.EVENTS.PAGE_END, 'wineRaterPage', function() {
    });

    // Wines.
    tt.on(tt.EVENTS.PAGE_START, 'winesPage', function() {
        //
    }).on(tt.EVENTS.PAGE_END, 'winesPage', function() {
    });

    // Glossary.
    tt.on(tt.EVENTS.PAGE_START, 'glossaryPage', function() {
        glossaryPage(tt);
    }).on(tt.EVENTS.PAGE_END, 'glossaryPage', function() {
        $('#glossaryList').empty();
        $('#glossaryList-nav').empty();
    });

    $('button').on('touchstart', function(e){
        $(this).addClass('tapped');
    });

    $('button').on('touchend', function(e){
        $(this).removeClass('tapped');
    });
});
