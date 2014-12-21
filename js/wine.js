/**
 * Wine item controller.
 */
function wineItem(tt, id) {

  tt.goTo('wineTemplate');

  var url = dataSource + "wines/" + id;

  // Get json from URL.
  $.getJSON(url, function (data) {

    var wine = data.data[0];

    var type = '';

    if (wine.type) {
      type = wine.type[Object.keys(wine.type)].name;
    }

    var foodItems = '';

    var output = '';

    if (wine.food) {
      $.each(wine.food, function (key, element) {

        foodItem(tt, key);

      });
    }

    // Head.
    var wineData = {
      id: id,
      cid: wine.company.id,
      label: wine.label,
      company: wine.company.label,
      description: wine.body,
      type: type,
      image: wine.images[0].styles.medium,
      smell: "Appealing aromas of the exotic fruit: mango, papaya and pineapple",
      taste: "Fresh and savoury in the moth, it is characterized by a delicate structure",
      rating: 8
    };

    var source = $("#wine-template").html();
    var compiled = dust.compile(source, "wine");
    dust.loadSource(compiled);
    dust.render("wine", wineData, function (err, out) {
      $("#wineAnchor").html(out);
    });

    // Color.
    var color = '';

    if (wine.color) {
      color = wine.color[Object.keys(wine.color)].name;
    }

    // Type.
    var color = '';

    if (wine.type) {
      type = wine.type[Object.keys(wine.type)].name;
    }

    // Details.
    var wineDetails = {
      id: id,
      cid: wine.company.id,
      producer: wine.company.label,
      edition: wine.edition.label,
      typology: color,
      alcohol: wine.alcohol,
      perception: type,
      vintage: wine.vintage
    };

    var sourceDetailed = $("#wine-info-detailed").html();
    var compiledDetailed = dust.compile(sourceDetailed, "wine");
    dust.loadSource(compiledDetailed);
    dust.render("wine", wineDetails, function (err, out) {
      $("#wineInfo").html(out);
    });

    var sourceButtons = $("#start-buttons-template").html();
    var compiledButtons = dust.compile(sourceButtons, "wine");
    dust.loadSource(compiledButtons);
    dust.render("wine", null, function (err, out) {
      $("#select-test-type").html(out);
    });
  });

};
