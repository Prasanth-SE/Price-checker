function getAmazonProducts(maxNumberOfProducts){
    let resultHtml = '';
    let ajaxRequest = $.ajax(
        {
            async : false,
            method : "GET",
            url : baseServerPathNameForUser + '/products/amazon-products.php?num=' + maxNumberOfProducts,
            headers:{
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            success: function (response) {
                resultHtml = convertResponse2HtmlForLatest(response, 'Amazon');
            },
            fail: function (response) {
                window.console.log('Response is '+ response.toString() + '\n');
            }
        }
    );
    return resultHtml;
}
function getBesbuyProducts(maxNumberOfProducts){
    let resultHtml = '';
    let ajaxRequest = $.ajax(
        {
            async : false,
            method : "GET",
            url : baseServerPathNameForUser + '/products/bestbuy-products.php?num=' + maxNumberOfProducts,
            headers:{
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            success: function (response) {
                resultHtml = convertResponse2HtmlForLatest(response, 'Bestbuy');
            },
            fail: function (response) {
                window.console.log('Response is '+ response.toString() + '\n');
            }
        }
    );
    return resultHtml;
}
function getEbayProducts(maxNumberOfProducts){
    let resultHtml = '';
    let ajaxRequest = $.ajax(
        {
            async : false,
            method : "GET",
            url : baseServerPathNameForUser + '/products/ebay-products.php?num=' + maxNumberOfProducts,
            headers:{
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            success: function (response) {
                resultHtml = convertResponse2HtmlForLatest(response, 'Ebay');
            },
            fail: function (response) {
                window.console.log('Response is '+ response.toString() + '\n');
            }
        }
    );
    return resultHtml;
}
function getWalmartProducts(maxNumberOfProducts){
    let resultHtml = '';
    $.ajax(
        {
            async : false,
            method : "GET",
            url : baseServerPathNameForUser + '/products/walmart-products.php?num=' + maxNumberOfProducts,
            headers:{
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            success: function (response) {
                resultHtml = convertResponse2HtmlForLatest(response, 'Walmart');
            },
            fail: function (response) {
                window.console.log('Response is '+ response.toString() + '\n');
            }
        }
    );
    return resultHtml;
}
function convertResponse2HtmlForLatest(response, shopName, numberOfShow){
    let resultHtml = '';

    let resp = JSON.parse(response);
    if(resp['status'] === 'ok' && resp['data']){
        if(objLength(resp['data']['deal_docs']) > 0){
            let i = 0;
            let res = resp['data'];
            resultHtml = '<div class="js-slide">\n' +
                        '   <ul class="list-unstyled products-group mb-0 overflow-visible">';
            for(i = 0; i < res['deal_docs'].length; i++){
                resultHtml += '<li class="product-item__list pb-2 mb-2 pb-md-0 mb-md-0">\n' +
                    '                                            <div class="product-item__outer h-100">\n' +
                    '                                                <div class="product-item__inner py-md-3 mx-3 border-bottom row no-gutters">\n' +
                    '                                                <div class="col-auto product-media-left">\n' +
                    '                                                        <a href="' + res['deal_docs'][i]['deal_details_url'] + '" class="max-width-70 d-block"><img class="img-fluid latest-image" src="' + res['deal_docs'][i]['deal_main_image_url'] + '" alt="Image Description"></a>\n' +
                    '                                                    </div>\n' +
                    '                                                    <div class="col product-item__body pl-2 pl-lg-3">\n' +
                    '                                                        <div class="mb-4">\n' +
                    '                                                            <h5 class="product-item__title"><a href="' + res['deal_docs'][i]['deal_details_url'] + '" class="text-gray-90">' + res['deal_docs'][i]['deal_title'] + '</a></h5>\n' +
                    '                                                        </div>\n' +
                    '                                                        <div class="flex-center-between">\n' +
                    '                                                            <div class="prodcut-price">\n' +
                    '                                                                <div class="text-gray-100 font-size-15 font-weight-bold">$' + res['deal_docs'][i]['app_sale_range']['min'] + '-$' + res['deal_docs'][i]['app_sale_range']['max'] + '</div>\n' +
                    '                                                            </div>\n' +
                    '                                                        </div>\n' +
                    '                                                    </div>\n' +
                    '                                                </div>\n' +
                    '                                            </div>\n' +
                    '                                        </li>';               
                if(i === numberOfShow){
                    break;
                }
            }
            resultHtml += ' </ul></div>';
        }
    }else {
        window.console.log('Status is ' + resp['status'] + '\n Response is '+ response.toString());
    }
    return resultHtml;
}
function getAllLatestProducts(){
    let amazonProducts = getAmazonProducts(numOfShowProducts);
    let ebayProducts = getEbayProducts(numOfShowProducts);
    let walmartProducts = getWalmartProducts(numOfShowProducts);
    let bestbuyProducts = getBesbuyProducts(numOfShowProducts);
    let container = document.getElementById('latest-products-container');
    container.innerHTML = amazonProducts + bestbuyProducts +
        ebayProducts + walmartProducts;
}
getAllLatestProducts();