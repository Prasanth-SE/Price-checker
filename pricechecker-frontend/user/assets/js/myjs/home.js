$(document).ready(function(){
    //$('head').load(baseUserPathName + "/include/head.html");
    $('header').load(baseUserPathName + "/include/header.html");
    $('footer').load(baseUserPathName + "/include/footer.html");
    // initialization of slick carousel
    $.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');

    // initialization of go to
    $.HSCore.components.HSGoTo.init('.js-go-to');
});
let email = window.localStorage.getItem('pricechecker-user-name');
if(email){
    getAllPopularProducts();
}else {
    window.console.log("You should login to this site");
    window.location.href = '/pricechecker-frontend/';
}