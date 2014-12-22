/**
 * Init app json calls.
 */

$.ajaxSetup({
  async: false
});

$.getJSON(dataSource + "wines?sort=label&filter[language]=en", function (data) {
  window.winesList = data;
});
