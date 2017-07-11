$(document).ready(function() {
    console.log("HTML de Recipe listo");

    //------ Etapa 8
    //funcion para .js-show-recipe

    $(".js-show-recipe").click(function() {
        $(".page").removeClass("make");
    })

    //funcion para .js-show-make
    $(".js-show-make").click(function() {
        $(".page").addClass("make");
    })



});