//get and show products on page
let searchString = localStorage.getItem('pricechecker-search-string');
let searchCategory = localStorage.getItem('pricechecker-search-category');
if(localStorage.getItem("pricechecker-user-name")){
    document.getElementById("warning-for-login").setAttribute("style", 'visibility:hidden') ;
}
if(searchString === '' && searchCategory === ''){
    getAllComparingProducts("All", "");
}else {
    if((searchCategory === '') || (searchCategory === null)){
        searchCategory = 'All';
    }
    if((searchString === '') || (searchString === null)){
        searchString = 'All';
    }
    getAllComparingProducts(searchCategory, searchString);
}
function searchProducts(){
    let searchString = document.getElementById('search-string').value;
    compare(searchString);
}
function compare(searchString) {
    getAllComparingProducts(searchString, searchCategory);
}

// function makeTable(value) {
//     let shopName = value['shop-name'];
//     let data = value['data'];
//     let title = data['title'];
//     let description = data['description'];
//     let product_url = data['product_url'];
//     let image_url = data['image_url'];
//     let price = data['price'];
//     document.getElementById("td-product-compare-" + shopName).innerHTML = '<a href="' + product_url + '" class="product">\n' +
//         '<div class="product-compare-image">\n' +
//         '<div class="d-flex mb-3">\n' +
//         '<img class="img-fluid mx-auto" src="' + image_url + '" alt="Image Description">\n' +
//         '</div>\n' +
//         '</div>\n' +
//         '<h3 class="product-item__title text-blue font-weight-bold mb-3">' + title +'</h3>\n' +
//         '</a>';
//     document.getElementById("td-price-compare-" + shopName).innerHTML = '<div class="product-price">'+ price + '</div>';
//     document.getElementById("td-description-compare-" + shopName).innerHTML = description;
// }
// function getCompareTable(){
//     if(compareTableResult.length){
//         compareTableResult.forEach(makeTable);
//     }
// }
// getCompareTable();