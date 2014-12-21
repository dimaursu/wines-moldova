/**
 * Wine food matching model/controller.
 */
$(document).ready(function () {

  var tt = new TopcoatTouch();

  tt.on('click', 'li.wineryItem', function () {

    tt.goTo('wineItemTemplate');

    // Define fetch URL.
    var url = dataSource + "companies/" + $(this).data('id') + "?filter[language]=en";

    // Get json from URL.
    $.getJSON(url, function (data) {

      var element = data.data[0];

      console.log(element);

      var itemData = {
        thumbnail: element.images.styles.large,
        id: element.id,
        label: element.label,
        description: element.body
      };

      // Process and render wine item.
      var source = $("#wine-item-template").html();
      var compiled = dust.compile(source, "wine");
      dust.loadSource(compiled);
      dust.render("wine", itemData, function (err, out) {
        $("#wineItemContent").html(out);
      });


      $('.expand-one').on('click', function () {
        $('.content-one').slideToggle('slow');
      });

    });

  });

});
