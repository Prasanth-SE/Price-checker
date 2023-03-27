async function getAmazonProducts(maxNumberOfProducts){
    let resultHtml = '';
    let response = {};
    if(isMockData){
        response = await getAmazonProductsFromMock("", "",1, maxNumberOfProducts);
    }else {
        response = await getAmazonProductsFromApi("", "", 1, 60);
    }
    if(response['error'] === 'ok'){
        resultHtml += convertResponse2HtmlForLatest(response['data'], "Amazon");
    }else {
        resultHtml += response['error'];
    }
    return resultHtml;
}
async function getEbayProducts(maxNumberOfProducts){
    let resultHtml = '';
    let response = {};
    if(isMockData){
        response = await getEbayProductsFromMock("", "", 1, maxNumberOfProducts);
    }else {
        response = await getEbayProductsFromAPI("", "", 1, 60);
    }
    if(response['error'] === 'ok'){
        if(response['data']){
            resultHtml += convertResponse2HtmlForLatest(response['data'], "Ebay");
        }
    }else {
        resultHtml += response['error'];
    }
    return resultHtml;
}
function convertResponse2HtmlForLatest(response, shopName, numberOfShow){
    let resultHtml = '';
    // console.log("latest : " + shopName + ":" + response.length);
    let resLen = response.length;
    if(resLen > 0){
            let i = 0;
            resultHtml = '<div class="js-slide">\n' +
                        '   <ul class="list-unstyled products-group mb-0 overflow-visible">';
            for(i = 0; i < resLen; i++){
                // if(shopName === "Ebay")
                //     console.log("latest : " + shopName + ":" + response[i]['price']);
                let title = response[i]['title'];
                title = title.split(",", 1);
                let description = response[i]['description'];
                let product_url = response[i]['product_url'];
                let image_url = response[i]['image_url'];
                let re = /C /gi;
                let price = response[i]["price"].replace(re, "");
                // if(shopName === "Ebay")
                //     console.log("latest price after regx: " + shopName + ":" + price);
                resultHtml += '<li class="product-item__list pb-2 mb-2 pb-md-0 mb-md-0">\n' +
                    '                                            <div class="product-item__outer h-100">\n' +
                    '                                                <div class="product-item__inner py-md-3 mx-3 border-bottom row no-gutters">\n' +
                    '                                                <div class="col-auto product-media-left">\n' +
                    '                                                        <a href="' + product_url + '" class="max-width-70 d-block" target="_blank"><img class="img-fluid latest-image" src="' + image_url + '" alt="Image Description"></a>\n' +
                    '                                                    </div>\n' +
                    '                                                    <div class="col product-item__body pl-2 pl-lg-3">\n' +
                    '                                                        <div class="mb-4">\n' +
                    '                                                            <h5 class="product-item__title"><a href="' + product_url + '" class="text-gray-90" target="_blank">' + title + '</a></h5>\n' +
                    '                                                        </div>\n' +
                    '                                                        <div class="flex-center-between">\n' +
                    '                                                            <div class="prodcut-price">\n' +
                    '                                                                <div class="text-gray-100 font-size-15 font-weight-bold">' + price + '</div>\n' +
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
    return resultHtml;
}
async function getAllLatestProducts(){
    let amazonProducts = await getAmazonProducts(numOfShowProducts);
    let ebayProducts = await getEbayProducts(numOfShowProducts);
    let container = document.getElementById('latest-products-container');
    container.innerHTML = amazonProducts +     ebayProducts ;
    // initialization of slick carousel
    $.HSCore.components.HSSlickCarousel.init('#latest-products-container');
}
 getAllLatestProducts();