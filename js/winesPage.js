/**
 * Wine food matching model/controller.
 */
function winesPage(tt) {

  tt.goTo('winesPage');

  $.getJSON(dataSource + "wines?sort=label&filter[language]=en", function (data) {

    var element = data.data;

    window.wineList = element;

    var liItems = '';

    var itemData = {};

    var edition = '';

    if (element.edition) {
      edition = element.edition.label;
    }

    $.each(element, function (key, element) {

      itemData = {
        id: element.id,
        thumbnail: element.images[0].styles.thumbnail,
        vintage: element.vintage,
        company: element.company.label,
        label: element.label
      };

      var source = $("#wine-items-page").html();
      var compiled = dust.compile(source, "wine");
      dust.loadSource(compiled);
      dust.render("wine", itemData, function (err, out) {
        liItems += out;
      });

    });

    $("#wineList").html(liItems);

  });

};
