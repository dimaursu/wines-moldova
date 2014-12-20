/**
 * Wine food matching model/controller.
 */
$(document).ready(function () {

  var tt = new TopcoatTouch();

  tt.on('click', 'li.foodItem', function () {

    tt.goTo('wineFoodMatchingTemplate');

    var wineMatchesList = $('#wineMatchesList');

    // Define fetch URL.
    var url = dataSource + "wines?filter[language]=en&filter[food]=" + $(this).data('id') + "&sort=label";

    // Get json from URL.
    $.getJSON(url, function (data) {

      var itemData = [];

      var liItems = '';

      $.each(data.data, function (key, element) {
        // Define line item variables.
        itemData = {
          id: element.id,
          thumbnail: element.images[0].styles.thumbnail,
          label: element.label
        };

        // Process and render wine line item (li).
        var source = $("#wine-food-matching-item-template").html();
        var compiled = dust.compile(source, "wine");
        dust.loadSource(compiled);
        dust.render("wine", itemData, function (err, out) {
          liItems += out;
        });

      });

      // Define content variables.
      templateData = {
        content: liItems
      };

      // Process and render wine items (ul).
      var source = $("#wine-food-matching-template").html();
      var compiled = dust.compile(source, "wine");
      dust.loadSource(compiled);
      dust.render("wine", templateData, function (err, out) {
        $("#wineFoodMatchingList").html(out);
      });

    });

  });

});