/**
 * Wine food matching model/controller.
 */
function foodItem(tt, id) {

  //tt.goTo('foodsTemplate');

  // Define fetch URL.
  var url = dataSource + "wines/food/" + id;

  // Get json from URL.
  $.getJSON(url, function (data) {

    var itemData = [];

    var element = data.data[0];

    // Define content variables.
    itemData = {
      id: element.id,
      label: element.label,
      thumbnail: element.images[0].styles.thumbnail
    };

    // Process and render wine items (ul).
    var source = $("#foods-template").html();
    var compiled = dust.compile(source, "wine");
    dust.loadSource(compiled);
    dust.render("wine", itemData, function (err, out) {
      $("#wineMatching").append(out);
    });
  });

};
