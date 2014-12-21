/**
 * Wine food matching model/controller.
 */
function winery(tt, id) {

    tt.goTo('wineryItemTemplate');

    // Define fetch URL.
    var url = dataSource + "companies/" + id + "?filter[language]=en";

    // Get json from URL.
    $.getJSON(url, function (data) {

      var element = data.data[0];

      var contactData = [];

      var contactItems = '';

      // All.
      $.each(element.contacts, function (key, element) {

        var emailData = [];

        var phoneData = [];

        // Email.
        $.each(element.email, function (key, element) {
          emailData.push(element.value);
        });

        // Email.
        $.each(element.phone, function (key, element) {
          phoneData.push(element.value);
        });

        contactData = {
          city: element.city.name,
          regcode: element.regcode.name,
          location: element.location[0].value,
          department: element.department[0].value,
          phone: phoneData.join(', '),
          email: emailData.join(', '),
          website: '<a href="' + element.website[0].url + '" target="_blank">' + element.website[0].title + '</a>'
        };

        var source = $("#wine-item-contacts-template").html();
        var compiled = dust.compile(source, "wine");
        dust.loadSource(compiled);
        dust.render("wine", contactData, function (err, out) {
          contactItems += out;
        });

      });

      var itemData = {
        thumbnail: element.images.styles.large,
        id: element.id,
        label: element.label,
        contacts: contactItems,
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

};
