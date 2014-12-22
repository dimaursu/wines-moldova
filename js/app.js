/**
 * WineMoldova application.
 */
$(document).ready(function() {

    // Create the topcoatTouch object
    var tt = new TopcoatTouch({});

    // Go to home page.
    tt.goTo('home');

    // Event aggregation
    //
    // View company wines
    tt.on('click', 'a#view-company-wines', function () {
        tt.goTo('wineryItemTemplate');
        wineByCompany(tt, $(this).data('id'));
    });
    //
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
    // Wine item page.
    tt.on('click', 'a#company-by-wine', function() {
        winery(tt, $(this).data('id'));
    });

    // Wine item page.
    tt.on('click', 'li.wineItem', function() {
        wineItem(tt, $(this).data('id'));
    });

    tt.on(tt.EVENTS.PAGE_START, 'wineRaterPage', function() {
        wineRater();
    }).on(tt.EVENTS.PAGE_END, 'wineRaterPage', function() {
        // send all this shit into the void
        $('#wineRaterAnchor').remove();
    });

    tt.on(tt.EVENTS.PAGE_START, 'home', function() {
        var source = $("#start-buttons-template").html();
        var compiled = dust.compile(source, "wine");
        dust.loadSource(compiled);
        dust.render("wine", null, function (err, out) {
            $("#degustation-html").html(out);
        });
    }).on(tt.EVENTS.PAGE_END, 'home', function() {
        // @TODO
    });

    // Wines.
    tt.on(tt.EVENTS.PAGE_START, 'winesPage', function() {
        winesPage(tt);
    }).on(tt.EVENTS.PAGE_END, 'winesPage', function() {
    });

    // Wines.
    tt.on(tt.EVENTS.PAGE_START, 'wineFoodMatchingTemplate', function() {
        // Load wines then call this page.
    }).on(tt.EVENTS.PAGE_END, 'wineFoodMatchingTemplate', function() {
        // @TODO.
    });

    // Wines.
    tt.on(tt.EVENTS.PAGE_START, 'wineTastingSelectWinePage', function() {
        wineTastingSelectWinePage(tt);

        // Test Wine item page.
        tt.on('click', 'li.wineTasteItem', function() {
            initAmateur();

            wineTastingItemPage(tt, $(this).data('id'));
        });

    }).on(tt.EVENTS.PAGE_END, 'wineTastingSelectWinePage', function() {
        // @TODO.
    });

    // Coming soon.
    tt.on(tt.EVENTS.PAGE_START, 'comingSoonTemplate', function() {
        comingSoon(tt);
    }).on(tt.EVENTS.PAGE_END, 'comingSoonTemplate', function() {
    });

    // Glossary.
    tt.on(tt.EVENTS.PAGE_START, 'glossaryPage', function() {
        glossaryPage(tt);
    }).on(tt.EVENTS.PAGE_END, 'glossaryPage', function() {
        $('#glossaryList').empty();
        $('#glossaryList-nav').empty();
    });

    $('button').on('touchstart', function(){
        $(this).addClass('tapped');
    });

    $('button').on('touchend', function(){
        $(this).removeClass('tapped');
    });
});
