let search_string = window.localStorage.getItem("pricechecker-search-string")
getAllComparingProducts("all", search_string);
// $(document).ready(function(){
//     //$('head').load(baseUserPathName + "/include/head.html");
//     $('header').load(baseUserPathName + "/include/header.html");
//     $('footer').load(baseUserPathName + "/include/footer.html");
//
//     // initialization of go to
//     $.HSCore.components.HSGoTo.init('.js-go-to');
// });