$(document).keypress(function(e) {
  //correctly assigns input to #search_box to var search after press of enter key
    if(e.which == 13) {
        var search = ($("#search_box").val());
    };
    //attempting to test
    $.get("https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json&formatversion=2",
      function(data){
        console.log(JSON.stringify(data));
      }
    );
    console.log(search);
  })

//use opensearch on wikipedia api
