/**
 * Init app json calls.
 */

$.getJSON(dataSource + "wines?sort=label&filter[language]=en", function (data) {
  window.winesList = data;
});
