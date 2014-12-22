/**
 * Wine food matching model/controller.
 */
function eventPage(tt, id) {

    tt.goTo('eventItemTemplate');

    var wineMatchesList = $('#wineMatchesList');

    // Define fetch URL.
    var url = dataSource + "events/" + id + "?filter[language]=en";

    // Get json from URL.
    $.getJSON(url, function (data) {

      var element = data.data[0];

      var itemData = {
        thumbnail: element.image.styles.large,
        id: element.id,
        label: element.label,
        description: element.body,
        location: element.location,
        date: element.date,
        price: element.price,
        buy: element.buy
      };

      // Process and render event item.
      var source = $("#event-item-template").html();
      var compiled = dust.compile(source, "wine");
      dust.loadSource(compiled);
      dust.render("wine", itemData, function (err, out) {
        $("#eventItemContent").html(out);
      });
    });

};
