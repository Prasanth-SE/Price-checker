$(document).ready(function(){
    $("img.lazy").each(function() {
        $(this).attr("data-original",$(this).attr("src"));
        $(this).removeAttr("src");
    });
    //$('head').load(baseUserPathName + "/include/head.html");
    $('header').load(baseUserPathName + "/include/header.html");
    $('footer').load(baseUserPathName + "/include/footer.html");
// initialization of slick carousel
    $.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');

    // initialization of go to
    $.HSCore.components.HSGoTo.init('.js-go-to');

});
//get and show products
getAllPopularProducts();