/**
 * Wine food matching model/controller.
 */
function wineTastingItemPage(tt, id) {

  tt.goTo('wineTastingItemPage');

  $.getJSON(dataSource + "wines/" + id, function (data) {

    var element = data.data[0];

    itemData = {
      id: element.id,
      thumbnail: element.images[0].styles.thumbnail,
      vintage: element.vintage,
      company: element.company.label,
      label: element.label
    };

    var source = $("#wine-testing-item-head-template").html();
    var compiled = dust.compile(source, "wine");
    dust.loadSource(compiled);
    dust.render("wine", itemData, function (err, out) {
      //$("#wine-testing-item-wine-name").html(out);
    });

    // ** STEPS.

    var source = $("#wine-tasting-amateur-step1-template").html();
    var compiled = dust.compile(source, "wine");
    dust.loadSource(compiled);
    dust.render("wine", null, function (err, out) {
      $("#wine-tasting-amateur-step1-template-placeholder").html(out);
    });

    // Visual.color().
    var itemData = {};
    var lineItem = '';
    $.each(window.amateurFields.visual.field_clarity, function (key, element) {

      itemData = {
        id: key,
        name: 'field_clarity',
        class: element.class,
        label: element.label
      };

      var source = $("#wine-tasting-amateur-radio-template").html();
      var compiled = dust.compile(source, "wine");
      dust.loadSource(compiled);
      dust.render("wine", itemData, function (err, out) {
        lineItem += out;
      });

      $("#wine-tasting-amateur-step1-characteristic-visual-color-placeholder").html(lineItem);
    });

    // Visual.color().
    var itemData = {};
    var lineItem = '';
    $.each(window.amateurFields.visual.field_wine_color, function (key, element) {

      itemData = {
        id: key,
        name: 'field_wine_color',
        class: element.class,
        label: element.label
      };

      var source = $("#wine-tasting-amateur-checkbox-template").html();
      var compiled = dust.compile(source, "wine");
      dust.loadSource(compiled);
      dust.render("wine", itemData, function (err, out) {
        lineItem += out;
      });

      $("#wine-tasting-amateur-step1-characteristic-visual-clarity-placeholder").html(lineItem);
    });

    // Aroma.aroma_level().
    var itemData = {};
    var lineItem = '';
    $.each(window.amateurFields.aroma.field_aroma_level, function (key, element) {

      itemData = {
        id: key,
        name: 'field_wine_color',
        class: element.class,
        label: element.label
      };

      var source = $("#wine-tasting-amateur-checkbox-template").html();
      var compiled = dust.compile(source, "wine");
      dust.loadSource(compiled);
      dust.render("wine", itemData, function (err, out) {
        lineItem += out;
      });

      $("#wine-tasting-amateur-step1-characteristic-aroma-aroma-level-placeholder").html(lineItem);
    });

    // Aroma.Aroma().
    var itemData = {};
    var lineItem = '';
    $.each(window.amateurFields.aroma.field_aroma, function (key, element) {

      itemData = {
        id: key,
        name: 'field_aroma',
        class: element.class,
        label: element.label
      };

      var source = $("#wine-tasting-amateur-checkbox-template").html();
      var compiled = dust.compile(source, "wine");
      dust.loadSource(compiled);
      dust.render("wine", itemData, function (err, out) {
        lineItem += out;
      });

      $("#wine-tasting-amateur-step1-characteristic-aroma-aroma-placeholder").html(lineItem);
    });


    //var myScroll;
    //myScroll = new IScroll('#wine-testing-item-scroll-wrapper', {
    //  mouseWheel: true,
    //  scrollbars: true
    //});

  });

}
