$(document).ready(function(){
  $(document).on("keypress", function(e) {
    if(e.which == 13) {
      var search_text = ($("#search_box").val());
      $.ajax({
        url: "https://en.wikipedia.org/w/api.php",
        type: "GET",
        data: {action: "opensearch",search:search_text, format:"json", origin:"*"},
        success: function(data){
          console.log(JSON.stringify(data));
          console.log(data[0].length);
        }
      });
    };
    console.log(search_text);
  })
})

//use opensearch on wikipedia api
