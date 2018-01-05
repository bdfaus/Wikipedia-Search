$(document).keypress(function(e) {
    if(e.which == 13) {
        console.log($("#search_box").val());
        $("#search_box").val("");
    };
  })
