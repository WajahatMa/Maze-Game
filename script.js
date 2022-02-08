$(".level1").hide();
$(".level2").hide();
$(".level3").hide();
$(".left1").hide();
$(".left2").hide();
$(".left3").hide();
$(".right1").hide();
$(".right2").hide();
$(".right3").hide();
$(".youlose").hide();
$("p").hide();
$("p-1").hide();
$(".winner").hide();
$("p-2").hide();
$(".reset").hide();




$(".start").click(function() {
    $(".maze").hide();
    $(".level1").show();
    $("p").show();
    $(".start").hide();
    $(".left1").show();
    $(".right1").show();
});

$(".left1").click(function() {
    $(".level1").slideUp();
    $(".youlose").show();
    $(".youlose").css("border","solid red 5px");
    $(".left1").hide();
    $(".right1").hide();
    $("p").hide();
    $(".reset").show();
});
$(".right1").click(function() {
    $(".left1").hide();
    $(".right1").hide();
    $(".level1").slideUp();
    $(".left2").show();
    $(".right2").show();
    $(".level2").show();
    $("p").hide();
    $("p-1").show("");
});
$(".left2").click(function() {
    $(".level2").slideUp();
    $(".youlose").show();
    $(".youlose").css("border","solid red 5px");
    $(".left2").hide();
    $(".right2").hide();
    $("p").hide();
    $("p-1").hide("");
    
    $(".reset").show();
});
$(".right2").click(function() {
    $(".left2").hide();
    $(".right2").hide();
    $(".level2").slideUp();
    $(".left3").show();
    $(".right3").show();
    $(".level3").show();
    $("p").hide();
    $("p-1").hide("");
    $("p-2").show("");
});
$(".left3").click(function() {
    $(".left3").hide();
    $(".right3").hide();
    $(".level3").slideUp();
    $("p").hide();
    $("p-1").hide("");
    $("p-2").hide("");
    $(".winner").show();
    $(".reset").show();
    
});

$(".right3").click(function() {
    $(".level3").slideUp();
    $(".youlose").show();
    $(".youlose").css("border","solid red 5px");
    $(".left3").hide();
    $(".right3").hide();
    $("p").hide();
    $("p-1").hide("");
    $("p-2").hide("");
    $(".finsh").hide();
    $(".reset").show();
    
});

$(".reset").click(function() {
    $(".maze").show();
    $(".start").show();
    $(".level1").hide();
$(".level2").hide();
$(".level3").hide();
$(".left1").hide();
$(".left2").hide();
$(".left3").hide();
$(".right1").hide();
$(".right2").hide();
$(".right3").hide();
$(".youlose").hide();
$("p").hide();
$("p-1").hide();
$(".winner").hide();
$("p-2").hide();
$(".reset").hide();
    
    

});





