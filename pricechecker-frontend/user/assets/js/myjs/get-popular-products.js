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
                resultHtml = convertResponse2HtmlForPopular(response, 'Amazon');
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
                resultHtml = convertResponse2HtmlForPopular(response, 'Bestbuy');
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
                resultHtml = convertResponse2HtmlForPopular(response, 'Ebay');
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
    let ajaxRequest = $.ajax(
        {
            async : false,
            method : "GET",
            url : baseServerPathNameForUser + '/products/walmart-products.php?num=' + maxNumberOfProducts,
            headers:{
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            success: function (response) {
                resultHtml = convertResponse2HtmlForPopular(response, 'Walmart');
            },
            fail: function (response) {
                window.console.log('Response is '+ response.toString() + '\n');
            }
        }
    );
    return resultHtml;
}
function convertResponse2HtmlForPopular(response, shopName, numberOfShow){
    let resultHtml = '';

    let resp = JSON.parse(response);
    if(resp['status'] === 'ok' && resp['data']){
        if(objLength(resp['data']['deal_docs']) > 0){
            let i = 0;
            let res = resp['data'];
            resultHtml = '<div class="position-relative">\n' +
                '                        <div class="border-bottom border-color-1 mb-2">\n' +
                '                            <h3 class="section-title mb-0 pb-2 font-size-22">Products From ' + shopName + '</h3>\n' +
                '                        </div>\n' +
                '                        <div class="js-slick-carousel u-slick position-static overflow-hidden u-slick-overflow-visble pb-7 pt-2 px-1"\n' +
                '                             data-pagi-classes="text-center right-0 bottom-1 left-0 u-slick__pagination u-slick__pagination--long mb-0 z-index-n1 mt-3 mt-md-0"\n' +
                '                             data-slides-show="5"\n' +
                '                             data-slides-scroll="1"\n' +
                '                             data-arrows-classes="position-absolute top-0 font-size-17 u-slick__arrow-normal top-10"\n' +
                '                             data-arrow-left-classes="fa fa-angle-left right-1"\n' +
                '                             data-arrow-right-classes="fa fa-angle-right right-0"\n' +
                '                             data-responsive=\'[{\n' +
                '                                  "breakpoint": 1400,\n' +
                '                                  "settings": {\n' +
                '                                    "slidesToShow": 4\n' +
                '                                  }\n' +
                '                                }, {\n' +
                '                                    "breakpoint": 1200,\n' +
                '                                    "settings": {\n' +
                '                                      "slidesToShow": 3\n' +
                '                                    }\n' +
                '                                }, {\n' +
                '                                  "breakpoint": 992,\n' +
                '                                  "settings": {\n' +
                '                                    "slidesToShow": 3\n' +
                '                                  }\n' +
                '                                }, {\n' +
                '                                  "breakpoint": 768,\n' +
                '                                  "settings": {\n' +
                '                                    "slidesToShow": 2\n' +
                '                                  }\n' +
                '                                }, {\n' +
                '                                  "breakpoint": 554,\n' +
                '                                  "settings": {\n' +
                '                                    "slidesToShow": 2\n' +
                '                                  }\n' +
                '                                }]\'>';
            for(i = 0; i < res['deal_docs'].length; i++){
                let title = res['deal_docs'][i]['deal_title'];
                let description = res['deal_docs'][i]['deal_title']
                let product_url = res['deal_docs'][i]['deal_details_url'];
                let image_url = res['deal_docs'][i]['deal_main_image_url']
                let price = '$' + res['deal_docs'][i]['app_sale_range']['min'] + '-$' + res['deal_docs'][i]['app_sale_range']['max'];
                resultHtml += '<div class="js-slide products-group">\n' +
                    '                                <div class="product-item">\n' +
                    '                                    <div class="product-item__outer h-100">\n' +
                    '                                        <div class="product-item__inner px-wd-4 p-2 p-md-3">\n' +
                    '                                            <div class="product-item__body pb-xl-2">\n' +
                    '                                                <h5 class="mb-1 product-item__title"><a href="' + product_url + '" class="text-blue font-weight-bold">' + title + '</a></h5>\n' +
                    '                                                <div class="mb-2">\n' +
                    '                                                    <a onclick="onClickedCart(\'' + title + '\',\'' +  description + '\',\'' + product_url + '\',\'' + image_url + '\',\'' + price + '\')"  class="d-block text-center">' +
                    '                                                           <img class="popular-image" src="' + image_url + '" alt="Image Description"></a>\n' +
                    '                                                </div>\n' +
                    '                                                <div class="flex-center-between mb-1">\n' +
                    '                                                    <div class="prodcut-price">\n' +
                    '                                                        <div class="text-gray-100">' + price + '</div>\n' +
                    '                                                    </div>\n' +
                    '                                                    <div class="d-none d-xl-block prodcut-add-cart">\n' +
                    '                                                        <a  onclick="onClickedCart(\'' + title + '\',\'' +  description + '\',\'' + product_url + '\',\'' + image_url + '\',\'' + price + '\')"  class="btn-add-cart btn-primary transition-3d-hover"><i class="ec ec-add-to-cart"></i></a>\n' +
                    '                                                    </div>\n' +
                    '                                                </div>\n' +
                    '                                            </div>\n' +
                    '                                            <div class="product-item__footer">\n' +
                    '                                                <div class="border-top pt-2 flex-center-between flex-wrap">\n' +
                    '                                                    <a data-tip="Go to Compare" onclick="goComparePage(\'' + title + '\')" class="text-gray-6 font-size-13"><i class="ec ec-compare mr-1 font-size-15"></i> Compare</a>\n' +
                    '                                                    <a  data-tip="Add to Wishlist" onclick=" goFavouritePage(\'' + title + '\',\'' +  description + '\',\'' + product_url + '\',\'' + image_url + '\',\'' + price + '\')" class="text-gray-6 font-size-13"><i class="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>\n' +
                    '                                                </div>\n' +
                    '                                            </div>\n' +
                    '                                        </div>\n' +
                    '                                    </div>\n' +
                    '                                </div>\n' +
                    '                            </div>';
                if(i === numberOfShow){
                    break;
                }
            }
            resultHtml += '</div></div>';
        }
    }else {
        window.console.log('Resp is ' + resp['status'] + '\nResponse is '+ response.toString() + '\n');
    }
    return resultHtml;
}
function getAllPopularProducts(){
    let amazonProducts = getAmazonProducts(numOfShowProducts);
    let ebayProducts = getEbayProducts(numOfShowProducts);
    let walmartProducts = getWalmartProducts(numOfShowProducts);
    let bestbuyProducts = getBesbuyProducts(numOfShowProducts);
    let container = document.getElementById('popular-products-container');
    container.innerHTML = amazonProducts + bestbuyProducts +
        ebayProducts + walmartProducts;
}
getAllPopularProducts();