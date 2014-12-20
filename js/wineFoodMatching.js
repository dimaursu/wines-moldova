/**
 * Wine food matching model/controller.
 */
$(document).ready(function () {

  var tt = new TopcoatTouch();

  tt.on('click', 'li.foodItem', function () {
    tt.goTo('wineFoodMatchingTemplate');

    var wineMatchesList = $('#wineMatchesList');

    var url = dataSource + "wines?filter[language]=en&filter[food]=" + $(this).data('id') + "&sort=label";

    $.getJSON(url, function (data) {

      var itemData = [];

      var liItems = '';

      $.each(data.data, function (key, element) {
        itemData = {
          label: element.label
        };


        var source = $("#wine-food-matching-item-template").html();
        var compiled = dust.compile(source, "wine");
        dust.loadSource(compiled);
        dust.render("wine", itemData, function (err, out) {
          liItems += out;
        });

      });

      templateData = {
        content: liItems
      };

      var source = $("#wine-food-matching-template").html();
      var compiled = dust.compile(source, "wine");
      dust.loadSource(compiled);
      dust.render("wine", templateData, function (err, out) {
        $("#wineFoodMatchingList").html(out);
      });

    });
  });

});