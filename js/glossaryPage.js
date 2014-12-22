/**
 * Wine food matching model/controller.
 */
function glossaryPage(tt) {

  tt.goTo('glossaryPage');

  $.getJSON(dataSource + "glossary?range=200", function (data) {
    var liItems = '';

    var itemData = {};

    $.each(data.data, function (key, element) {

      itemData = {
        id: element.id,
        label: element.label,
        description: element.description
      };

      var source = $("#glossary-item-page").html();
      var compiled = dust.compile(source, "wine");
      dust.loadSource(compiled);
      dust.render("wine", itemData, function (err, out) {
        liItems += out;
      });

    });

    $("#glossaryList").html(liItems);

    $('#glossaryList').listnav({
      includeAll: true,
      includeNums: false,
      noMatchText: 'Nothing matched your filter, please click another letter.',
      showCounts: false
    });

    var myScroll;
    myScroll = new IScroll('#glossary-scroll-wrapper', {
      mouseWheel: true,
      scrollbars: true
    });

  });

};
