/**
 * Demo App for TopcoatTouch
 */
$(document).ready(function() {

    // Create the topcoatTouch object
    var tt = new TopcoatTouch({});
    // First page we go to home...  This could be done in code by setting the class to 'page page-center', but here is how to do it in code...
    tt.goTo('home');

    tt.on('click', 'li.wineItem', function() {
        tt.goTo('wineTemplate');
        window.currentWineID = $(this).data('id');
        var wine = _.filter(window.wineList, { id: currentWineID })[0];
        var data = {
            label:       wine.label,
            company:     wine.company.label,
            description: wine.body,
            type:        wine.type[Object.keys(wine.type)].name,
            image:       wine.images[0].styles.medium,
            smell:       "Appealing aromas of the exotic fruit: mango, papaya and pineapple",
            taste:       "Fresh and savoury in the moth, it is characterized by a delicate structure",
            rating:       8
        }

        var source   = $("#wine-template").html();
        var compiled = dust.compile(source, "wine");
        dust.loadSource(compiled);
        dust.render("wine", data, function(err, out) {
            $("#wineAnchor").html(out);
        });
    });

    tt.on(tt.EVENTS.PAGE_START, 'wineRaterPage', function() {
    }).on(tt.EVENTS.PAGE_END, 'wineRaterPage', function() {
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
