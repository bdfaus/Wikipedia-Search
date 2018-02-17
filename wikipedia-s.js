
$("body").on('keypress',function(e) {
  if(e.which == 13) {
    var search_text = $("#search_box").val();
    $("input:text").val('');
    $.ajax({
      url: "https://en.wikipedia.org/w/api.php",
      type: "GET",
      data: {action: "opensearch",search:search_text, format:"json", origin:"*"},
      success: function(data){
        console.log(JSON.stringify(data));
        $('.results').empty();
        for (x = 0; x < data[1].length; x++){
          console.log(data[1][x]);
          $(".results").append(`
            <div class='result container'> 
            <h1 class= 'result_head col-lg-3'>${data[1][x]}</h1>
            <p class= 'col-lg-6'>${data[2][x]}</p>
            <p><a class = 'col-lg-3' href = "${data[3][x]}"> Read more </a></p>
            </div>`);
        }
        console.log(data[1][3]);
      }
    });
  };
  console.log(search_text);
})
