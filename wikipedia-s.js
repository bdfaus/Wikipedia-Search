$(document).ready(function(){
  $("body").on("keypress", function(e) {
    if(e.which == 13) {
      var search_text = ($("#search_box").val());
      $.ajax({
        url: "https://en.wikipedia.org/w/api.php",
        type: "GET",
        data: {action: "opensearch",search:search_text, format:"json", origin:"*"},
        success: function(data){
          console.log(JSON.stringify(data));
          for (x = 0; x < data[1].length; x++){
            $(".results").append("<div class='result container'>");
            $(".results").append("<h3 class= 'col-lg-3'>" + data[1][x] + "</h3>");
            $(".results").append("<p class= 'col-lg-6'>" + data[2][x] + "</p>");
            $(".results").append("<a class = 'col-lg-3' href = '" + data[3][x] + "'>" + "Read more" + "</a>");
            $(".results").append("</div>");
          }
          console.log(data[1][3]);
        }
      });
    };
    console.log(search_text);
  })
})

//use opensearch on wikipedia api
