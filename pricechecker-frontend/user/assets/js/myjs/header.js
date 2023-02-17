let currentUser = window.localStorage.getItem('pricechecker-user-name');
let userMenu = document.getElementById('user-menu');
if(currentUser){
    //show current user name side of right side bar.'<i class="ec ec-user mr-1"></i> Register <span class="text-gray-50">or</span> Sign in'
    let auth = document.getElementById('authentication');
    auth.innerHTML = '<i class="ec ec-user mr-1"></i> Logout  :  ' + currentUser;
    auth.setAttribute('href', '/pricechecker-frontend/user/authentications/logout-user.html');
}else {
    let auth = document.getElementById('authentication');
    auth.innerHTML = '<i class="ec ec-user mr-1"></i> Register <span class="text-gray-50">or</span> Sign in';
    auth.setAttribute('href', '/pricechecker-frontend/user/authentications/login-user.html');
}
function onClickedSearch(){
    let searchVal = document.getElementById('search-product').value;
    let searchCategory = document.getElementById('search-category').value;
    window.localStorage.setItem('pricechecker-search-string', searchVal);
    window.localStorage.setItem('pricechecker-search-category', searchCategory);
    window.location.href = baseUserPathName + '/compare.html';
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
    }else {
        window.console.log("You should login!");
    }
}
function onClickedTrackNav(){
    if(currentUser){
        window.location.href = baseUserPathName + '/authorized/track-products.html';
    }else {
        window.console.log("You should login!");
    }
}
function onClickedRecent(){
    if(currentUser){
        window.location.href = baseUserPathName + '/authorized/visited-product.html';
    }else {
        window.console.log("You should login!");
    }
}