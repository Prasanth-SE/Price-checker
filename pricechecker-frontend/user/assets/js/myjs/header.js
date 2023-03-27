let currentUser = window.localStorage.getItem('pricechecker-user-name');
let userMenu = document.getElementById('user-menu');
let homeElm = document.getElementById("nav-home-li");
let wishElm = document.getElementById("nav-fav-li");
let profileElm = document.getElementById("nav-profile-li");
let productsElm = document.getElementById("nav-myproduct-li");
let auth = document.getElementById('authentication');
let price_filter = document.getElementById('price-filter');
price_filter.selectedIndex = parseInt(window.localStorage.getItem('price-filter-current-index'));
if(currentUser){
    //show current user name side of right side bar.'<i class="ec ec-user mr-1"></i> Register <span class="text-gray-50">or</span> Sign in'

    auth.innerHTML = '<i class="ec ec-user mr-1"></i> Logout  :  ' + currentUser;
    auth.setAttribute('href', '/pricechecker-frontend/user/authentications/logout-user.html');

    homeElm.setAttribute("style", "visibility:visible;");
    profileElm.setAttribute("style", "visibility:visible;");
    productsElm.setAttribute("style", "visibility:visible;");
    wishElm.setAttribute("style", "visibility:visible;");
}else {
    auth.innerHTML = '<i class="ec ec-user mr-1"></i> Register <span class="text-gray-50">or</span> Sign in';
    auth.setAttribute('href', '/pricechecker-frontend/user/authentications/login-user.html');

    homeElm.setAttribute("style", "visibility:collapse;");
    profileElm.setAttribute("style", "visibility:collapse;");
    productsElm.setAttribute("style", "visibility:collapse;");
    wishElm.setAttribute("style", "visibility:collapse;")
}
function onClickedSearch(){
    let searchVal = document.getElementById('search-product').value;
    let priceFilterCurrentIndex = price_filter.selectedIndex
    let startPrice = "0";
    let endPrice = "40";
    switch (priceFilterCurrentIndex) {
        case 0:
            startPrice = "-1";
            endPrice = "0";
            break;
        case 1:
            startPrice = "0";
            endPrice = "40";
            break;
        case 2:
            startPrice = "40";
            endPrice = "200";
            break;
        case 3:
            startPrice = "200";
            endPrice = "700";
            break;
        case 4:
            startPrice = "700";
            endPrice = "1000";
            break;
        case 5:
            startPrice = "-1000";
            endPrice = "1000";
            break;
    }
    let searchCategory = "ALL";
    window.localStorage.setItem('pricechecker-search-string', searchVal);
    window.localStorage.setItem('price-filter-start', startPrice);
    window.localStorage.setItem('price-filter-end', endPrice);
    window.localStorage.setItem('price-filter-current-index', priceFilterCurrentIndex);
    window.localStorage.setItem('pricechecker-search-category', searchCategory);
    let curren_url = window.location.href;

    window.location.reload(true);
    // if(checkExistOrNot(curren_url, "compare")){
    //     window.location.href = baseUserPathName + '/compare.html';
    // }else if(checkExistOrNot(curren_url, "home")) {
    //     window.location.href = baseUserPathName + '/home.html';
    // }
}
function onClickedFavs(){
    if(currentUser){
        window.location.href = baseUserPathName + '/authorized/favourites.html';
    }else {
        window.console.log("You should login!");
    }
}
function onClickedHome(){
    if(currentUser){
        window.location.href = baseUserPathName + '/authorized/home.html';
        // window.location.reload(true);
    }else {
        window.console.log("You should login!");
    }
}
function onClickedTrackNav(){
    if(currentUser){
        window.location.href = baseUserPathName + '/authorized/track-products.html';
        // window.location.reload(true);
    }else {
        window.console.log("You should login!");
    }
}
function onClickedRecent(){
    if(currentUser){
        window.location.href = baseUserPathName + '/authorized/visited-product.html';
        // window.location.reload(true);
    }else {
        window.console.log("You should login!");
    }
}
function onClickedMyProfile() {
    if(currentUser){
        window.location.href = baseUserPathName + '/authorized/user-profile.html';
        // window.location.reload(true);
    }

}