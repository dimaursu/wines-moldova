/**
 * commingSoonTemplate.
 */
function comingSoon(tt) {

  tt.goTo('comingSoonTemplate');

  var source = $("#coming-soon-template-template").html();
  var compiled = dust.compile(source, "wine");
  dust.loadSource(compiled);
  dust.render("wine", null, function (err, out) {
    $("#coming-soon-template-placeholder").html(liItems);
  });

}
