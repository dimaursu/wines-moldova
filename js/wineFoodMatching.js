/**
 * Wine food matching model/controller.
 */
function wineFoodMatching(tt, id) {

  tt.goTo('wineFoodMatchingTemplate');

  // Define fetch URL.
  var url = dataSource + "wines?filter[language]=en&filter[food]=" + id + "&sort=label";

  // Get json from URL.
  $.getJSON(url, function (data) {

    var elements = data.data;

    var itemData = [];

    var liItems = '';

    $("#no-wine-food-match-found").empty();

    if (elements.length == 0) {
      var source = $("#no-items-found-template").html();
      var compiled = dust.compile(source, "wine");
      dust.loadSource(compiled);
      dust.render("wine", null, function (err, out) {
        $("#no-wine-food-match-found").html(out);
      });
    }

    $.each(elements, function (key, element) {

      var edition = '';

      if (element.edition) {
        edition = element.edition.label;
      }

      // Define line item variables.
      itemData = {
        id: element.id,
        thumbnail: element.images[0].styles.thumbnail,
        label: element.label,
        vintage: element.vintage,
        company: element.company.label,
        edition: edition
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

};