var unlucky = 0
var lucky = 0
$(document).ready(function() {
  $("form#fortune-teller").submit(function(event) {
    event.preventDefault();
    $("input:checkbox[name=unlucky-event]:checked").each(function() {
      unlucky++;
    });
    $("input:checkbox[name=lucky-event]:checked").each(function() {
      lucky++;
    });
    $("#fortune-teller").hide();
    if ((unlucky > 3) && (lucky <= 3)) {
      $("#unlucky").show();
      $("#lucky").hide();
      $("#inbetween").hide();
    };
    if ((lucky > 3) && (unlucky <= 3)) {
      $("#unlucky").hide();
      $("#lucky").show();
      $("#inbetween").hide();
    };
    if (lucky === unlucky) {
      $("#unlucky").hide();
      $("#lucky").hide();
      $("#inbetween").show();
    };
  });
});
