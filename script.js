$(".middle").hide();
$(".yes").click(function() {
    $(".middle").show();
});

$(".yes").click(function() {
    $(".intro").hide();
});

$(".no").click(function() {
    $(".middletwo").show();
});

$(".egg").click(function() {
    $(".endfour").show();
});

$(".egg").click(function() {
    $(".endthree").hide();
});

$(".no").click(function() {
    $(".intro").hide();
});

$(".middletwo").hide();
$(".no").click(function() {
    $(".middletwo").show();
});

$(".no").click(function() {
    $(".middletwo").css("background-image", "linear-gradient( #ff6666,orange)");
});

$(".middle").hide();
$(".middle").dblclick(function() {
    $(".middle").hide();
});
$(".middle").dblclick(function() {
    $(".end").show();
});

$(".end").hide();
$(".end").click(function() {
    $(".endtwo").fadeIn();
});
$(".endtwo").hide();

$(".end").click(function() {
    $(".end").hide();
});

$(".endtwo").hide();
$(".n").click(function() {
    $(".endthree").show();
});

$(".endthree").hide();

$(".endfour").hide();

$(".endfour").click(function() {
    $(".endfive").slideDown();
});

$(".endfour").click(function() {
    $(".endthree").hide();
});

$(".endfour").click(function() {
    $(".endfour").hide();
});

$(".endfive").hide();

$(".n").click(function() {
    $(".endtwo").hide();
});

$(".of").click(function() {
    $(".middletwo").show();
});
$(".of").click(function() {
    $(".middle").hide();
});

$(".of").click(function() {
    $(".endtwo").hide();
});

$(".ta").click(function() {
    $(".middletwo").hide();
});

$(".ta").click(function() {
    $(".intro").show();
});


$(".yes").mouseenter(function() {
    $(".yes").text("Yay");
});

$(".yes").mouseleave(function() {
    $(".yes").text("Yes");
});

$(".yes").mouseenter(function() {
    $(".yes").css("background-color", "#ccccff");
});

$(".yes").mouseleave(function() {
    $(".yes").css("background-color", "white");
});

$(".no").mouseenter(function() {
    $(".no").css("background-color", "#ccccff");
});

$(".no").mouseleave(function() {
    $(".no").css("background-color", "white");
});

$(".ta").mouseenter(function() {
    $(".ta").css("background-color", "#ffb3b3");
});

$(".ta").mouseleave(function() {
    $(".ta").css("background-color", "white");
});

$(".imageone").mouseenter(function() {
    $(".imageone").css("border", "10px solid #ccffff");
});

$(".imageone").mouseleave(function() {
    $(".imageone").css("border", "10px solid #b3ffd9");
});

$(".luffy").mouseenter(function() {
    $(".luffy").css("border", "10px solid #cc9900 ");
});

$(".luffy").mouseleave(function() {
    $(".luffy").css("border", "10px solid #ffa64d ");
});

$(".opm").hover(function() {
    $(".opm").css("border", "10px solid #ffff99");
});

$(".opm").mouseleave(function() {
    $(".opm").css("border","white");
});
 
$(".reset").click(function() {
    $(".intro").show();
});

$(".reset").click(function() {
    $(".endfive").hide();
});