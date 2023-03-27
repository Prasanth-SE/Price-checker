async function getEbayProductsFromAPI(searchCategory, searchString, currentPage, maxNumberOfProducts) {
    let retArray = [];
    let retData = {};
    let url = '';
    if (searchString) {
        url = "https://ebay-data-scraper.p.rapidapi.com/products?page_number=" + currentPage + "&product_name=" + searchString + "&country=canada";
    } else {
        url = "https://ebay-data-scraper.p.rapidapi.com/products?page_number=1&product_name=laptop&country=canada";
    }

    return new Promise((resolve, reject) => {
        $.ajax({
        "async": false,
        "crossDomain": true,
        "url": url,
        "method": "GET",
        "headers": {
            "X-RapidAPI-Key": "d481c8a88fmsh66a39700101964fp15b1f5jsnb524d8ed956c",
            "X-RapidAPI-Host": "ebay-data-scraper.p.rapidapi.com"
        },
        success: function (response) {
            var myJsonString = JSON.stringify(response);
            let resp = JSON.parse(myJsonString);
            if(resp){
                retArray = convertEbayResponseForUI(resp, 'Ebay', currentPage, maxNumberOfProducts);
            }
            retData['error'] = "ok";
            retData['data'] = retArray;
            return resolve(retData);
        },
        fail: function (response, textStatus) {
            retData['error'] = 'Ebay Status is ' + textStatus + '\n Response is ' + response.toString();
            window.console.log("ebay response:" + response.toString());
            return reject(retData);
        }
        });
    });
}
function convertEbayResponseForUI(response, eshop, currentPage, numberInPage) {
    let retArray = [];

    let respLen = response.length;
    let startIndex = 0;
    if (currentPage > 0 && (currentPage * numberInPage) < respLen) {
        startIndex = currentPage * numberInPage - 1;
    }
    let endIndex = numberInPage * (currentPage + 1);
    if (startIndex > respLen - 1) {
        startIndex = respLen - 11;
        if(startIndex < 0) startIndex = 0;
        endIndex = respLen;
    }
    if (endIndex > respLen - 1) {
        endIndex = respLen;
    }
    if (respLen > 0) {
        let startPriceStr = window.localStorage.getItem('price-filter-start');
        let endPriceStr = window.localStorage.getItem('price-filter-end');
        let startPrice = -1;
        let endPrice = 0;
        if (startPriceStr){
            startPrice = parseInt(startPriceStr);
        }
        if(endPriceStr){
            endPrice = parseInt(endPriceStr);
        }
        for (let i = 0; i < respLen; i++) {
            let row = response[i];
            let buff = {};
            buff['title'] = removeSpecialChars(row['name']);
            buff['description'] = removeSpecialChars(row['description']);
            buff['product_url'] = row['link'];
            buff['image_url'] = row['thumbnail'];
            buff['price'] = row['price'];
            buff['eshop'] = eshop;
            let re = /C \$/gi;
            let price = row['price'].replace(re, "");
            let price_buff = parseFloat(price);
            if(startPrice === -1){
                retArray.push(buff);
            }else if(startPrice === -1000){
                if(price_buff > 1000){
                    retArray.push(buff);
                }
            }else {
                if ((startPrice <= price_buff) && (price_buff <= endPrice)) {
                    retArray.push(buff);
                }
            }
        }
        if((0 < retArray.length) && (retArray.length < 4)){
            let index = 0;
            for(let i = retArray.length; i < 4; i ++){
                retArray.push(retArray[index]);
                index ++;
            }
        }
    }
    return retArray;
}