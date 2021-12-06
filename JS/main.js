
var Homeload;
function myFunction(){
    Homeload = setTimeout(ShowPage,100);

}
function ShowPage(){
    $('#root').load("home.html")
}



$(document).ready(function(){
    $("#hm").click(function(){
    $('#root').load("home.html")   
    })
    $("#abt").click(function(){
        $('#root').load("about.html")
    });
    $("#skls").click(function(){
        $("#root").load("skills.html")
    });
    $("#edn").click(function(){
        $("#root").load("education.html")
    });
    $("#prtf").click(function(){
        $("#root").load("portfolio.html")
    })
});
$(document).ready(function() {
    $(".video").on("mouseover", function(event) {
      this.play();
  
    }).on('mouseout', function(event) {
      this.pause();
  
    });
  })