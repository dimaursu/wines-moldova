function wineRater() {
    // add a list of wines to #wineRaterAnchor
    // select the wineID
    // remove the wine list
    // add the #wineRaterTemplate to #wineRaterAnchor

  $.getJSON(dataSource + "wines?sort=label&filter[language]=en", function (data) {
    var element = data.data;
    var liItems = '';
    var itemData = {};

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

    $('#wineRaterAnchor').parent().append('<h2>Select the wine to be rated</h2>');
    $("#wineRaterAnchor").html(liItems);

    var scoreData =  $('li.wineItem.card').on('click', function(){
        var wineID = this.data('id');
        var selectedWine = _.filter(window.wineList, {id: currentWineID})[0];

        // remove the wine list, we don't need it anymore
        $('#wineRaterAnchor').remove();
        return {
            wine: {
                title: selectedWine.label,
                company: selectedWine.company.label + '/' +  selectedWine.vintage,
            }
        };
    });


    // Process and render the quiz template
    var source = $("#wineRaterTemplate").html();
    var compiled = dust.compile(source, "wineRaterTemplate"); // wineRaterTemplate is used for caching
    dust.loadSource(compiled);
    dust.render("wineRaterTemplate", scoreData, function (err, out) {
        $("#wineRaterAnchor").html(out);
    });

  });

};
