/**
 * Wine food matching model/controller.
 */
function winesPage(tt, url) {

  tt.goTo('winesPage');

  var element = window.winesList.data;

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

  var myScroll;
  myScroll = new IScroll('#scroll-wrapper', {
    mouseWheel: true,
    scrollbars: true
  });

};
