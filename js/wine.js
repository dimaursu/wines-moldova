/**
 * Wine item controller.
 */
function wineItem(tt, id) {

  tt.goTo('wineTemplate');

  window.currentWineID = id;

  var wine = _.filter(window.wineList, {id: currentWineID})[0];

  console.log(wine);

  var type = '';

  if (wine.type) {
    type = wine.type[Object.keys(wine.type)].name;
  }

  var data = {
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
  dust.render("wine", data, function (err, out) {
    $("#wineAnchor").html(out);
  });

};
