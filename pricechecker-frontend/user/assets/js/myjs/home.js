// $(document).ready(function(){
//     //$('head').load(baseUserPathName + "/include/head.html");
//     // $('header').load(baseUserPathName + "/include/header.html");
//     // $('footer').load(baseUserPathName + "/include/footer.html");
//
//     // initialization of go to
//     $.HSCore.components.HSGoTo.init('.js-go-to');
// });
let email = window.localStorage.getItem('pricechecker-user-name');
if(email){
    getAllComparingProducts("", "");
}else {
    window.console.log("You should login to this site");
    window.location.href = '/pricechecker-frontend/';
    window.location.reload(true);
}