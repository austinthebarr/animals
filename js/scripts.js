$(function(){
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var animal = $("#animal").val();
    if (animal === "Hippo") {
      $('#results1').show();
      $('#results2').hide();
      $('#results3').hide();
    } else if (animal === "Liger") {
      $('#results2').show();
      $('#results1').hide();
      $('#results3').hide();
    }
    else {
      $('#results3').show();
      $('#results1').hide();
      $('#results2').hide();
    };
  });

  // $("#results1").click(function(){
  //   (this).hide()
  // });
});
