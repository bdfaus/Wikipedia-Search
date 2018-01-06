$(document).keypress(function(e) {
  //correctly assigns input to #search_box to var search after press of enter key
    if(e.which == 13) {
        var search_text = ($("#search_box").val());
        $.ajax({
          url: "https://en.wikipedia.org/w/api.php",
          type: "GET",
          data: {action: "opensearch",search:search_text, format:"jsonp"},
          success: function(data){
            console.log(JSON.stringify(data));
          }
        });
    };
    console.log(search_text);
  })

//use opensearch on wikipedia api
