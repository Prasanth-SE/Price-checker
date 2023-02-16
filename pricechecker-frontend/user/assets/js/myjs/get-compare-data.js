function getEbayProductsForComparing(searchCategory, searchString, maxNumberOfProducts){
    let resultHtml = '';
    if(searchString){

    }
    let ajaxRequest = $.ajax(
        {
            async : false,
            method : "GET",
            url : baseServerPathNameForUser + '/products/ebay-compare-products.php?num=' + maxNumberOfProducts + '&searchval=' + searchString + '&category=' + searchCategory,
            headers:{
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            }
        }
    );
    ajaxRequest.success(function (response, textStatus){
        resultHtml = convertResponse2HtmlForCompare(response, 'Ebay');
    });
    ajaxRequest.fail(function (response, textStatus, xhr){
        resultHtml += 'Status is ' + textStatus + '\n Response is '+ response.toString();
    });
    resultHtml += '</div>';
    return resultHtml;
}

function getAmazonProductsForComparing(searchCategory, searchString, maxNumberOfProducts){
    let resultHtml = '';
    let ajaxRequest = $.ajax(
        {
            async : false,
            method : "GET",
            url : baseServerPathNameForUser + '/products/amazon-compare-products.php?num=' + maxNumberOfProducts + '&searchval=' + searchString + '&category=' + searchCategory,
            headers:{
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            }
        }
    );
    ajaxRequest.success(function (response, textStatus){
        resultHtml = convertResponse2HtmlForCompare(response, 'Amazon');
    });
    ajaxRequest.fail(function (response, textStatus, xhr){
        resultHtml += 'Status is ' + textStatus + '\n Response is '+ response.toString();
    });
    resultHtml += '</div>';
    return resultHtml;
}
function convertResponse2HtmlForCompare(response, shopName){
    let resultHtml = '';
    let resp = JSON.parse(response);
    if(resp['status'] === 'ok' && resp['data']){
        if(objLength(resp['data']['result']) > 0){
            let i = 0;
            let res = resp['data'];
            let b = {'shop-name':shopName.toLowerCase(), 'data':res['result'][0]};
            compareTableResult.push(b);
            resultHtml = '<div class="container"><div class="border-bottom border-color-1 mb-2">\n' +
                '        <h3 class="d-inline-block section-title section-title__full mb-0 pb-2 font-size-22">Products From ' + shopName + '</h3>\n' +
                '    </div></div>\n' +
                '    <div class="container">\n' +
                '        <!-- Brand Carousel -->\n' +
                '        <div class="container">\n' +
                '            <!-- Brand Carousel -->\n' +
                '            <div class="mb-6">\n' +
                '                <div class="py-2 border-top border-bottom">\n' +
                '                    <div id="compare-slick-test" class="js-slick-carousel u-slick my-1"\n' +
                '                         data-slides-show="4"\n' +
                '                         data-slides-scroll="2"\n' +
                '                         data-arrows-classes="d-none d-lg-inline-block u-slick__arrow-normal u-slick__arrow-centered--y"\n' +
                '                         data-arrow-left-classes="fa fa-angle-left u-slick__arrow-classic-inner--left z-index-9"\n' +
                '                         data-arrow-right-classes="fa fa-angle-right u-slick__arrow-classic-inner--right"\n' +
                '                         data-responsive=\'[{\n' +
                '                                "breakpoint": 992,\n' +
                '                                "settings": {\n' +
                '                                    "slidesToShow": 2\n' +
                '                                }\n' +
                '                            }, {\n' +
                '                                "breakpoint": 768,\n' +
                '                                "settings": {\n' +
                '                                    "slidesToShow": 1\n' +
                '                                }\n' +
                '                            }, {\n' +
                '                                "breakpoint": 554,\n' +
                '                                "settings": {\n' +
                '                                    "slidesToShow": 1\n' +
                '                                }\n' +
                '                            }]\'>';
            for(i = 0; i < res['result'].length; i++){
                resultHtml += '<div class="js-slide">\n' +
                    '                                <div class="product-item">\n' +
                    '                                    <div class="product-item__outer h-100">\n' +
                    '                                        <div class="product-item__inner px-wd-4 p-2 p-md-3">\n' +
                    '                                            <div class="product-item__body pb-xl-2">\n' +
                    '                                                <h5 class="mb-1 product-item__title"><a href="' + res['result'][i]['url'] + '" class="text-blue font-weight-bold">' + res['result'][i]['title'] + '</a></h5>\n' +
                    '                                                <div class="mb-2">\n' +
                    '                                                    <a href="' + res['result'][i]['url'] + '" class="d-block text-center"><img class="compare-image" src="' + res['result'][i]['thumbnail'] + '" alt="Image Description"></a>\n' +
                    '                                                </div>\n' +
                    '                                                <div class="flex-center-between mb-1">\n' +
                    '                                                    <div class="prodcut-price">\n' +
                    '                                                        <div class="text-gray-100">' + res['result'][i]['price']['current_price'] + '-' + res['result'][i]['price']['currency'] + '</div>\n' +
                    '                                                    </div>\n' +
                    '                                                    <div class="d-none d-xl-block prodcut-add-cart">\n' +
                    '                                                        <a onclick="onClickedCart(\'' + res['result'][i]['title'] + '\',\'' +  res['result'][i]['title'] + '\',\'' + res['result'][i]['url'] + '\',\'' + res['result'][i]['thumbnail'] + '\',\'' + res['result'][i]['price']['current_price'] + '\')" class="btn-add-cart btn-primary transition-3d-hover"><i class="ec ec-add-to-cart"></i></a>\n' +
                    '                                                    </div>\n' +
                    '                                                </div>\n' +
                    '                                            </div>\n' +
                    '                                            <div class="product-item__footer">\n' +
                    '                                                <div class="border-top pt-2 flex-center-between flex-wrap">\n' +
                    '                                                    <a data-tip="Go to Compare" onclick="function clicked(title) {goComparePage(title);} clicked(\'' + res['result'][i]['title'] + '\')" class="text-gray-6 font-size-13"><i class="ec ec-compare mr-1 font-size-15"></i> Compare</a>\n' +
                    '                                                    <a  data-tip="Add to Wishlist" onclick="onClickedFavs(\'' + res['result'][i]['title'] + '\',\'' +  res['result'][i]['title'] + '\',\'' + res['result'][i]['url'] + '\',\'' + res['result'][i]['thumbnail'] + '\',\'' + res['result'][i]['price']['current_price'] + '\')" class="text-gray-6 font-size-13"><i class="ec ec-favorites mr-1 font-size-15"></i> Wishlist</a>\n' +
                    '                                                </div>\n' +
                    '                                            </div>\n' +
                    '                                        </div>\n' +
                    '                                    </div>\n' +
                    '                                </div>\n' +
                    '                        </div>';

            }
            resultHtml += '</div>\n' +
                '                </div>\n' +
                '            </div>\n' +
                '            <!-- End Brand Carousel -->\n' +
                '        </div>';

        }
    }else {
        resultHtml = resp['error'];
    }
    return resultHtml;
}
function getAllComparingProducts(searchCategory, searchString){
    let amazonProducts = getAmazonProductsForComparing(searchCategory,searchString, numOfShowProducts);
    let ebayProducts = getEbayProductsForComparing(searchCategory,searchString, numOfShowProducts);
    // let walmartProducts = getWalmartProducts(numOfShowProducts);
    // let bestbuyProducts = getBesbuyProducts(numOfShowProducts);
    document.getElementById('popular-products-container').innerHTML = amazonProducts + ebayProducts;
}
