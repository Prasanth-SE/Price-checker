//get and show products on page
let searchString = localStorage.getItem('pricechecker-search-string');
let searchCategory = localStorage.getItem('pricechecker-search-category');
if(searchString === '' && searchCategory === ''){
    getAllPopularProducts();
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

function makeTable(value) {
    let shopName = value['shop-name'];
    let data = value['data'];
    document.getElementById("td-product-compare-" + shopName).innerHTML = '<a href="' + data['url'] + '" class="product">\n' +
        '<div class="product-compare-image">\n' +
        '<div class="d-flex mb-3">\n' +
        '<img class="img-fluid mx-auto" src="' + data['thumbnail'] + '" alt="Image Description">\n' +
        '</div>\n' +
        '</div>\n' +
        '<h3 class="product-item__title text-blue font-weight-bold mb-3">' + data['title'] +'</h3>\n' +
        '</a>';
    document.getElementById("td-price-compare-" + shopName).innerHTML = '<div class="product-price">'+ data['price']['currency'] + data['price']['current_price'] + '</div>';
    document.getElementById("td-description-compare-" + shopName).innerHTML = data['title'];
}

function getCompareTable(){
    if(compareTableResult.length){
        compareTableResult.forEach(makeTable);
    }
}
getCompareTable();