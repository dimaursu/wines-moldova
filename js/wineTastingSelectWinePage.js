/**
 * Wine food matching model/controller.
 */
function wineTastingSelectWinePage(tt) {

  tt.goTo('wineTastingSelectWinePage');

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

    var source = $("#wine-testing-items-page").html();
    var compiled = dust.compile(source, "wine");
    dust.loadSource(compiled);
    dust.render("wine", itemData, function (err, out) {
      liItems += out;
    });

  });

  $("#wineTestingListItems").html(liItems);

  var myScroll;
  myScroll = new IScroll('#wine-testing-page-scroll-wrapper', {
    mouseWheel: true,
    scrollbars: true
  });
}
